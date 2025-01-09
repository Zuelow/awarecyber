import json
import os
import time
from datetime import datetime
from watchdog.observers import Observer
from watchdog.events import FileSystemEventHandler

BLOG_POSTS_DIR = "blog_posts"
JSON_DB_FILE = "src/data/blog_posts.json"

class BlogPostHandler(FileSystemEventHandler):
    def on_created(self, event):
        if event.is_directory:
            return
        if event.src_path.endswith('.md'):
            self.process_new_blog_post(event.src_path)

    def process_new_blog_post(self, file_path):
        try:
            with open(file_path, 'r', encoding='utf-8') as file:
                content = file.read()
                
            # Extract metadata and content from markdown
            metadata, post_content = self.parse_markdown(content)
            
            # Create new blog post entry
            new_post = {
                'id': self.generate_post_id(),
                'title': metadata.get('title', 'Untitled'),
                'excerpt': metadata.get('excerpt', ''),
                'content': post_content,
                'date': datetime.now().strftime('%Y-%m-%d'),
                'image': metadata.get('image', 'https://source.unsplash.com/random/800x600/?cybersecurity'),
                'author': metadata.get('author', 'Admin')
            }
            
            # Add to database
            self.add_to_database(new_post)
            
            # Move processed file to archive
            self.archive_file(file_path)
            
            print(f"Successfully processed new blog post: {new_post['title']}")
            
        except Exception as e:
            print(f"Error processing blog post {file_path}: {str(e)}")

    def parse_markdown(self, content):
        """Parse markdown file with YAML front matter"""
        metadata = {}
        post_content = content
        
        # Check for YAML front matter
        if content.startswith('---'):
            parts = content.split('---', 2)
            if len(parts) >= 3:
                # Parse metadata
                metadata_lines = parts[1].strip().split('\n')
                for line in metadata_lines:
                    if ':' in line:
                        key, value = line.split(':', 1)
                        metadata[key.strip()] = value.strip()
                post_content = parts[2].strip()
        
        return metadata, post_content

    def generate_post_id(self):
        """Generate a unique post ID"""
        try:
            with open(JSON_DB_FILE, 'r') as f:
                posts = json.load(f)
            return max(post['id'] for post in posts) + 1
        except (FileNotFoundError, json.JSONDecodeError, ValueError):
            return 1

    def add_to_database(self, new_post):
        """Add new post to JSON database"""
        try:
            # Read existing posts
            posts = []
            if os.path.exists(JSON_DB_FILE):
                with open(JSON_DB_FILE, 'r') as f:
                    posts = json.load(f)
            
            # Add new post
            posts.append(new_post)
            
            # Write back to file
            os.makedirs(os.path.dirname(JSON_DB_FILE), exist_ok=True)
            with open(JSON_DB_FILE, 'w') as f:
                json.dump(posts, f, indent=2)
                
        except Exception as e:
            print(f"Error updating database: {str(e)}")

    def archive_file(self, file_path):
        """Move processed file to archive directory"""
        archive_dir = os.path.join(BLOG_POSTS_DIR, 'archived')
        os.makedirs(archive_dir, exist_ok=True)
        
        filename = os.path.basename(file_path)
        archive_path = os.path.join(archive_dir, filename)
        
        try:
            os.rename(file_path, archive_path)
        except Exception as e:
            print(f"Error archiving file: {str(e)}")

def main():
    # Create necessary directories
    os.makedirs(BLOG_POSTS_DIR, exist_ok=True)
    os.makedirs(os.path.dirname(JSON_DB_FILE), exist_ok=True)
    
    # Initialize JSON file if it doesn't exist
    if not os.path.exists(JSON_DB_FILE):
        with open(JSON_DB_FILE, 'w') as f:
            json.dump([], f)
    
    # Set up file system observer
    event_handler = BlogPostHandler()
    observer = Observer()
    observer.schedule(event_handler, BLOG_POSTS_DIR, recursive=False)
    observer.start()
    
    print(f"Watching for new blog posts in {os.path.abspath(BLOG_POSTS_DIR)}")
    print("Place your markdown files in this directory to automatically add them to the blog")
    
    try:
        while True:
            time.sleep(1)
    except KeyboardInterrupt:
        observer.stop()
    observer.join()

if __name__ == "__main__":
    main()

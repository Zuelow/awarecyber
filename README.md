# AwareCyber

A modern cybersecurity awareness platform built with React, featuring an interactive blog system and security information portal.

## Features

- 🔒 Interactive Security Mechanisms Visualization
- 📝 Blog System with Markdown Support
- 🔐 Password Protected Admin Dashboard
- 🎨 Modern UI with Material Design
- 📱 Fully Responsive Design

## Live Demo

Visit the live site: [https://YOUR_GITHUB_USERNAME.github.io/awarecyber](https://YOUR_GITHUB_USERNAME.github.io/awarecyber)

## Local Development

1. Clone the repository:
```bash
git clone https://github.com/YOUR_GITHUB_USERNAME/awarecyber.git
cd awarecyber
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. For the blog system, start the Python watcher:
```bash
cd backend
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
python blog_watcher.py
```

## Adding Blog Posts

1. Create a markdown file in the `blog_posts` directory with the following format:

```markdown
---
title: Your Post Title
excerpt: A brief description
author: Your Name
image: URL to post image
---

Your post content here...
```

2. Save the file and the blog watcher will automatically process it.

## Deployment

To deploy to GitHub Pages:

1. Update the homepage in `package.json` with your GitHub username
2. Run the deploy command:
```bash
npm run deploy
```

## Technologies Used

- React
- Material-UI
- Styled Components
- Python (Blog Watcher)
- GitHub Pages

## License

MIT License

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Card,
  CardContent,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const DashboardContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  backgroundColor: '#f5f5f5',
  minHeight: '100vh',
}));

const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: theme.shadows[8],
  },
}));

const PostTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  marginBottom: theme.spacing(1),
}));

const PostExcerpt = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  marginBottom: theme.spacing(2),
}));

const ActionButton = styled(Button)(({ theme }) => ({
  marginRight: theme.spacing(1),
}));

const EditorContainer = styled(Box)(({ theme }) => ({
  '& .ql-container': {
    minHeight: '200px',
    marginBottom: theme.spacing(2),
  },
}));

const BlogDashboard = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: 'Understanding Cybersecurity Basics',
      excerpt: 'Learn about the fundamental concepts of cybersecurity...',
      content: 'Full content here...',
      date: '2025-01-09',
    },
    // Add more sample posts as needed
  ]);

  const [openDialog, setOpenDialog] = useState(false);
  const [currentPost, setCurrentPost] = useState({
    title: '',
    excerpt: '',
    content: '',
  });
  const [isEditing, setIsEditing] = useState(false);

  const handleOpenDialog = (post = null) => {
    if (post) {
      setCurrentPost(post);
      setIsEditing(true);
    } else {
      setCurrentPost({ title: '', excerpt: '', content: '' });
      setIsEditing(false);
    }
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setCurrentPost({ title: '', excerpt: '', content: '' });
    setIsEditing(false);
  };

  const handleSavePost = () => {
    if (isEditing) {
      setPosts(posts.map(post => 
        post.id === currentPost.id ? { ...currentPost } : post
      ));
    } else {
      setPosts([
        ...posts,
        {
          ...currentPost,
          id: posts.length + 1,
          date: new Date().toISOString().split('T')[0],
        },
      ]);
    }
    handleCloseDialog();
  };

  const handleDeletePost = (id) => {
    setPosts(posts.filter(post => post.id !== id));
  };

  return (
    <DashboardContainer>
      <Container>
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={4}>
          <Typography variant="h4" component="h1" gutterBottom>
            Blog Dashboard
          </Typography>
          <Button
            variant="contained"
            color="primary"
            startIcon={<AddIcon />}
            onClick={() => handleOpenDialog()}
          >
            New Post
          </Button>
        </Box>

        <Grid container spacing={3}>
          {posts.map((post) => (
            <Grid item xs={12} md={6} lg={4} key={post.id}>
              <StyledCard>
                <CardContent>
                  <PostTitle variant="h6">{post.title}</PostTitle>
                  <PostExcerpt variant="body2">{post.excerpt}</PostExcerpt>
                  <Typography variant="caption" display="block" gutterBottom>
                    Published: {post.date}
                  </Typography>
                  <Box display="flex" justifyContent="flex-end">
                    <IconButton
                      size="small"
                      onClick={() => handleOpenDialog(post)}
                      color="primary"
                    >
                      <EditIcon />
                    </IconButton>
                    <IconButton
                      size="small"
                      onClick={() => handleDeletePost(post.id)}
                      color="error"
                    >
                      <DeleteIcon />
                    </IconButton>
                  </Box>
                </CardContent>
              </StyledCard>
            </Grid>
          ))}
        </Grid>

        <Dialog
          open={openDialog}
          onClose={handleCloseDialog}
          maxWidth="md"
          fullWidth
        >
          <DialogTitle>
            {isEditing ? 'Edit Post' : 'Create New Post'}
          </DialogTitle>
          <DialogContent>
            <Box sx={{ pt: 2 }}>
              <TextField
                fullWidth
                label="Title"
                value={currentPost.title}
                onChange={(e) => setCurrentPost({ ...currentPost, title: e.target.value })}
                margin="normal"
              />
              <TextField
                fullWidth
                label="Excerpt"
                value={currentPost.excerpt}
                onChange={(e) => setCurrentPost({ ...currentPost, excerpt: e.target.value })}
                margin="normal"
                multiline
                rows={2}
              />
              <EditorContainer>
                <ReactQuill
                  value={currentPost.content}
                  onChange={(content) => setCurrentPost({ ...currentPost, content })}
                  modules={{
                    toolbar: [
                      [{ header: [1, 2, false] }],
                      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                      [{ list: 'ordered' }, { list: 'bullet' }],
                      ['link', 'image'],
                      ['clean'],
                    ],
                  }}
                />
              </EditorContainer>
            </Box>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialog}>Cancel</Button>
            <Button
              onClick={handleSavePost}
              variant="contained"
              color="primary"
            >
              {isEditing ? 'Update' : 'Publish'}
            </Button>
          </DialogActions>
        </Dialog>
      </Container>
    </DashboardContainer>
  );
};

export default BlogDashboard;

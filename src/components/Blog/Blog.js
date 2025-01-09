import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Tabs,
  Tab,
  Alert,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import BlogDashboard from './BlogDashboard';
import LoginDialog from './LoginDialog';

const BlogContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  backgroundColor: '#f5f5f5',
  minHeight: '100vh',
}));

const BlogCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: theme.shadows[8],
  },
}));

const BlogTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  marginBottom: theme.spacing(1),
}));

const BlogExcerpt = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  marginBottom: theme.spacing(2),
}));

const StyledTabs = styled(Tabs)(({ theme }) => ({
  marginBottom: theme.spacing(4),
  borderBottom: `1px solid ${theme.palette.divider}`,
}));

function Blog() {
  const [currentTab, setCurrentTab] = useState(0);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showLoginDialog, setShowLoginDialog] = useState(false);
  const [loginMessage, setLoginMessage] = useState('');
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Load posts from JSON file
    const loadPosts = async () => {
      try {
        const response = await fetch('/data/blog_posts.json');
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error('Error loading blog posts:', error);
        // Set default posts if JSON file doesn't exist yet
        setPosts([
          {
            id: 1,
            title: 'Understanding Cybersecurity Basics',
            excerpt: 'Learn about the fundamental concepts of cybersecurity and how to protect yourself online.',
            image: 'https://source.unsplash.com/random/800x600/?cybersecurity',
            date: '2025-01-09',
          },
          {
            id: 2,
            title: 'Top 10 Security Threats in 2025',
            excerpt: 'Discover the most common cybersecurity threats and how to defend against them.',
            image: 'https://source.unsplash.com/random/800x600/?security',
            date: '2025-01-08',
          },
        ]);
      }
    };

    loadPosts();
  }, []);

  const handleTabChange = (event, newValue) => {
    if (newValue === 1 && !isAuthenticated) {
      setShowLoginDialog(true);
    } else {
      setCurrentTab(newValue);
    }
  };

  const handleLogin = () => {
    setIsAuthenticated(true);
    setShowLoginDialog(false);
    setCurrentTab(1);
    setLoginMessage('Successfully logged in to dashboard');
    setTimeout(() => setLoginMessage(''), 3000);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setCurrentTab(0);
    setLoginMessage('Successfully logged out');
    setTimeout(() => setLoginMessage(''), 3000);
  };

  return (
    <BlogContainer>
      <Container>
        <StyledTabs
          value={currentTab}
          onChange={handleTabChange}
          centered
        >
          <Tab label="Blog Posts" />
          <Tab label={isAuthenticated ? "Dashboard" : "Admin Login"} />
        </StyledTabs>

        {loginMessage && (
          <Alert 
            severity="success" 
            sx={{ mb: 3 }}
            onClose={() => setLoginMessage('')}
          >
            {loginMessage}
          </Alert>
        )}

        {currentTab === 0 ? (
          <>
            <Typography variant="h4" component="h1" gutterBottom align="center" mb={4}>
              Latest Blog Posts
            </Typography>
            <Grid container spacing={4}>
              {posts.map((post) => (
                <Grid item xs={12} md={6} lg={4} key={post.id}>
                  <BlogCard>
                    <CardMedia
                      component="img"
                      height="200"
                      image={post.image}
                      alt={post.title}
                    />
                    <CardContent>
                      <BlogTitle variant="h6">
                        {post.title}
                      </BlogTitle>
                      <BlogExcerpt variant="body2">
                        {post.excerpt}
                      </BlogExcerpt>
                      <Typography variant="caption" display="block" gutterBottom>
                        Published: {post.date}
                      </Typography>
                      <Button
                        variant="outlined"
                        color="primary"
                        size="small"
                        sx={{ mt: 2 }}
                      >
                        Read More
                      </Button>
                    </CardContent>
                  </BlogCard>
                </Grid>
              ))}
            </Grid>
          </>
        ) : (
          isAuthenticated ? (
            <Box>
              <Box display="flex" justifyContent="flex-end" mb={2}>
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={handleLogout}
                >
                  Logout
                </Button>
              </Box>
              <BlogDashboard posts={posts} setPosts={setPosts} />
            </Box>
          ) : null
        )}

        <LoginDialog
          open={showLoginDialog}
          onClose={() => setShowLoginDialog(false)}
          onLogin={handleLogin}
        />
      </Container>
    </BlogContainer>
  );
}

export default Blog;

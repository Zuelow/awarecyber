import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  TextField,
  Select,
  MenuItem,
  Button,
  IconButton,
} from '@mui/material';
import styled from 'styled-components';
import RefreshIcon from '@mui/icons-material/Refresh';
import SearchIcon from '@mui/icons-material/Search';

const Section = styled(Box)`
  padding: 80px 0;
  position: relative;
  background-color: ${props => props.bgcolor || '#fff'};
`;

const HeroSection = styled(Section)`
  background-color: #006B54;
  color: white;
  padding: 60px 0;
  position: relative;
  overflow: hidden;
`;

const VirusIcon = styled(Box)`
  position: absolute;
  width: 40px;
  height: 40px;
  background-color: #FF6B6B;
  border-radius: 50%;
  opacity: 0.6;
`;

const SearchContainer = styled(Box)`
  display: flex;
  gap: 16px;
  margin-bottom: 32px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

const StyledTextField = styled(TextField)`
  background-color: white;
  border-radius: 4px;
  min-width: 200px;
  .MuiOutlinedInput-root {
    &:hover fieldset {
      border-color: #006B54;
    }
    &.Mui-focused fieldset {
      border-color: #006B54;
    }
  }
`;

const StyledSelect = styled(Select)`
  background-color: white;
  min-width: 150px;
  .MuiOutlinedInput-root {
    &:hover fieldset {
      border-color: #006B54;
    }
  }
`;

const SearchButton = styled(Button)`
  background-color: #FF6B6B !important;
  color: white !important;
  padding: 8px 24px !important;
  &:hover {
    background-color: #ff5252 !important;
  }
`;

const BookCard = styled(Card)`
  height: 100%;
  transition: transform 0.3s ease;
  cursor: pointer;
  &:hover {
    transform: translateY(-5px);
  }
`;

const BookImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const books = [
  {
    id: 1,
    title: 'Cybersecurity Basics',
    image: '/images/cyber-basics.jpg',
    description: 'Cybersecurity basics are fundamental principles which should be followed by organizations and individuals alike to protect their digital systems and data.',
    isbn: '978-0123456789'
  },
  {
    id: 2,
    title: 'Intermediate Cybersecurity',
    image: '/images/cyber-intermediate.jpg',
    description: 'Cybersecurity is a critical aspect of modern business operations, and specializes key in protecting it from, process and transmit sensitive.',
    isbn: '978-9876543210'
  }
];

const categories = ['All Categories', 'Basics', 'Intermediate', 'Advanced'];
const authors = ['All Authors', 'John Doe', 'Jane Smith', 'Alan Turing'];

function Download() {
  const [searchParams, setSearchParams] = useState({
    title: '',
    isbn: '',
    category: 'All Categories',
    author: 'All Authors'
  });

  const handleSearch = () => {
    console.log('Search params:', searchParams);
  };

  const handleReset = () => {
    setSearchParams({
      title: '',
      isbn: '',
      category: 'All Categories',
      author: 'All Authors'
    });
  };

  return (
    <>
      <HeroSection>
        <Container>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12}>
              <Typography variant="h2" component="h1" align="center" gutterBottom>
                Download
              </Typography>
              <Typography variant="subtitle1" align="center">
                Awarecyber > Download
              </Typography>
            </Grid>
          </Grid>
        </Container>
        <VirusIcon style={{ top: '10%', right: '10%' }} />
        <VirusIcon style={{ bottom: '10%', left: '5%' }} />
      </HeroSection>

      <Section>
        <Container>
          <SearchContainer>
            <StyledTextField
              placeholder="Book Title"
              value={searchParams.title}
              onChange={(e) => setSearchParams({ ...searchParams, title: e.target.value })}
              size="small"
            />
            <StyledTextField
              placeholder="ISBN-10"
              value={searchParams.isbn}
              onChange={(e) => setSearchParams({ ...searchParams, isbn: e.target.value })}
              size="small"
            />
            <StyledSelect
              value={searchParams.category}
              onChange={(e) => setSearchParams({ ...searchParams, category: e.target.value })}
              size="small"
            >
              {categories.map((category) => (
                <MenuItem key={category} value={category}>{category}</MenuItem>
              ))}
            </StyledSelect>
            <StyledSelect
              value={searchParams.author}
              onChange={(e) => setSearchParams({ ...searchParams, author: e.target.value })}
              size="small"
            >
              {authors.map((author) => (
                <MenuItem key={author} value={author}>{author}</MenuItem>
              ))}
            </StyledSelect>
            <SearchButton
              variant="contained"
              startIcon={<SearchIcon />}
              onClick={handleSearch}
            >
              Search Books
            </SearchButton>
            <IconButton onClick={handleReset}>
              <RefreshIcon />
            </IconButton>
          </SearchContainer>

          <Grid container spacing={4}>
            {books.map((book) => (
              <Grid item xs={12} sm={6} md={4} key={book.id}>
                <BookCard>
                  <BookImage src={book.image} alt={book.title} />
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      {book.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" paragraph>
                      {book.description}
                    </Typography>
                  </CardContent>
                </BookCard>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Section>

      <Section bgcolor="#006B54">
        <Container>
          <Grid container spacing={4} alignItems="center" justifyContent="center">
            <Grid item xs={12} md={8} sx={{ textAlign: 'center', color: 'white' }}>
              <Typography variant="h4" gutterBottom>
                Have any question about a cybersecurity threat. Let us know, we will help you.
              </Typography>
              <Box sx={{ mt: 4 }}>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: 'white',
                    color: '#006B54',
                    '&:hover': {
                      backgroundColor: '#f5f5f5'
                    }
                  }}
                >
                  Contact Now
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
        <VirusIcon style={{ top: '20%', right: '5%' }} />
        <VirusIcon style={{ bottom: '20%', left: '10%' }} />
      </Section>
    </>
  );
}

export default Download;

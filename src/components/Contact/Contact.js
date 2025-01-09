import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  Button,
} from '@mui/material';
import styled from 'styled-components';

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

const FormContainer = styled(Box)`
  max-width: 600px;
  margin: 0 auto;
  padding: 40px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

const StyledTextField = styled(TextField)`
  margin-bottom: 24px !important;
  .MuiOutlinedInput-root {
    &:hover fieldset {
      border-color: #006B54;
    }
    &.Mui-focused fieldset {
      border-color: #006B54;
    }
  }
  .MuiFormLabel-root.Mui-focused {
    color: #006B54;
  }
`;

const SubmitButton = styled(Button)`
  background-color: #006B54 !important;
  color: white !important;
  padding: 12px 32px !important;
  border-radius: 25px !important;
  text-transform: none !important;
  font-size: 16px !important;
  &:hover {
    background-color: #005544 !important;
  }
`;

const SocialLink = styled.a`
  color: #006B54;
  margin: 0 8px;
  &:hover {
    color: #FF6B6B;
  }
`;

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <>
      <HeroSection>
        <Container>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12}>
              <Typography variant="h2" component="h1" align="center" gutterBottom>
                Contact
              </Typography>
              <Typography variant="subtitle1" align="center">
                Awarecyber > Contact
              </Typography>
            </Grid>
          </Grid>
        </Container>
        <VirusIcon style={{ top: '10%', right: '10%' }} />
        <VirusIcon style={{ bottom: '10%', left: '5%' }} />
      </HeroSection>

      <Section bgcolor="#f5f5f5">
        <Container>
          <FormContainer>
            <form onSubmit={handleSubmit}>
              <StyledTextField
                fullWidth
                required
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                variant="outlined"
              />
              <StyledTextField
                fullWidth
                required
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                variant="outlined"
              />
              <StyledTextField
                fullWidth
                required
                label="Subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                variant="outlined"
              />
              <StyledTextField
                fullWidth
                required
                label="Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                variant="outlined"
                multiline
                rows={4}
              />
              <Box sx={{ textAlign: 'center' }}>
                <SubmitButton type="submit" variant="contained">
                  Submit
                </SubmitButton>
              </Box>
            </form>
          </FormContainer>

          <Box sx={{ textAlign: 'center', mt: 6 }}>
            <Typography variant="h5" gutterBottom sx={{ color: '#1A2B4E' }}>
              Cybersecurity Awareness: Recognizing the Importance of Staying Focused on Secure Content and Avoiding Distractions
            </Typography>
            <Typography variant="body1" sx={{ color: '#666', maxWidth: '800px', mx: 'auto', mb: 4 }}>
              In the realm of cybersecurity, it is imperative to understand the significance of maintaining unwavering focus on secure content while diligently avoiding any form of distraction.
            </Typography>
            <Box sx={{ mb: 4 }}>
              <SocialLink href="#" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook"></i>
              </SocialLink>
              <SocialLink href="#" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </SocialLink>
              <SocialLink href="#" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </SocialLink>
              <SocialLink href="#" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </SocialLink>
            </Box>
            <Typography variant="h6" gutterBottom sx={{ color: '#FF6B6B' }}>
              Recent Posts
            </Typography>
            <Box sx={{ mb: 4 }}>
              <Typography variant="body2" gutterBottom>
                Security policy must go up
                <br />
                <small>November 30, 2024</small>
              </Typography>
              <Typography variant="body2">
                The CIA Triad
                <br />
                <small>July 1, 2024</small>
              </Typography>
            </Box>
            <Typography variant="h6" gutterBottom sx={{ color: '#FF6B6B' }}>
              Contact Info
            </Typography>
          </Box>
        </Container>
      </Section>
    </>
  );
}

export default Contact;

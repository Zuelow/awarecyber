import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Button,
} from '@mui/material';
import styled from 'styled-components';

const Section = styled(Box)`
  padding: 80px 0;
  position: relative;
  background-color: ${props => props.bgcolor || '#fff'};
`;

const VirusIcon = styled(Box)`
  position: absolute;
  width: 40px;
  height: 40px;
  background-color: #FF6B6B;
  border-radius: 50%;
  opacity: 0.6;
`;

const StyledButton = styled(Button)`
  background-color: #4A90E2;
  color: white;
  padding: 10px 24px;
  border-radius: 25px;
  text-transform: none;
  font-weight: 500;
  &:hover {
    background-color: #357ABD;
  }
`;

const ImageBox = styled(Box)`
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  img {
    width: 100%;
    height: auto;
  }
`;

const InfoCard = styled(Box)`
  background-color: #1A2B4E;
  color: white;
  padding: 24px;
  border-radius: 12px;
  margin-bottom: 20px;
`;

function About() {
  return (
    <>
      {/* Hero Section */}
      <Section bgcolor="#006B54">
        <Container>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12}>
              <Typography variant="h2" component="h1" align="center" sx={{ color: 'white', mb: 2 }}>
                About
              </Typography>
            </Grid>
          </Grid>
        </Container>
        <VirusIcon style={{ top: '10%', right: '10%' }} />
        <VirusIcon style={{ bottom: '10%', left: '5%' }} />
      </Section>

      {/* Expertise Section */}
      <Section>
        <Container>
          <Grid container spacing={6}>
            <Grid item xs={12} md={6}>
              <ImageBox>
                <img src="/assets/images/cybersecurity-training.svg" alt="Cybersecurity Training" />
              </ImageBox>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h3" gutterBottom sx={{ color: '#1A2B4E' }}>
                We are experts in cybersecurity awareness training
              </Typography>
              <Typography variant="body1" paragraph sx={{ mb: 3 }}>
                Our comprehensive cybersecurity awareness training program is designed to educate employees and organizations about the latest cyber threats and best practices for maintaining security. We focus on practical, real-world scenarios and provide actionable strategies for protection.
              </Typography>
              <Typography variant="body1" paragraph>
                We cover essential topics including:
                • Phishing awareness and prevention
                • Password security and management
                • Social engineering defense
                • Data protection and privacy
                • Safe internet browsing practices
                • Mobile device security
              </Typography>
              <StyledButton variant="contained">Learn More</StyledButton>
            </Grid>
          </Grid>
        </Container>
      </Section>

      {/* Indicators Section */}
      <Section bgcolor="#F0F2F5">
        <Container>
          <Typography variant="h3" align="center" gutterBottom>
            Indicators of a Potential Cybersecurity Breach Include Unauthorized Access Attempts and Anomalous Network Activity
          </Typography>
          <Box sx={{ maxWidth: 600, mx: 'auto', mt: 4 }}>
            <img 
              src="/assets/images/cybersecurity-indicators.svg" 
              alt="Cybersecurity Indicators"
              style={{ width: '100%', height: 'auto' }}
            />
          </Box>
        </Container>
      </Section>

      {/* Connect Section */}
      <Section>
        <Container>
          <Typography variant="h3" align="center" gutterBottom>
            Connect with Cybersecurity Experts
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} sm={6} md={4}>
              <InfoCard>
                <Typography variant="h6" gutterBottom>
                  Email
                </Typography>
                <Typography variant="body1">
                  contact@awarecyber.com
                </Typography>
              </InfoCard>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <InfoCard>
                <Typography variant="h6" gutterBottom>
                  Phone
                </Typography>
                <Typography variant="body1">
                  +1 (555) 123-4567
                </Typography>
              </InfoCard>
            </Grid>
          </Grid>
        </Container>
      </Section>

      {/* Common Questions Section */}
      <Section bgcolor="#1A2B4E">
        <Container>
          <Typography variant="h3" align="center" gutterBottom sx={{ color: 'white' }}>
            Common Questions Regarding Cybersecurity
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Box component="img" 
                src="/assets/images/cybersecurity-lock.jpg" 
                alt="Cybersecurity"
                sx={{ width: '100%', height: 'auto', borderRadius: '12px' }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              {[
                {
                  question: "What is cybersecurity training?",
                  answer: "Cybersecurity training is a structured program designed to educate individuals and organizations about protecting digital assets and information from cyber threats."
                },
                {
                  question: "Why is cybersecurity training important?",
                  answer: "It helps prevent data breaches, protects sensitive information, and ensures compliance with security regulations while building a security-aware culture."
                },
                {
                  question: "What does cybersecurity training include?",
                  answer: "Our training covers phishing prevention, password security, social engineering awareness, data protection, and safe browsing practices."
                }
              ].map((item, index) => (
                <Box key={index} sx={{ mb: 3, p: 2, bgcolor: 'rgba(255,255,255,0.1)', borderRadius: 2 }}>
                  <Typography variant="h6" gutterBottom sx={{ color: 'white' }}>
                    {item.question}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)' }}>
                    {item.answer}
                  </Typography>
                </Box>
              ))}
            </Grid>
          </Grid>
        </Container>
      </Section>

      {/* COVID-19 Section */}
      <Section>
        <Container>
          <Typography variant="h3" align="center" gutterBottom>
            Basic Protective Measures Against Corona Virus (Covid-19)
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12}>
              <Box sx={{ maxWidth: 800, mx: 'auto' }}>
                <img 
                  src="/assets/images/covid-measures.svg" 
                  alt="COVID-19 Protective Measures"
                  style={{ width: '100%', height: 'auto' }}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
        <VirusIcon style={{ top: '20%', left: '5%' }} />
        <VirusIcon style={{ bottom: '30%', right: '10%' }} />
      </Section>

      {/* Contact Section */}
      <Section bgcolor="#006B54">
        <Container>
          <Grid container spacing={4} alignItems="center" justifyContent="center">
            <Grid item xs={12} md={8} sx={{ textAlign: 'center' }}>
              <Typography variant="h3" sx={{ color: 'white', mb: 3 }}>
                Have any question about a cybersecurity threat. Let us know, we will help you.
              </Typography>
              <StyledButton variant="contained" sx={{ bgcolor: 'white', color: '#006B54' }}>
                Contact Us
              </StyledButton>
            </Grid>
          </Grid>
        </Container>
        <VirusIcon style={{ top: '20%', right: '5%' }} />
        <VirusIcon style={{ bottom: '20%', left: '10%' }} />
      </Section>
    </>
  );
}

export default About;

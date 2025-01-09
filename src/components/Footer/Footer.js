import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import styled from 'styled-components';

const FooterWrapper = styled(Box)`
  background-color: #0B2545;
  color: white;
  padding: 40px 0;
`;

const FooterText = styled(Typography)`
  opacity: 0.8;
`;

function Footer() {
  return (
    <FooterWrapper>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom>
              AWARE CYBER
            </Typography>
            <FooterText variant="body2">
              Security Research & Software Development
            </FooterText>
          </Grid>
          <Grid item xs={12} md={6} sx={{ textAlign: { md: 'right' } }}>
            <FooterText variant="body2">
              {new Date().getFullYear()} Aware Cyber. All rights reserved.
            </FooterText>
          </Grid>
        </Grid>
      </Container>
    </FooterWrapper>
  );
}

export default Footer;

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
} from '@mui/material';
import styled from 'styled-components';
import SecurityIcon from '@mui/icons-material/Security';

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

const PreventionCard = styled(Card)`
  height: 100%;
  background-color: white;
  transition: transform 0.3s ease-in-out;
  border: 1px solid #eee;
  &:hover {
    transform: translateY(-5px);
  }
`;

const IconWrapper = styled(Box)`
  width: 50px;
  height: 50px;
  margin: 0 auto 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const preventionMeasures = [
  {
    title: 'Keep Software and Services Up to Date',
    description: 'Regular updates help protect against the latest security threats and vulnerabilities.',
  },
  {
    title: 'Use Strong, Unique Passwords',
    description: 'Create complex passwords for each account and consider using a password manager.',
  },
  {
    title: 'Implement Multi-Factor Authentication (MFA)',
    description: 'MFA adds an additional layer of security beyond just passwords.',
  },
  {
    title: 'Install Antivirus and Anti-Malware Software',
    description: 'Use reputable tools to scan and remove malicious software from your systems.',
  },
  {
    title: 'Set Up a Firewall',
    description: 'Configure network security to block unauthorized access.',
  },
  {
    title: 'Regularly Back Up Data',
    description: 'Maintain current backups of all important files and systems.',
  },
  {
    title: 'Limit User Privileges',
    description: 'Restrict access rights to only what users need for their roles.',
  },
  {
    title: 'Secure Your Network',
    description: 'Ensure Wi-Fi and remote connections are encrypted and properly configured.',
  },
  {
    title: 'Be Cautious with Email',
    description: 'Verify senders and avoid clicking suspicious links or attachments.',
  },
  {
    title: 'Monitor and Detect Anomalies',
    description: 'Implement monitoring tools to identify suspicious activities.',
  },
  {
    title: 'Develop an Incident Response Plan',
    description: 'Prepare a detailed strategy to handle security incidents.',
  },
  {
    title: 'Regularly Audit and Assess',
    description: 'Conduct regular security audits and vulnerability assessments.',
  },
  {
    title: 'Encrypt Sensitive Data',
    description: 'Use encryption to protect sensitive data at rest and in transit.',
  },
  {
    title: 'Stop Malformed',
    description: 'Prevent and block malformed requests and potential attack vectors.',
  }
];

const RecentNews = styled(Box)`
  margin-top: 80px;
  text-align: center;
`;

const NewsCard = styled(Card)`
  margin: 20px;
  display: inline-block;
  max-width: 300px;
  text-align: left;
`;

function Prevention() {
  return (
    <>
      <HeroSection>
        <Container>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12}>
              <Typography variant="h2" component="h1" align="center" gutterBottom>
                Prevention
              </Typography>
              <Typography variant="subtitle1" align="center">
                Awarecyber > Prevention
              </Typography>
            </Grid>
          </Grid>
        </Container>
        <VirusIcon style={{ top: '10%', right: '10%' }} />
        <VirusIcon style={{ bottom: '10%', left: '5%' }} />
      </HeroSection>

      <Section>
        <Container>
          <Grid container spacing={4}>
            {preventionMeasures.map((measure, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <PreventionCard>
                  <CardContent>
                    <IconWrapper>
                      <SecurityIcon sx={{ fontSize: 40, color: '#6A1B9A' }} />
                    </IconWrapper>
                    <Typography variant="h6" align="center" gutterBottom sx={{ color: '#FF6B6B' }}>
                      {measure.title}
                    </Typography>
                    <Typography variant="body2" align="center" sx={{ color: '#666' }}>
                      {measure.description}
                    </Typography>
                  </CardContent>
                </PreventionCard>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Section>

      <RecentNews>
        <Typography variant="h4" gutterBottom>
          Recent News Of Corona virus (Covid-19)
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
          <NewsCard>
            <CardContent>
              <Typography variant="subtitle2" color="textSecondary">
                June 1, 2024
              </Typography>
              <Typography variant="h6" gutterBottom>
                Efficient policy setup
              </Typography>
              <Typography variant="body2">
                Latest updates on COVID-19 prevention policies...
              </Typography>
            </CardContent>
          </NewsCard>
          <NewsCard>
            <CardContent>
              <Typography variant="subtitle2" color="textSecondary">
                May 15, 2024
              </Typography>
              <Typography variant="h6" gutterBottom>
                Microsoft Security Update 2024
              </Typography>
              <Typography variant="body2">
                New security measures for remote work...
              </Typography>
            </CardContent>
          </NewsCard>
          <NewsCard>
            <CardContent>
              <Typography variant="subtitle2" color="textSecondary">
                May 1, 2024
              </Typography>
              <Typography variant="h6" gutterBottom>
                Security policy must go up
              </Typography>
              <Typography variant="body2">
                Enhanced security protocols for organizations...
              </Typography>
            </CardContent>
          </NewsCard>
        </Box>
      </RecentNews>

      <Section bgcolor="#006B54">
        <Container>
          <Grid container spacing={4} alignItems="center" justifyContent="center">
            <Grid item xs={12} md={8} sx={{ textAlign: 'center', color: 'white' }}>
              <Typography variant="h3" gutterBottom>
                Have any question about a cybersecurity threat. Let us know, we will help you.
              </Typography>
              <Box sx={{ mt: 4 }}>
                <button
                  style={{
                    backgroundColor: 'white',
                    color: '#006B54',
                    padding: '12px 24px',
                    border: 'none',
                    borderRadius: '25px',
                    cursor: 'pointer',
                    fontSize: '16px',
                    fontWeight: '500'
                  }}
                >
                  Contact Now
                </button>
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

export default Prevention;

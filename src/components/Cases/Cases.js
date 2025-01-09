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
import TouchAppIcon from '@mui/icons-material/TouchApp';
import WarningIcon from '@mui/icons-material/Warning';
import DownloadIcon from '@mui/icons-material/Download';
import SearchIcon from '@mui/icons-material/Search';
import BugReportIcon from '@mui/icons-material/BugReport';
import SecurityIcon from '@mui/icons-material/Security';
import WebIcon from '@mui/icons-material/Web';
import LinkOffIcon from '@mui/icons-material/LinkOff';
import NewReleasesIcon from '@mui/icons-material/NewReleases';

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

const StyledCard = styled(Card)`
  height: 100%;
  background-color: #424242;
  color: white;
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: translateY(-5px);
  }
`;

const IconWrapper = styled(Box)`
  width: 60px;
  height: 60px;
  background-color: #6A1B9A;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
`;

const casesData = [
  {
    title: 'Phishing E-mails',
    description: 'Cybercriminals send deceptive emails containing malicious links or attachments, tricking recipients into revealing sensitive information or initiating malware infection or credential theft.',
    icon: <TouchAppIcon sx={{ fontSize: 32, color: 'white' }} />
  },
  {
    title: 'Malware Distribution',
    description: 'Malicious software, such as viruses, worms, Trojans, and ransomware, can spread through infected files, downloads, or compromised websites.',
    subtitle: 'Vulnerability Exploitation: Cyber attackers target known weaknesses or security flaws',
    icon: <WarningIcon sx={{ fontSize: 32, color: 'white' }} />
  },
  {
    title: 'Drive-By Downloads',
    description: 'Visiting compromised or malicious websites can trigger automatic downloads of malware without user consent.',
    icon: <DownloadIcon sx={{ fontSize: 32, color: 'white' }} />
  },
  {
    title: 'Social Engineering',
    description: 'Cybercriminals manipulate human psychology to obtain access to sensitive information, such as passwords or confidential data.',
    icon: <SearchIcon sx={{ fontSize: 32, color: 'white' }} />
  },
  {
    title: 'File Sharing and Removable Media',
    description: 'Infected files can spread when shared over networks or transferred via USB drives or other removable media.',
    icon: <BugReportIcon sx={{ fontSize: 32, color: 'white' }} />
  },
  {
    title: 'Insider Threats',
    description: 'Malicious or careless employees or trusted individuals with access to systems intentionally or accidentally participate threats.',
    icon: <SecurityIcon sx={{ fontSize: 32, color: 'white' }} />
  },
  {
    title: 'Software Vulnerabilities',
    description: 'Vulnerable or outdated software can be exploited to obtain network, compromise systems, or facilitate unauthorized access.',
    icon: <WebIcon sx={{ fontSize: 32, color: 'white' }} />
  },
  {
    title: 'Supply Chain Attacks',
    description: 'Attackers target third-party vendors or suppliers to gain access to their customers\' networks, leveraging trust relationships.',
    icon: <LinkOffIcon sx={{ fontSize: 32, color: 'white' }} />
  },
  {
    title: 'Zero Day Exploits',
    description: 'Threat actors may exploit undisclosed vulnerabilities (zero-days) before security patches are available, making detection and prevention challenging.',
    icon: <NewReleasesIcon sx={{ fontSize: 32, color: 'white' }} />
  }
];

function Cases() {
  return (
    <>
      <HeroSection>
        <Container>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12}>
              <Typography variant="h2" component="h1" align="center" gutterBottom>
                Cases
              </Typography>
              <Typography variant="subtitle1" align="center">
                Awarecyber > Cases
              </Typography>
            </Grid>
          </Grid>
        </Container>
        <VirusIcon style={{ top: '10%', right: '10%' }} />
        <VirusIcon style={{ bottom: '10%', left: '5%' }} />
        <VirusIcon style={{ top: '50%', right: '20%' }} />
        <VirusIcon style={{ top: '30%', left: '15%' }} />
      </HeroSection>

      <Section>
        <Container>
          <Grid container spacing={4}>
            {casesData.map((caseItem, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <StyledCard>
                  <CardContent>
                    <IconWrapper>
                      {caseItem.icon}
                    </IconWrapper>
                    <Typography variant="h6" gutterBottom sx={{ color: '#FF6B6B' }}>
                      {caseItem.title}
                    </Typography>
                    <Typography variant="body2" sx={{ opacity: 0.8 }}>
                      {caseItem.description}
                    </Typography>
                    {caseItem.subtitle && (
                      <Typography variant="body2" sx={{ mt: 2, opacity: 0.8 }}>
                        {caseItem.subtitle}
                      </Typography>
                    )}
                  </CardContent>
                </StyledCard>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Section>

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

export default Cases;

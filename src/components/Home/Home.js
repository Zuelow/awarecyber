import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
} from '@mui/material';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import phishingIcon from '../../assets/icons/phishing.svg';
import malwareIcon from '../../assets/icons/malware.svg';
import downloadIcon from '../../assets/icons/download.svg';
import psychologyIcon from '../../assets/icons/psychology.svg';
import folderIcon from '../../assets/icons/folder.svg';
import securityIcon from '../../assets/icons/security.svg';
import codeIcon from '../../assets/icons/code.svg';
import accountTreeIcon from '../../assets/icons/account-tree.svg';
import newReleasesIcon from '../../assets/icons/new-releases.svg';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const float = keyframes`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0px);
  }
`;

const HeroSection = styled(Box)`
  background: linear-gradient(135deg, #1a237e 0%, #6A1B9A 100%);
  padding: 120px 0;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('https://i.ibb.co/n0tqyrH/lock.png') center/contain no-repeat;
    opacity: 0.1;
    animation: ${float} 6s ease-in-out infinite;
  }
`;

const HeroTitle = styled(Typography)`
  color: white;
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 24px;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.2);
  animation: ${fadeIn} 1s ease-out;
`;

const HeroSubtitle = styled(Typography)`
  color: rgba(255,255,255,0.9);
  font-size: 1.5rem;
  margin-bottom: 40px;
  animation: ${fadeIn} 1s ease-out 0.2s backwards;
`;

const Section = styled(Box)`
  padding: 100px 0;
  background-color: ${props => props.bgcolor || '#fff'};
  position: relative;
`;

const SectionTitle = styled(Typography)`
  color: #1a237e;
  margin-bottom: 48px;
  font-weight: 800;
  text-align: center;
  font-size: 2.5rem;
  opacity: 0;
  transform: translateY(20px);
  animation: ${fadeIn} 0.6s ease forwards;
`;

const ThreatCard = styled(motion.div)`
  background-color: #4B4B4B;
  color: white;
  height: 100%;
  border-radius: 16px;
  padding: 32px 24px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 24px rgba(0,0,0,0.2);
  }
`;

const HexIcon = styled(Box)`
  width: 80px;
  height: 80px;
  background-color: #F8F9FA;
  margin-bottom: 24px;
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  img {
    width: 40px;
    height: 40px;
    filter: invert(35%) sepia(84%) saturate(2881%) hue-rotate(244deg) brightness(84%) contrast(92%);
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }

  ${ThreatCard}:hover & {
    transform: rotate(360deg) scale(1.1);
    background-color: #6A1B9A;

    img {
      filter: invert(100%);
      transform: scale(1.2);
    }
  }
`;

const ThreatTitle = styled(Typography)`
  color: #FF6B00;
  font-weight: 700;
  font-size: 1.25rem;
  margin-bottom: 16px;
  transition: all 0.3s ease;

  ${ThreatCard}:hover & {
    transform: scale(1.05);
    color: #FFA726;
  }
`;

const ThreatDescription = styled(Typography)`
  color: rgba(255, 255, 255, 0.9);
  font-size: 0.9rem;
  line-height: 1.6;
  transition: all 0.3s ease;

  ${ThreatCard}:hover & {
    color: rgba(255, 255, 255, 1);
  }
`;

const SecuritySection = styled(Section)`
  background: linear-gradient(135deg, #F5F5F5 0%, #E0E0E0 100%);
  position: relative;
`;

const SecurityTitle = styled(Typography)`
  color: #1a237e;
  text-align: center;
  margin-bottom: 16px;
  font-weight: 700;
  opacity: 0;
  animation: ${fadeIn} 0.6s ease forwards;
`;

const SecuritySubtitle = styled(Typography)`
  color: #1a237e;
  text-align: center;
  margin-bottom: 48px;
  font-size: 2.5rem;
  font-weight: 800;
  opacity: 0;
  animation: ${fadeIn} 0.6s ease forwards 0.2s;
`;

const ImageContainer = styled(motion.div)`
  position: relative;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0,0,0,0.1);
`;

const SecurityImage = styled('img')`
  width: 100%;
  height: auto;
  display: block;
  transition: transform 0.3s ease;

  ${ImageContainer}:hover & {
    transform: scale(1.05);
  }
`;

const HexLabel = styled(motion.div)`
  position: absolute;
  background-color: #6A1B9A;
  color: white;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 600;
  clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
  transition: all 0.3s ease;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(106, 27, 154, 0.2);

  &:hover {
    transform: scale(1.1);
    background-color: #8E24AA;
    box-shadow: 0 8px 24px rgba(106, 27, 154, 0.4);
  }
`;

const StyledButton = styled(Button)`
  background: linear-gradient(45deg, #FF6B00 30%, #FF9100 90%);
  border-radius: 50px;
  padding: 12px 48px;
  color: white;
  font-weight: 600;
  text-transform: none;
  font-size: 1.1rem;
  box-shadow: 0 4px 20px rgba(255, 107, 0, 0.3);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 30px rgba(255, 107, 0, 0.4);
  }
`;

const threats = [
  {
    icon: phishingIcon,
    title: "Phishing E-mails",
    description: "Cybercriminals send deceptive emails containing malicious links or attachments, tricking recipients into clicking on them. This can lead to malware infection or credential theft."
  },
  {
    icon: malwareIcon,
    title: "Malware Distribution",
    description: "Malicious software, such as viruses, worms, Trojans, and ransomware, can spread through infected files, downloads, or compromised websites. Vulnerability Exploitation: Cyber attackers target known weaknesses or security flaws"
  },
  {
    icon: downloadIcon,
    title: "Drive-By Downloads",
    description: "Visiting compromised or malicious websites can trigger automatic downloads of malware without user consent or awareness."
  },
  {
    icon: psychologyIcon,
    title: "Social Engineering",
    description: "Cybercriminals manipulate human psychology to deceive users into revealing sensitive information, such as passwords or confidential data."
  },
  {
    icon: folderIcon,
    title: "File Sharing and Removable Media",
    description: "Infected files can spread when shared over networks or transferred via USB drives or other removable media."
  },
  {
    icon: securityIcon,
    title: "Insider Threats",
    description: "Malicious or careless employees or trusted individuals with access to systems can inadvertently or intentionally propagate threats."
  },
  {
    icon: codeIcon,
    title: "Software Vulnerabilities",
    description: "Vulnerable or outdated software can be exploited to deliver malware, compromise systems, or facilitate unauthorized access."
  },
  {
    icon: accountTreeIcon,
    title: "Supply Chain Attacks",
    description: "Attackers target third-party vendors or suppliers to gain access to their customers' networks, leveraging trust relationships."
  },
  {
    icon: newReleasesIcon,
    title: "Zero Day Exploits",
    description: "Threat actors may exploit undisclosed vulnerabilities (zero-days) before security patches are available, making detection and prevention challenging."
  }
];

function Home() {
  return (
    <>
      <HeroSection>
        <Container>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <HeroTitle variant="h1">
                Secure Your Digital World
              </HeroTitle>
              <HeroSubtitle variant="h4">
                Understanding and preventing cyber threats in the modern age
              </HeroSubtitle>
              <StyledButton variant="contained">
                Learn More
              </StyledButton>
            </Grid>
          </Grid>
        </Container>
      </HeroSection>

      <Section>
        <Container>
          <SectionTitle variant="h3" gutterBottom>
            How Do Cyber Threats Propagate?
          </SectionTitle>
          <Grid container spacing={3}>
            {threats.map((threat, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <ThreatCard>
                    <HexIcon>
                      <img src={threat.icon} alt={threat.title} />
                    </HexIcon>
                    <ThreatTitle>
                      {threat.title}
                    </ThreatTitle>
                    <ThreatDescription>
                      {threat.description}
                    </ThreatDescription>
                  </ThreatCard>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Section>

      <SecuritySection>
        <Container>
          <SecurityTitle variant="h6">
            Security
          </SecurityTitle>
          <SecuritySubtitle variant="h3">
            Security Mechanisms
          </SecuritySubtitle>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <ImageContainer>
              <SecurityImage
                src="https://i.ibb.co/n0tqyrH/lock.png"
                alt="Security Mechanisms"
              />
              {[
                { text: "ANTIVIRUS SOFTWARE", position: { top: '5%', left: '30%' } },
                { text: "VPNS", position: { top: '5%', right: '30%' } },
                { text: "FIREWALLS", position: { top: '40%', left: '10%' } },
                { text: "THREAT INTEL", position: { top: '40%', right: '10%' } },
                { text: "MFA", position: { bottom: '5%', left: '30%' } },
                { text: "ENCRYPTION", position: { bottom: '5%', right: '30%' } }
              ].map((label, index) => (
                <HexLabel
                  key={index}
                  style={label.position}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                >
                  {label.text}
                </HexLabel>
              ))}
            </ImageContainer>
          </motion.div>
        </Container>
      </SecuritySection>

      <Section>
        <Container>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <Typography variant="h3" align="center" gutterBottom>
                Basic Protective Measures Against A Cybersecurity Attack
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Box
                component="img"
                src="/assets/images/protective-measures.png"
                alt="Protective Measures"
                sx={{
                  width: '100%',
                  maxWidth: 800,
                  margin: '0 auto',
                  display: 'block'
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Section>

      <Section>
        <Container>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <Typography variant="h3" align="center" gutterBottom>
                Common Questions with Answers About Cybersecurity / Threats
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Box sx={{ maxWidth: 800, margin: '0 auto' }}>
                {[
                  "What is cybersecurity?",
                  "Why is cybersecurity important?",
                  "What are common cyber threats?",
                  "How can I protect myself?",
                  "What is malware?",
                  "What is phishing?",
                  "What is ransomware?",
                  "How do hackers attack?",
                  "What are security best practices?",
                  "How to recover from an attack?"
                ].map((question, index) => (
                  <Card key={index} sx={{ mb: 2, bgcolor: 'rgba(255,255,255,0.1)', color: 'white' }}>
                    <CardContent>
                      <Typography variant="h6">{question}</Typography>
                      <Typography variant="body2" sx={{ mt: 1, opacity: 0.8 }}>
                        Detailed answer about {question.toLowerCase()}...
                      </Typography>
                    </CardContent>
                  </Card>
                ))}
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Section>

      <Section bgcolor="#6A1B9A" color="white">
        <Container>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <Typography variant="h3" align="center" gutterBottom color="white">
                Common Questions with Answers About Cybersecurity / Threats
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Box sx={{ maxWidth: 800, margin: '0 auto' }}>
                {[
                  "What is cybersecurity?",
                  "Why is cybersecurity important?",
                  "What are common cyber threats?",
                  "How can I protect myself?",
                  "What is malware?",
                  "What is phishing?",
                  "What is ransomware?",
                  "How do hackers attack?",
                  "What are security best practices?",
                  "How to recover from an attack?"
                ].map((question, index) => (
                  <Card key={index} sx={{ mb: 2, bgcolor: 'rgba(255,255,255,0.1)', color: 'white' }}>
                    <CardContent>
                      <Typography variant="h6">{question}</Typography>
                      <Typography variant="body2" sx={{ mt: 1, opacity: 0.8 }}>
                        Detailed answer about {question.toLowerCase()}...
                      </Typography>
                    </CardContent>
                  </Card>
                ))}
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Section>
    </>
  );
}

export default Home;

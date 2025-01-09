import React from 'react';
import {
  Box,
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Grid,
} from '@mui/material';
import styled from 'styled-components';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

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

const StyledAccordion = styled(Accordion)`
  margin-bottom: 16px !important;
  border-radius: 8px !important;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1) !important;
  &:before {
    display: none;
  }
  &.Mui-expanded {
    margin-bottom: 16px !important;
  }
`;

const StyledAccordionSummary = styled(AccordionSummary)`
  background-color: white;
  border-radius: 8px;
  &.Mui-expanded {
    background-color: #f5f5f5;
  }
  .MuiAccordionSummary-content {
    margin: 12px 0 !important;
  }
`;

const faqData = [
  {
    question: "What is cybersecurity?",
    answer: "Cybersecurity is the practice of protecting systems, networks, and programs from digital attacks. These attacks are usually aimed at accessing, changing, or destroying sensitive information; extorting money from users; or interrupting normal business processes."
  },
  {
    question: "Why is cybersecurity important?",
    answer: "Cybersecurity is crucial because organizations collect, process, and store unprecedented amounts of data on computers and other devices. Much of this data can be sensitive information, whether that be intellectual property, financial data, personal information, or other types of data for which unauthorized access or exposure could have negative consequences."
  },
  {
    question: "What are common cybersecurity threats?",
    answer: "Common cybersecurity threats include malware, phishing, ransomware, social engineering, DDoS attacks, and zero-day exploits. These threats constantly evolve as cybercriminals develop new techniques to circumvent security measures."
  },
  {
    question: "How can I protect myself from cyber attacks?",
    answer: "You can protect yourself by: using strong, unique passwords; enabling two-factor authentication; keeping software updated; using antivirus software; being cautious with emails and downloads; regularly backing up data; and staying informed about current cyber threats."
  },
  {
    question: "What is multi-factor authentication?",
    answer: "Multi-factor authentication (MFA) is a security process that requires users to provide two or more verification factors to gain access to a resource. This typically combines something you know (password), something you have (security token), and something you are (biometric verification)."
  },
  {
    question: "What should I do if I've been hacked?",
    answer: "If you've been hacked: 1) Change your passwords immediately, 2) Contact your bank if financial information was compromised, 3) Run a security scan on your devices, 4) Monitor your accounts for suspicious activity, 5) Report the incident to relevant authorities, and 6) Consider identity theft protection services."
  },
  {
    question: "What is a firewall?",
    answer: "A firewall is a network security device that monitors and filters incoming and outgoing network traffic based on predetermined security rules. It establishes a barrier between a trusted network and an untrusted network, such as the Internet."
  },
  {
    question: "How often should I update my software?",
    answer: "You should update your software as soon as updates become available. Many systems can be configured to update automatically. Regular updates are crucial as they often include security patches for newly discovered vulnerabilities."
  }
];

function FAQ() {
  return (
    <>
      <HeroSection>
        <Container>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12}>
              <Typography variant="h2" component="h1" align="center" gutterBottom>
                FAQs
              </Typography>
              <Typography variant="subtitle1" align="center">
                Awarecyber > FAQs
              </Typography>
            </Grid>
          </Grid>
        </Container>
        <VirusIcon style={{ top: '10%', right: '10%' }} />
        <VirusIcon style={{ bottom: '10%', left: '5%' }} />
      </HeroSection>

      <Section bgcolor="#f5f5f5">
        <Container>
          <Box maxWidth="800px" mx="auto">
            {faqData.map((faq, index) => (
              <StyledAccordion key={index}>
                <StyledAccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: '#006B54' }} />}
                >
                  <Typography variant="h6" sx={{ color: '#1A2B4E' }}>
                    {faq.question}
                  </Typography>
                </StyledAccordionSummary>
                <AccordionDetails>
                  <Typography variant="body1" sx={{ color: '#666' }}>
                    {faq.answer}
                  </Typography>
                </AccordionDetails>
              </StyledAccordion>
            ))}
          </Box>
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

export default FAQ;

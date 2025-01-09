import React from 'react';
import { motion } from 'framer-motion';
import {
    Box,
    Container,
    Typography,
    Grid,
    Card,
    CardContent,
} from '@mui/material';
import styled from 'styled-components';

const ServiceSection = styled(Box)`
padding: 100px 0;
background: ${props => props.dark ? '#0B2545' : '#ffffff'};
color: ${props => props.dark ? 'white' : 'inherit'};
`;

const StyledCard = styled(Card)`
height: 100%;
background: transparent;
color: inherit;
box-shadow: none;
border: none;
padding: 20px 0;
`;

function Services() {
    return (
        <Box>
        <ServiceSection dark>
        <Container>
        <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        >
        <Typography
        variant="h2"
        component="h1"
        gutterBottom
        align="center"
        sx={{
            mb: 6,
            fontWeight: 700
        }}
        >
        Our Services
        </Typography>
        </motion.div>
        <Grid container spacing={6}>
        <Grid item xs={12} md={6}>
        <StyledCard>
        <CardContent>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 600 }}>
        Security Research
        </Typography>
        <Typography variant="body1" paragraph>
        Our team specializes in discovering and responsibly disclosing vulnerabilities in widely-used software. We focus on:
        </Typography>
        <ul>
        <li>
        <Typography variant="body1" paragraph>
        Operating system security
        </Typography>
        </li>
        <li>
        <Typography variant="body1" paragraph>
        Web browser vulnerabilities
        </Typography>
        </li>
        <li>
        <Typography variant="body1" paragraph>
        Enterprise application security
        </Typography>
        </li>
        </ul>
        </CardContent>
        </StyledCard>
        </Grid>
        <Grid item xs={12} md={6}>
        <StyledCard>
        <CardContent>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 600 }}>
        Software Development
        </Typography>
        <Typography variant="body1" paragraph>
        We develop secure and efficient solutions across various domains:
        </Typography>
        <ul>
        <li>
        <Typography variant="body1" paragraph>
        System-level programming
        </Typography>
        </li>
        <li>
        <Typography variant="body1" paragraph>
        Web applications
        </Typography>
        </li>
        <li>
        <Typography variant="body1" paragraph>
        Security tools and frameworks
        </Typography>
        </li>
        </ul>
        </CardContent>
        </StyledCard>
        </Grid>
        </Grid>
        </Container>
        </ServiceSection>

        <ServiceSection>
        <Container>
        <Grid container spacing={6}>
        <Grid item xs={12}>
        <Typography variant="h3" gutterBottom align="center" sx={{ mb: 6 }}>
        Our Process
        </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
        <StyledCard>
        <CardContent>
        <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
        Research & Analysis
        </Typography>
        <Typography variant="body1">
        We begin with thorough research and analysis of the target system or application, identifying potential security weaknesses.
        </Typography>
        </CardContent>
        </StyledCard>
        </Grid>
        <Grid item xs={12} md={4}>
        <StyledCard>
        <CardContent>
        <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
        Development & Testing
        </Typography>
        <Typography variant="body1">
        Our team develops and tests solutions using industry best practices and secure coding standards.
        </Typography>
        </CardContent>
        </StyledCard>
        </Grid>
        <Grid item xs={12} md={4}>
        <StyledCard>
        <CardContent>
        <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
        Implementation & Support
        </Typography>
        <Typography variant="body1">
        We provide comprehensive implementation support and ongoing maintenance to ensure long-term security.
        </Typography>
        </CardContent>
        </StyledCard>
        </Grid>
        </Grid>
        </Container>
        </ServiceSection>
        </Box>
    );
}

export default Services;

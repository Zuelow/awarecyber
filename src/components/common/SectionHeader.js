import React from 'react';
import { Box, Typography } from '@mui/material';
import styled from 'styled-components';

const HeaderWrapper = styled(Box)`
text-align: center;
margin-bottom: ${props => props.spacing || '48px'};
`;

const SectionHeader = ({ title, subtitle, spacing }) => {
    return (
        <HeaderWrapper spacing={spacing}>
        <Typography variant="h3" gutterBottom>
        {title}
        </Typography>
        {subtitle && (
            <Typography variant="h6" color="textSecondary">
            {subtitle}
            </Typography>
        )}
        </HeaderWrapper>
    );
};

export default SectionHeader;

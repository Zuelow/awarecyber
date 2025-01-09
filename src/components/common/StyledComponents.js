import { Box, Container, Button } from '@mui/material';
import styled, { keyframes } from 'styled-components';

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0px); }
`;

const pulse = keyframes`
  0% { transform: scale(1); opacity: 0.8; }
  50% { transform: scale(1.1); opacity: 0.5; }
  100% { transform: scale(1); opacity: 0.8; }
`;

export const PageSection = styled(Box)`
  padding: ${props => props.padding || '80px 0'};
  position: relative;
  background-color: ${props => props.bgcolor || '#fff'};
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${props => props.overlay || 'none'};
    z-index: 1;
  }
`;

export const HeroSection = styled(PageSection)`
  background: linear-gradient(135deg, #006B54 0%, #338F7A 100%);
  color: white;
  min-height: 400px;
  display: flex;
  align-items: center;
  
  &::before {
    background: url('/images/pattern.svg') repeat;
    opacity: 0.1;
  }
`;

export const StyledContainer = styled(Container)`
  position: relative;
  z-index: 2;
`;

export const FloatingElement = styled(Box)`
  animation: ${float} 6s ease-in-out infinite;
`;

export const VirusIcon = styled(Box)`
  position: absolute;
  width: ${props => props.size || '40px'};
  height: ${props => props.size || '40px'};
  background: linear-gradient(135deg, #FF6B6B 0%, #FF8E8E 100%);
  border-radius: 50%;
  opacity: 0.6;
  animation: ${pulse} 4s ease-in-out infinite;
  z-index: 1;
`;

export const GradientButton = styled(Button)`
  background: ${props => props.gradient || 'linear-gradient(45deg, #006B54, #338F7A)'};
  color: white;
  padding: 12px 32px;
  border-radius: 30px;
  text-transform: none;
  font-size: 16px;
  font-weight: 600;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      120deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    transition: 0.5s;
  }
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 7px 14px rgba(0, 0, 0, 0.1);
    
    &::before {
      left: 100%;
    }
  }
`;

export const GlassCard = styled(Box)`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  padding: 24px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
`;

export const GridPattern = styled(Box)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
  background-size: 20px 20px;
  opacity: 0.1;
  pointer-events: none;
`;

export const ShimmerButton = styled(Button)`
  background: linear-gradient(45deg, #FF6B6B, #FF8E8E);
  color: white;
  padding: 12px 32px;
  border-radius: 30px;
  text-transform: none;
  font-size: 16px;
  font-weight: 600;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(
      45deg,
      transparent,
      rgba(255, 255, 255, 0.3),
      transparent
    );
    transform: rotate(45deg);
    animation: shimmer 2s infinite;
  }
  
  @keyframes shimmer {
    0% { transform: translateX(-100%) rotate(45deg); }
    100% { transform: translateX(100%) rotate(45deg); }
  }
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 7px 14px rgba(255, 107, 107, 0.3);
  }
`;

import React, { useState } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useTheme,
  useMediaQuery,
  Box,
  Container,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import styled from 'styled-components';

const StyledAppBar = styled(AppBar)`
  background: white;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`;

const StyledToolbar = styled(Toolbar)`
  justify-content: space-between;
  padding: 12px 0;
`;

const NavButton = styled(Button)`
  color: #FF6B00;
  margin: 0 8px;
  font-weight: 600;
  font-size: 1rem;
  text-transform: none;
  position: relative;
  opacity: 0.9;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 2px;
    background-color: #FF6B00;
    transition: width 0.3s ease;
  }
  
  &:hover {
    background-color: rgba(255, 107, 0, 0.1);
    opacity: 1;
    &::after {
      width: 80%;
    }
  }
  
  ${props => props.active && `
    opacity: 1;
    &::after {
      width: 80%;
    }
  `}
`;

const Logo = styled(Typography)`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
  
  img {
    height: 45px;
    width: auto;
  }

  &:hover {
    text-decoration: none;
  }
`;

const MobileDrawer = styled(Drawer)`
  .MuiDrawer-paper {
    width: 250px;
    background: white;
    color: #FF6B00;
  }
`;

const DrawerItem = styled(ListItem)`
  color: #FF6B00;
  &:hover {
    background-color: rgba(255, 107, 0, 0.1);
  }
`;

const DrawerItemText = styled(ListItemText)`
  .MuiListItemText-primary {
    color: #FF6B00;
    font-weight: 600;
  }
`;

const ContactButton = styled(Button)`
  background-color: #FF6B6B;
  color: white;
  padding: 8px 20px;
  border-radius: 25px;
  margin-left: 16px;
  text-transform: none;
  font-weight: 600;
  
  &:hover {
    background-color: #ff5252;
  }
`;

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const location = useLocation();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = [
    { text: 'Home', path: '/' },
    { text: 'About', path: '/about' },
    { text: 'Cases', path: '/cases' },
    { text: 'Blog', path: '/blog' },
    { text: 'Prevention', path: '/prevention' },
    { text: "FAQ's", path: '/faqs' },
    { text: 'Contact', path: '/contact' },
    { text: 'Download', path: '/download' },
  ];

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Box sx={{ p: 2 }}>
        <Logo
          variant="h6"
          component={RouterLink}
          to="/"
          sx={{ textDecoration: 'none', justifyContent: 'center' }}
        >
          <img src="/logo.png" alt="Aware Cyber" />
          AWARE CYBER
        </Logo>
      </Box>
      <List>
        {navItems.map((item) => (
          <DrawerItem
            key={item.text}
            component={RouterLink}
            to={item.path}
            selected={location.pathname === item.path}
          >
            <DrawerItemText 
              primary={item.text}
              primaryTypographyProps={{
                style: { 
                  fontWeight: location.pathname === item.path ? 700 : 600
                }
              }}
            />
          </DrawerItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <StyledAppBar position="fixed">
        <Container>
          <StyledToolbar>
            <Logo
              variant="h6"
              component={RouterLink}
              to="/"
              sx={{ textDecoration: 'none' }}
            >
              <img src="/logo.png" alt="Aware Cyber" />
              AWARE CYBER
            </Logo>
            
            {isMobile ? (
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
              >
                <MenuIcon />
              </IconButton>
            ) : (
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                {navItems.map((item) => (
                  <NavButton
                    key={item.text}
                    component={RouterLink}
                    to={item.path}
                    active={location.pathname === item.path ? 1 : 0}
                  >
                    {item.text}
                  </NavButton>
                ))}
              </Box>
            )}
          </StyledToolbar>
        </Container>
      </StyledAppBar>

      <MobileDrawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
      >
        {drawer}
      </MobileDrawer>
      
      {/* Add spacing below header to prevent content overlap */}
      <Toolbar />
    </>
  );
}

export default Header;

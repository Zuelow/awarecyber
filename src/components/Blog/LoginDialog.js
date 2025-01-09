import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Box,
  Typography,
  Alert,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import LockIcon from '@mui/icons-material/Lock';

const StyledDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialog-paper': {
    padding: theme.spacing(2),
    maxWidth: '400px',
    width: '100%',
  },
}));

const IconContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  marginBottom: theme.spacing(3),
  '& .MuiSvgIcon-root': {
    fontSize: '48px',
    color: theme.palette.primary.main,
  },
}));

const LoginDialog = ({ open, onClose, onLogin }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleLogin = () => {
    if (password === '5159') {
      onLogin();
      setError(false);
      setPassword('');
    } else {
      setError(true);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleLogin();
    }
  };

  return (
    <StyledDialog open={open} onClose={onClose}>
      <DialogTitle sx={{ textAlign: 'center' }}>
        Dashboard Login
      </DialogTitle>
      <DialogContent>
        <IconContainer>
          <LockIcon />
        </IconContainer>
        <Typography variant="body2" color="text.secondary" align="center" sx={{ mb: 3 }}>
          Please enter the password to access the dashboard
        </Typography>
        {error && (
          <Alert severity="error" sx={{ mb: 2 }}>
            Incorrect password
          </Alert>
        )}
        <TextField
          fullWidth
          type="password"
          label="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyPress={handleKeyPress}
          autoFocus
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="inherit">
          Cancel
        </Button>
        <Button onClick={handleLogin} variant="contained" color="primary">
          Login
        </Button>
      </DialogActions>
    </StyledDialog>
  );
};

export default LoginDialog;

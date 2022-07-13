import React from 'react';
import { FooterMenu } from '../nav';
import { Box, Container } from '@mui/material';
import './footer.css';

const Footer = () => (
  <Box className="footer">
    <Container component="footer">
      <FooterMenu />
    </Container> 
  </Box>
)

export default Footer
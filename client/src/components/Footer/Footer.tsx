import React from 'react';
import { FooterMenu } from '../nav';
import { Box, Container } from '@mui/material';
import './footer.css';

const Footer = () => (
  <Box component="footer" className="footer">
    <Container>
      <FooterMenu />
    </Container> 
  </Box>
)

export default Footer
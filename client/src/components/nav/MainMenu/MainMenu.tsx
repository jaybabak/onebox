import React from 'react'
import { Link } from "react-router-dom";
import { Toolbar, Typography, Button } from '@mui/material';
import { ThemeModeSwitcher } from '../../global';
import './MainMenu.css';

const MainMenu = () => (
  <Toolbar sx={{ flexWrap: 'wrap' }}>
    <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
      <Link to='/'>ONEBOX</Link>
    </Typography>
    <nav className="main-navigation-wrapper">
      <ul className="main-navigation-menu">
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/contact'>Contact</Link>
        </li>
      </ul>
    </nav>
    <Button variant="outlined" href="#" sx={{ color: 'success.main', my: 1, mx: 1.5 }}>
      Login
    </Button>
    <ThemeModeSwitcher/>
  </Toolbar>
)

export default MainMenu
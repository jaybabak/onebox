import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Drawer, List, ListItem, ListItemText, Toolbar, IconButton, Typography, ListItemButton, ListItemIcon } from "@mui/material";
import { Home, Menu, InsertComment } from '@mui/icons-material';

function SideBarMenu() {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <React.Fragment>
      {/* Menu Icon */}
      <Toolbar variant="dense">
        <IconButton onClick={() => setOpenDrawer(!openDrawer)} edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
          <Menu />
        </IconButton>
        <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
            <Link to='/'>ONEBOX</Link>
        </Typography>
      </Toolbar>

      {/* Sidebar App Drawer */}
      <Drawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <List>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <Link to="/">
              <ListItemButton>
                <ListItemIcon>
                  <Home/>
                </ListItemIcon>
                <ListItemText>
                  Home
                </ListItemText>
              </ListItemButton>
            </Link>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <Link to="/contact">
              <ListItemButton>
                <ListItemIcon>
                  <InsertComment/>
                </ListItemIcon>
                <ListItemText>
                  Contact
                </ListItemText>
              </ListItemButton>
            </Link>
          </ListItem>
        </List>
      </Drawer>
    </React.Fragment>
  );
}

export default SideBarMenu;
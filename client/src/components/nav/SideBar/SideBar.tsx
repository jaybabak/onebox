import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Drawer, List, ListItem, ListItemText, Toolbar, IconButton, Typography, ListItemButton, ListItemIcon } from "@mui/material";
import { Home, Menu, InsertComment } from '@mui/icons-material';

function SideBar() {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <React.Fragment>
      <Drawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <List>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemButton>
              <ListItemIcon>
                <Home/>
              </ListItemIcon>
              <ListItemText>
                  <Link to="/">Home</Link>
              </ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemButton>
              <ListItemIcon>
                <InsertComment/>
              </ListItemIcon>
              <ListItemText>
                  <Link to="/contact">Contact</Link>
              </ListItemText>
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
      <Toolbar variant="dense">
        <IconButton onClick={() => setOpenDrawer(!openDrawer)} edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
          <Menu />
        </IconButton>
        <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
            <Link to='/'>ONEBOX</Link>
        </Typography>
      </Toolbar>
    </React.Fragment>
  );
}

export default SideBar;
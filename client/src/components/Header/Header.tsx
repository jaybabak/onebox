import { AppBar, useMediaQuery, useTheme } from '@mui/material';
import { MainMenu, SideBarMenu } from '../nav';

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <AppBar
      component="header"
      position="static"
      color="default"
      elevation={0}
      sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
    >
      {isMobile ? 
        (
          <SideBarMenu/>
        )
      :(
        <MainMenu/>
      )}
    </AppBar>
  )
}

export default Header
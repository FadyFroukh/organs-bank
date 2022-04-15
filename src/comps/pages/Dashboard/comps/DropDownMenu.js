import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';


export default function PositionedMenu({setIsLogged,setShowProfile}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleProfile = ()=>{
    setAnchorEl(null);
    setShowProfile(true);
  }

  const handleLogOut = ()=>{
    setAnchorEl(null);
    localStorage.removeItem("user");
    setIsLogged(false);
    localStorage.removeItem('isLogged');
    window.location.href="/";
}

  return (
    <div>
      <Button sx={{padding:0, width:20}}
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <ArrowDropDownIcon/>

      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        
        <MenuItem onClick={handleProfile}><PersonIcon/> Profile</MenuItem>
        <MenuItem onClick={handleClose}><SettingsIcon/> Settings</MenuItem>
        <MenuItem onClick={handleLogOut}><LogoutIcon/> Logout</MenuItem>
      </Menu>
    </div>
  );
}
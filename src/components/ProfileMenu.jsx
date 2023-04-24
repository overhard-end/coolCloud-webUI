import { AccountCircle, Logout, Settings } from '@mui/icons-material';
import { Avatar, IconButton, Menu, MenuItem, Typography } from '@mui/material';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '..';

export const ProfileMenu = () => {
  const { user, logout } = useContext(UserContext);
  const [anchorEl, setAchorEl] = useState(null);
  const [open, setOpen] = useState(false);

  const openProfileMenu = (e) => {
    setAchorEl(e.currentTarget);
    setOpen(true);
  };

  return (
    <>
      <IconButton onClick={(e) => openProfileMenu(e)} aria-controls="profileMenu">
        <Avatar src={user.image} />
        <Typography ml="10px" color="white" variant="button">
          {user.email}
        </Typography>
      </IconButton>
      <Menu onClose={() => setOpen(false)} anchorEl={anchorEl} id="profileMenu" open={open}>
        <Link to="/profile" style={{ textDecoration: 'none', color: 'inherit' }}>
          <MenuItem>
            <AccountCircle />
            Профиль
          </MenuItem>
        </Link>
        <Link to="/settings" style={{ textDecoration: 'none', color: 'inherit' }}>
          <MenuItem>
            <Settings />
            Настройки
          </MenuItem>
        </Link>
        <MenuItem onClick={() => logout()}>
          <Logout />
          Выход
        </MenuItem>
      </Menu>
    </>
  );
};

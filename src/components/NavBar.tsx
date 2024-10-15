// src/components/NavBar.tsx
'use client';

import React, { useState } from 'react';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import PostAddIcon from '@mui/icons-material/PostAdd';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import LoginIcon from '@mui/icons-material/Login';
import Box from '@mui/material/Box'; // Import missing
import { useRouter } from 'next/navigation';

const NavBar: React.FC = () => {
  const [value, setValue] = useState(0);
  const router = useRouter();

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  return (
    <Box sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, width: '100%' }}>
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
      >
        <BottomNavigationAction
          label="Domov"
          icon={<HomeIcon />}
          onClick={() => handleNavigation('/')}
        />
        <BottomNavigationAction
          label="Príspevky"
          icon={<PostAddIcon />}
          onClick={() => handleNavigation('/pridat')}
        />
        <BottomNavigationAction
          label="Registrácia"
          icon={<PersonAddIcon />}
          onClick={() => handleNavigation('/auth/registracia')}
        />
        <BottomNavigationAction
          label="Prihlásenie"
          icon={<LoginIcon />}
          onClick={() => handleNavigation('/auth/prihlasenie')}
        />
      </BottomNavigation>
    </Box>
  );
};

export default NavBar;


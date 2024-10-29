// src/components/NavBar.tsx
'use client';

import React, { useState } from 'react';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import PostAddIcon from '@mui/icons-material/PostAdd';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import LoginIcon from '@mui/icons-material/Login';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import Box from '@mui/material/Box';
import { useRouter } from 'next/navigation';
import { useSession, signIn, signOut } from 'next-auth/react';

const NavBar: React.FC = () => {
  const [value, setValue] = useState(0);
  const router = useRouter();
  const { data: session } = useSession();

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
          showLabel
        />
        <BottomNavigationAction
          label="Príspevky"
          icon={<PostAddIcon />}
          onClick={() => handleNavigation('/pridat')}
          showLabel
        />

        {session ? (
          <>
            <BottomNavigationAction
              label="Profil"
              icon={<AccountCircleIcon />}
              onClick={() => handleNavigation('/profil')}
              showLabel
            />
            <BottomNavigationAction
              label="Odhlásenie"
              icon={<ExitToAppIcon />}
              onClick={() => signOut()}
              showLabel
            />
          </>
        ) : (
          <>
            <BottomNavigationAction
              label="Registrácia"
              icon={<PersonAddIcon />}
              onClick={() => signIn('google')}
              showLabel
            />
            <BottomNavigationAction
              label="Prihlásenie"
              icon={<LoginIcon />}
              onClick={() => signIn('google')}
              showLabel
            />
          </>
        )}
      </BottomNavigation>
    </Box>
  );
};

export default NavBar;

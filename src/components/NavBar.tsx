// src/components/NavBar.tsx
'use client';

import * as React from "react";
import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { useRouter } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import { ThemeToggleButton } from "@/components/ThemeSwitcher"; // Import tlačidla Light/Dark Mode

export default function Navbar() {
  const [value, setValue] = React.useState("/");
  const router = useRouter();
  const { data: session, status } = useSession();

  const handleNavigation = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
    router.push(newValue);
  };

  return (
    <Box sx={{ width: "100%", position: "fixed", bottom: 0 }}>
      <BottomNavigation value={value} onChange={handleNavigation} showLabels>
        {/* Tlačidlo pre Light/Dark Mode na ľavej strane */}
        <Box sx={{ position: "absolute", right: 10, bottom: 8 }}>
          <ThemeToggleButton />
        </Box>

        {/* Ostatné tlačidlá */}
        <BottomNavigationAction label="Domov" value="/" icon={<HomeIcon />} />
        <BottomNavigationAction label="Profily" value="/profil" icon={<AccountCircleIcon />} />
        <BottomNavigationAction label="Príspevky" value="/prispevok" icon={<AddCircleIcon />} />
        {!session && status !== "loading" && (
          <BottomNavigationAction
            label="Registrácia"
            value="/auth/registracia"
            icon={<PersonAddIcon />}
          />
        )}
        {session ? (
          <BottomNavigationAction
            label="Odhlásiť"
            onClick={() => signOut()}
            icon={<LogoutIcon />}
          />
        ) : (
          status !== "loading" && (
            <BottomNavigationAction
              label="Prihlásenie"
              value="/auth/prihlasenie"
              icon={<LoginIcon />}
            />
          )
        )}
      </BottomNavigation>
    </Box>
  );
}
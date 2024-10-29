// src/app/page.tsx
'use client';

import { useSession } from 'next-auth/react';
import Typography from "@mui/material/Typography";
import HomePagePrihlaseny from "../section/HomePagePrihlaseny";
import HomePageNeprihlaseny from "../section/HomePageNeprihlaseny";

export default function Home() {
  const { data: session } = useSession();

  if (session) {
    return <HomePagePrihlaseny />;
  } else {
    return <HomePageNeprihlaseny />;
  }
}

// src/app/layout.tsx

import { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/NavBar";
import AuthProvider from "../components/AuthProvider";
import { ThemeSwitcherProvider } from "@/components/ThemeSwitcher";

export const metadata: Metadata = {
  title: "ZoškaMeme",
  description: "Generate by MK",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sk">
      <body>
        <AuthProvider>
          <ThemeSwitcherProvider>
            <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
              <main style={{ flexGrow: 1 }}>{children}</main>
            </div>
            <Navbar />
          </ThemeSwitcherProvider> 
        </AuthProvider>
      </body>
    </html>
  );
}
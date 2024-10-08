import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/NavBar";


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
          <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <main style={{ flexGrow: 1 }}>
              {children}
            </main>
          </div>
          <Navbar />
      </body>
    </html>
  );
}
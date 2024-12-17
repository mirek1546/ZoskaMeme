// src/app/auth/prihlasenie/page.tsx

"use client";

import CustomButton from "@/components/CustomButtom";
import { signIn } from "next-auth/react";

export default function Prihlasenie() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <h1>Prihlásenie</h1>

      {/* Tlačidlo na prihlásenie cez Google */}
      <CustomButton
        onClick={() => signIn("google")}
        backgroundColor="blue"
        borderColor="black"
        hoverBackgroundColor="gray"
        hoverBorderColor="darkred"
      >
        Prihlásiť sa cez Google
      </CustomButton>
    </div>
  );
}
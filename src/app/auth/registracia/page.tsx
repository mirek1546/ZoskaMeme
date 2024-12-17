// src/app/auth/registracia/page.tsx

"use client";

import CustomButton from "@/components/CustomButtom";
import { signIn } from "next-auth/react";

export default function Registrácia() {
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
      <h1>Registrácia</h1>

      {/* Tlačidlo na registráciu cez Google */}
      <CustomButton
        onClick={() => signIn("google")}
        backgroundColor="blue"
        borderColor="black"
        hoverBackgroundColor="gray"
        hoverBorderColor="darkred"
      >
        Registrovať sa cez Google
      </CustomButton>
    </div>
  );
}
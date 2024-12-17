// src/components/CustomButton.tsx

"use client";

import { Button } from "@mui/material";

export default function CustomButton({
  children,
  onClick,
  backgroundColor = "black", // Predvolená farba pozadia
  borderColor = "red", // Predvolená farba rámika
  hoverBackgroundColor = "gray", // Predvolená farba pozadia pri hover
  hoverBorderColor = "darkred", // Predvolená farba rámika pri hover
}: {
  children: React.ReactNode;
  onClick: () => void;
  backgroundColor?: string;
  borderColor?: string;
  hoverBackgroundColor?: string;
  hoverBorderColor?: string;
}) {
  return (
    <Button
      onClick={onClick}
      sx={{
        color: "white", // Biela farba textu
        backgroundColor, // Dynamická farba pozadia
        border: `2px solid ${borderColor}`, // Dynamická farba rámika
        "&:hover": {
          backgroundColor: hoverBackgroundColor, // Dynamická farba pozadia pri hover
          borderColor: hoverBorderColor, // Dynamická farba rámika pri hover
        },
        borderRadius: "8px", // Zaoblené rohy
        padding: "10px 20px", // Veľkosť tlačidla
        fontWeight: "bold", // Tučný text
        textTransform: "uppercase", // Veľké písmená
      }}
    >
      {children}
    </Button>
  );
}
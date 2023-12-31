import React from "react";
import { Button } from "@mui/material";

export default function CustomButton({ label, onClick, visibility = true }) {
  return (
    visibility && (
      <Button
        variant="contained"
        color="primary"
        size="large"
        sx={{
          p: 2,
          fontSize: "22px",
          fontWeight: 600,
          position: "sticky",
          top: 0,
          maxWidth: "100%",
          color: "text.light",
          //bottom: 600,
          zIndex: 4,
        }}
        fullWidth
        onClick={onClick}
      >
        {label}
      </Button>
    )
  );
}

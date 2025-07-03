import React from "react";
import { Outlet } from "react-router-dom";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import Navbar from "./Navbar";

interface LayoutProps {
  children: React.ReactNode;
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const Layout: React.FC<LayoutProps> = ({ children, darkMode, setDarkMode }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "background.default",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          paddingTop: theme.spacing(8),
        }}
      >
        {children}
      </Box>
      <Box
        component="footer"
        sx={{
          textAlign: "center",
          py: 2,
          color: "text.secondary",
          fontSize: 14,
        }}
      >
        © {new Date().getFullYear()} Nikita
      </Box>
    </Box>
  );
};

export default Layout;

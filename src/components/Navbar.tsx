import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Avatar,
  Menu,
  MenuItem,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import SearchBar from "./SearchBar";

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar: React.FC<NavbarProps> = ({ darkMode, setDarkMode }) => {
  const navigate = useNavigate();
  const [searchBarOpen, setSearchBarOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleProfileMenuClose = () => {
    setAnchorEl(null);
  };

  const menuItems = [
    { label: "Home", path: "/" },
    { label: "Movies", path: "/browse" },
    { label: "Popular", path: "/popular" },
    { label: "Trends", path: "/trends" },
    { label: "Animated", path: "/animated" },
  ];

  return (
    <AppBar
      position="fixed"
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? "rgba(255,255,255,0.7)"
            : "rgba(30,30,30,0.7)",
        backdropFilter: "blur(8px)",
        boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
      }}
    >
      <Toolbar sx={{ minWidth: 0, px: { xs: 1, sm: 2 } }}>
        <Typography
          variant="h6"
          component="div"
          sx={{
            cursor: "pointer",
            fontFamily: "Sen, sans-serif",
            fontWeight: 800,
            mr: 4,
            color: (theme) =>
              theme.palette.mode === "light" ? "#000" : "#fff",
          }}
          onClick={() => navigate("/")}
        >
          Netfilx
        </Typography>

        <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center" }}>
          {menuItems.map((item) => (
            <Typography
              key={item.label}
              variant="body1"
              sx={{
                mx: 2,
                cursor: "pointer",
                color: (theme) =>
                  theme.palette.mode === "light"
                    ? "#000"
                    : theme.palette.text.primary,
                transition: "color 0.2s",
                whiteSpace: "nowrap",
                "&:hover": {
                  color: (theme) =>
                    theme.palette.mode === "light"
                      ? theme.palette.primary.main
                      : theme.palette.primary.main,
                },
              }}
              onClick={() => navigate(item.path)}
            >
              {item.label}
            </Typography>
          ))}
        </Box>

        <IconButton color="inherit" onClick={() => setSearchBarOpen(true)}>
          <SearchIcon />
        </IconButton>

        <IconButton
          color="inherit"
          sx={{ ml: 1 }}
          onClick={() => setDarkMode((prev) => !prev)}
        >
          {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>

        <IconButton
          color="inherit"
          onClick={handleProfileMenuOpen}
          sx={{ ml: 1 }}
        >
          <Avatar sx={{ width: 32, height: 32 }} />
        </IconButton>

        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleProfileMenuClose}
        >
          <MenuItem onClick={handleProfileMenuClose}>Profile</MenuItem>
          <MenuItem onClick={handleProfileMenuClose}>Settings</MenuItem>
        </Menu>

        <SearchBar
          open={searchBarOpen}
          onClose={() => setSearchBarOpen(false)}
        />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

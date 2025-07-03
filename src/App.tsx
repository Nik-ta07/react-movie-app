import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { getAppTheme } from "./styles/theme";
import Layout from "./components/Layout";
import Browse from "./pages/Browse";
import MovieDetails from "./pages/MovieDetails";
import Popular from "./pages/Popular";
import Trends from "./pages/Trends";
import Animated from "./pages/Animated";

const App: React.FC = () => {
  const [darkMode, setDarkMode] = React.useState(false);
  const theme = getAppTheme(darkMode ? "dark" : "light");

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Layout darkMode={darkMode} setDarkMode={setDarkMode}>
                <Browse />
              </Layout>
            }
          />
          <Route
            path="/browse"
            element={
              <Layout darkMode={darkMode} setDarkMode={setDarkMode}>
                <Browse />
              </Layout>
            }
          />
          <Route
            path="/movie/:id"
            element={
              <Layout darkMode={darkMode} setDarkMode={setDarkMode}>
                <MovieDetails />
              </Layout>
            }
          />
          <Route
            path="/popular"
            element={
              <Layout darkMode={darkMode} setDarkMode={setDarkMode}>
                <Popular />
              </Layout>
            }
          />
          <Route
            path="/trends"
            element={
              <Layout darkMode={darkMode} setDarkMode={setDarkMode}>
                <Trends />
              </Layout>
            }
          />
          <Route
            path="/animated"
            element={
              <Layout darkMode={darkMode} setDarkMode={setDarkMode}>
                <Animated />
              </Layout>
            }
          />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;

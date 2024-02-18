// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import UserList from "./pages/UserList";
import UserProfile from "./pages/UserProfile";
import { AppBar, Toolbar, Typography } from "@mui/material";
import SearchBar from "./components/SearchBar";

const App = () => {
  return (
    <Router>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#2c2c2c",
          color: "lightgray",
          marginBottom: "40px",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            padding: "12px 15px 12px 20px",
          }}
        >
          <Typography variant="h6" component="h1">
            <Link
              to={"/cloudbees"}
              style={{ textDecoration: "none", color: "lightgray" }}
            >
              Github Application
            </Link>
          </Typography>
          <SearchBar />
        </Toolbar>
      </AppBar>
      <Routes>
        <Route path="/cloudbees" element={<UserList />} />
        <Route path="/profile/:login" element={<UserProfile />} />
      </Routes>
    </Router>
  );
};

export default App;

import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = (event) => {
    // Handle search logic here
    setSearchTerm(event.target.value);
  };
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      navigate(`/profile/${searchTerm}`);
    }
  };

  return (
    <TextField
      sx={{
        backgroundColor: "white",
        color: "white",
        width: "400px",
        borderRadius: "20px",
        "& fieldset": { border: "none" },
      }}
      variant="outlined"
      placeholder="Search GitHub Username..."
      onChange={handleSearch}
      onKeyDown={handleKeyPress}
      InputProps={{
        endAdornment: (
          <IconButton>
            <SearchIcon />
          </IconButton>
        ),
      }}
    />
  );
}

export default SearchBar;

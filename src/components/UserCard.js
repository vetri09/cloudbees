import React from "react";
import { Card, Typography, Button, Avatar } from "@mui/material";
import { Link } from "react-router-dom";

const UserCard = ({ user }) => {
  return (
    <Card
      sx={{
        borderRadius: "15px",
        padding: "30px",
        width: "150px",
        minHeight: "200px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <Avatar
        align="center"
        alt={user.login}
        src={user.avatar_url}
        sx={{ width: 105, height: 105 }}
      />
      <Typography variant="body1" align="center">
        @{user.login}
      </Typography>

      <Link to={`/profile/${user.login}`}>
        <Button variant="contained">View profile</Button>
      </Link>
    </Card>
  );
};

export default UserCard;

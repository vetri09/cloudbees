import React, { useEffect, useState } from "react";
import { Box, Container, Stack } from "@mui/material";
import UserCard from "../components/UserCard";
import ShimmerCard from "../components/ShimmerCard";

const UserList = () => {
  const BASE_URL = "https://api.github.com";

  const [users, setUsers] = useState([]);
  const [perPage, setPerPage] = useState(19);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(`${BASE_URL}/users?per_page=${perPage}`);
        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }
        const data = await response.json();
        setIsLoading(false);
        setUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, [perPage]);

  // window.onscroll = function (ev) {
  //   if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight) {
  //     setIsLoading(true);
  //     setTimeout(fetchData, 2000);
  //   }
  // };

  // const fetchData = () => {
  //   setPerPage(perPage + 12);
  // };

  return (
    <Box component="div">
      <Container maxWidth="lg" sx={{ marginBottom: "50px" }}>
        <Stack spacing={2} direction={"row"} useFlexGap flexWrap="wrap">
          {users.map((user) => (
            <Box component="div" key={user.id}>
              <UserCard user={user} />
            </Box>
          ))}
          {isLoading && (
            <div className="w-1/4">
              <ShimmerCard />
            </div>
          )}
        </Stack>
      </Container>
    </Box>
  );
};

export default UserList;

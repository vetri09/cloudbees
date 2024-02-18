import { Avatar, Container, Box, Typography, Link } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LinkIcon from "@mui/icons-material/Link";
import TwitterIcon from "@mui/icons-material/Twitter";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ApartmentIcon from "@mui/icons-material/Apartment";

const UserProfile = () => {
  const BASE_URL = "https://api.github.com";
  const { login } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${BASE_URL}/users/${login}`);
        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }
        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  });

  return (
    <Box component="div">
      {/* <SearchBar /> */}
      <Container
        maxWidth="md"
        sx={{
          bgcolor: "white",
          borderRadius: "20px",
          display: "flex",
        }}
      >
        <Box component="div">
          <Avatar
            align="center"
            alt={user?.login}
            src={user?.avatar_url}
            sx={{ width: 105, height: 105, margin: "30px 40px 0px 0px" }}
          />
        </Box>
        <Box component="div">
          <Typography sx={{ paddingTop: "30px" }} variant="h4" component="p">
            {user?.name}
          </Typography>
          <Link
            sx={{
              paddingBottom: "20px",
              cursor: "pointer",
              display: "inline-block",
            }}
            target="_blank"
            underline="none"
            rel="noreferrer"
            href={`https://github.com/${user?.login}`}
            variant="subtitle1"
            component="a"
          >
            @{user?.login}
          </Link>
          <Typography sx={{ paddingBottom: "20px" }} variant="body1">
            {user?.bio ? (
              <Typography component="span">{user?.bio}</Typography>
            ) : (
              <Typography sx={{ color: "gray" }} component="span">
                This user has no bio
              </Typography>
            )}
          </Typography>
          <Container
            maxWidth={"xs"}
            sx={{
              padding: "15px 0px 15px 0px",
              display: "flex",
              backgroundColor: "#efefef",
              borderRadius: "20px",
              marginBottom: "30px",
            }}
          >
            <Typography
              sx={{ paddingRight: "30px" }}
              variant="subtitle1"
              component="p"
            >
              Repos
              <Typography
                sx={{ padding: "10px 0px 10px 0px", display: "block" }}
                variant="h6"
                component="span"
              >
                {user?.public_repos}
              </Typography>
            </Typography>
            <Typography
              sx={{ paddingRight: "30px" }}
              variant="subtitle1"
              component="span"
            >
              Followers
              <Typography
                sx={{ padding: "10px 0px 10px 0px", display: "block" }}
                variant="h6"
                component="p"
              >
                {user?.followers}
              </Typography>
            </Typography>
            <Typography
              sx={{ paddingRight: "30px" }}
              variant="subtitle1"
              component="p"
            >
              Following
              <Typography
                sx={{ padding: "10px 0px 10px 0px", display: "block" }}
                variant="h6"
                component="span"
              >
                {user?.following}
              </Typography>
            </Typography>
          </Container>
        </Box>
        <Box component="div" sx={{ flex: "2" }}>
          <Typography
            sx={{ margin: "30px 0px 20px 0px" }}
            align="right"
            variant="body1"
            component="p"
          >
            Joined at{" "}
            {user?.created_at.slice(0, 10).split("-").reverse().join("-")}
          </Typography>
          <Typography
            sx={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "end",
            }}
            align="right"
            variant="subtitle1"
            component="p"
          >
            <LocationOnIcon sx={{ fontSize: 22, paddingRight: "5px" }} />
            {user?.location ? (
              <Typography component="span">{user?.location}</Typography>
            ) : (
              <Typography sx={{ color: "gray" }} component="span">
                Not availabe
              </Typography>
            )}
          </Typography>
          <Typography
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "end",
            }}
            align="right"
            variant="subtitle1"
            component="p"
          >
            <LinkIcon sx={{ fontSize: 22, paddingRight: "5px" }} />
            {user?.blog ? (
              <Link
                sx={{
                  cursor: "pointer",
                }}
                target="_blank"
                rel="noreferrer"
                underline="none"
                href={user?.blog ? user?.blog : "#"}
                align="right"
                variant="subtitle1"
                component="a"
              >
                {user?.blog}
              </Link>
            ) : (
              <Typography sx={{ color: "gray" }} component="span">
                Not availabe
              </Typography>
            )}
          </Typography>
          <Typography
            sx={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "end",
            }}
            align="right"
            variant="subtitle1"
            component="p"
          >
            <TwitterIcon sx={{ fontSize: 22, paddingRight: "5px" }} />
            {user?.twitter ? (
              <Typography component="span">{user?.twitter}</Typography>
            ) : (
              <Typography sx={{ color: "gray" }} component="span">
                Not availabe
              </Typography>
            )}
          </Typography>
          <Typography
            sx={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "end",
            }}
            align="right"
            variant="subtitle1"
            component="p"
          >
            <ApartmentIcon sx={{ fontSize: 22, paddingRight: "5px" }} />
            {user?.company ? (
              <Typography component="span">{user?.company}</Typography>
            ) : (
              <Typography sx={{ color: "gray" }} component="span">
                Not availabe
              </Typography>
            )}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default UserProfile;

import { Card, Typography, Avatar } from "@mui/material";

export default function ShimmerCard() {
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
        src={
          "https://as2.ftcdn.net/v2/jpg/05/73/91/75/1000_F_573917520_L2SpWdbAUFwKh9uJa6mtmplfJQR6myjY.jpg"
        }
        sx={{ width: 105, height: 105 }}
      />
      <Typography variant="body1" align="center">
        loading...
      </Typography>
    </Card>
  );
}

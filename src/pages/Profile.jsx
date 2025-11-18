import React from "react";
import banner from "../assets/ProfilePage/banner.png";
import profilePic from "../assets/FeedPage/ProfilePic.jpg";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import designMeet from "../assets/ProfilePage/Design-meet.png";
import workingOnB2B from "../assets/ProfilePage/working-on-B2B.png";
import parachute from "../assets/ProfilePage/parachute.png";
import { Repeat } from "@mui/icons-material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddCircleIcon from "@mui/icons-material/AddCircle";

const myPosts = [
  {
    id: 1,
    imgUrl: designMeet,
    content: "Design meet",
    likes: 67,
  },
  {
    id: 2,
    imgUrl: workingOnB2B,
    content: "Working on a B2B",
    likes: 42,
  },
  { id: 3, imgUrl: parachute, content: "Parachute ❤️", likes: 65 },
];
const Profile = () => {
  return (
    <Box>
      <Box sx={{ marginBottom: "-1.5em", position: "relative" }}>
        <img
          src={banner}
          alt=""
          style={{
            width: "100%",
            height: "28vh",
            objectFit: "cover",
            borderRadius: "0 0 20px 20px",
          }}
        />
        <Avatar
          alt="Sakshi Agarwal"
          src={profilePic}
          sx={{
            height: 112,
            width: 112,
            top: { xs: "-2.5em" },
            left: { xs: "0.7em" },
          }}
        />
        <Button
          variant="outlined"
          sx={{
            color: "black",
            //   backgroundColor: "white",

            position: "absolute",
            left: "136px",
            top: { xs: "12.5em" },
            // top: ,
            borderRadius: " 90px",
            border: "1px solid black",
            width: "180px",
            height: "32px",
            cursor: "pointer",
          }}
        >
          Edit profile
        </Button>
      </Box>
      <Box>
        <Typography
          sx={{
            margin: "0 0.6em 0.6em",
            fontFamily: "karla",
            fontWeight: "800",
            fontSize: "24px",
            lineHeight: "100%",
          }}
        >
          Sakshi Agarwal
        </Typography>
        <Typography
          sx={{
            fontFamily: "Kumbh Sans",
            fontWeight: "400",
            fontStyle: "Regular",
            fontSize: "14px",
            leadingTrim: "none",
            lineHeight: "100%",
            letterSpacing: "0%",
            margin: "5px 15px",
          }}
        >
          Just someone who loves designing, sketching, and finding beauty in the
          little things 💕
        </Typography>
      </Box>
      <Typography
        sx={{
          margin: "20px 16px 12px",
          fontFamily: "karla",
          fontSize: "18px",
          fontWeight: "600",
          lineHeight: "100%",
        }}
      >
        My Posts
      </Typography>
      <Box
        display="grid"
        gridTemplateColumns="Repeat(2,1fr)"
        gap={1}
        sx={{ margin: "15px" }}
      >
        {myPosts.map((item, index) => (
          <Card key={item.id} sx={{ position: "relative" }}>
            <CardMedia
              component="img"
              image={item.imgUrl}
              height={215}
              sx={{ objectFit: "cover" }}
            ></CardMedia>

            <CardContent
              sx={{
                position: "absolute",
                top: "10em",
                color: "white",
                padding: "0px 5px",
              }}
            >
              <Typography variant="body2" sx={{ color: "white", mb: 0.3 }}>
                {item.content}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 0.5,
                }}
              >
                <FavoriteIcon fontSize="small" color="#FFFFFF" />
                <Typography variant="caption">{item.likes} </Typography>
              </Box>
            </CardContent>
          </Card>
        ))}
      </Box>
      <AddCircleIcon
        sx={{
          position: "absolute",
          left: "5em",
          top: "15.99em",
          fontSize: "3em",
        }}
      />
    </Box>
  );
};

export default Profile;

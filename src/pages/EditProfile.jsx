import { Avatar, Box, Button, TextField, Typography } from "@mui/material";
import banner from "../assets/ProfilePage/banner.png";
import profilePic from "../assets/FeedPage/ProfilePic.jpg";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function EditProfile() {
  const navigate = useNavigate();
  const [userInfo, setuserInfo] = useState({ Uname: "", bio: "" });

  useEffect(() => {
    const saved = localStorage.getItem("userInfo");
    setuserInfo(
      saved
        ? JSON.parse(saved)
        : {
            Uname: "Sakshi Agarwal",
            bio: "Just someone who loves designing, sketching, and finding beauty in the little things 💕",
          }
    );
  }, []);

  // useEffect(() => {

  // }, [userInfo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("userInfo", JSON.stringify(userInfo));
    console.log("submitted");

    console.log(userInfo);
  };

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
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.8em",
            position: "absolute",
            top: "0.5em",
            margin: "0.8em",
            color: "white",
          }}
        >
          <ArrowBackIcon onClick={() => navigate(-1)} />
          <Typography
            sx={{ fontFamily: "karla", fontWeight: "800", fontSize: "1.25rem" }}
          >
            Edit Profile
          </Typography>
        </Box>
        <Avatar
          sx={{
            position: "absolute",
            right: "1em",
            top: "6em",
            width: "30px",
            height: "30px",
            bgcolor: "#F4F4F4",
            border: "#F4F4F4",
          }}
        >
          <EditIcon sx={{ fontSize: "1rem", color: "#000000" }} />
        </Avatar>
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
        <Box sx={{ mt: "-1em" }}>
          <Avatar
            sx={{
              position: "absolute",
              left: "5em",
              top: "10em",
              width: "32px",
              height: "32px",
              bgcolor: "#F4F4F4",
              border: "#F4F4F4",
            }}
          >
            <EditIcon sx={{ fontSize: "1rem", color: "#000000" }} />
          </Avatar>
        </Box>
        <form onSubmit={handleSubmit}>
          <Box sx={{ m: "0 1.2em" }}>
            <TextField
              value={userInfo.Uname}
              onChange={(e) =>
                setuserInfo({ ...userInfo, Uname: e.target.value })
              }
              variant="standard"
              label="Name"
              // defaultValue={"Sakshi Agarwal"}
              fullWidth
            />
            <TextField
              value={userInfo.bio}
              onChange={(e) =>
                setuserInfo({ ...userInfo, bio: e.target.value })
              }
              variant="standard"
              label="Bio"
              // defaultValue={
              //   "Just someone who loves designing, sketching, and finding beauty in the little things 💕"
              // }
              fullWidth
              sx={{ mt: "1em" }}
              multiline
            />
          </Box>
          <Button
            type="submit"
            variant="contained"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "9em auto",
              width: "90%",
              borderRadius: "5em",
              bgcolor: "black",
            }}
          >
            Save
          </Button>
        </form>
      </Box>
    </Box>
  );
}

export default EditProfile;

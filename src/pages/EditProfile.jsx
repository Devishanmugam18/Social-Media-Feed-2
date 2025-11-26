import { Avatar, Box, Button, TextField, Typography } from "@mui/material";
// import banner from "../assets/ProfilePage/banner.png";
// import profilePic from "../assets/FeedPage/ProfilePic.jpg";
// import profilePic from "src/assets/FeedPage/ProfilePic.jpg";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useRef, useState } from "react";
import { UserNameAndBioContext } from "../context/UserNameAndBio";

function EditProfile() {
  const navigate = useNavigate();
  const { userInfo, setUserInfo } = useContext(UserNameAndBioContext);

  //banner pic edit
  const bannerInputRef = useRef(null);

  const handleBannerClick = () => {
    // console.log("handleAvatarCalled", fileInputRef);

    bannerInputRef.current?.click();
  };

  const handleBannerChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const url = URL.createObjectURL(file); // preview URL[web:15]
    setUserInfo(() => ({ ...userInfo, bannerPic: url }));
    // localStorage.setItem("userinfo", userInfo);
  };

  //profile pic edit
  const fileInputRef = useRef(null);

  const handleAvatarClick = () => {
    console.log("handleAvatarCalled", fileInputRef);

    fileInputRef.current?.click();
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const url = URL.createObjectURL(file); // preview URL[web:15]
    setUserInfo(() => ({ ...userInfo, profilePic: url }));
    // localStorage.setItem("userinfo", userInfo);
  };

  useEffect(() => {
    // const saved = localStorage.getItem("userInfo");
    setUserInfo(
      userInfo
        ? userInfo
        : // ? JSON.parse(saved)
          {
            name: "Sakshi Agarwal",
            bio: "Just someone who loves designing, sketching, and finding beauty in the little things 💕",
            profilePic: profilePic,
            bannerPic: banner,
          }
    );
  }, []);

  // useEffect(() => {

  // }, [userInfo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // localStorage.setItem("userInfo", JSON.stringify(userInfo));
  };

  return (
    <Box>
      <Box sx={{ marginBottom: "-1.5em", position: "relative" }}>
        <img
          src={userInfo.bannerPic}
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
          onClick={handleBannerClick}
        >
          <EditIcon
            // onClick={() => console.log("can edit the profile pic")}
            sx={{ fontSize: "1rem", color: "#000000" }}
          />
          <input
            type="file"
            accept="image/*"
            ref={bannerInputRef}
            style={{ display: "none" }}
            onChange={handleBannerChange}
          />
        </Avatar>

        <Avatar
          alt="Sakshi Agarwal"
          src={userInfo.profilePic}
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
            onClick={handleAvatarClick}
          >
            <EditIcon sx={{ fontSize: "1rem", color: "#000000" }} />
            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              style={{ display: "none" }}
              onChange={handleAvatarChange}
            />
          </Avatar>
        </Box>
        <form onSubmit={handleSubmit}>
          <Box sx={{ m: "0 1.2em" }}>
            <TextField
              value={userInfo.name}
              onChange={(e) =>
                setUserInfo({
                  ...userInfo,
                  name: e.target.value,
                })
              }
              variant="standard"
              label="Name"
              // defaultValue={"Sakshi Agarwal"}
              fullWidth
            />
            <TextField
              value={userInfo.bio}
              onChange={(e) =>
                setUserInfo({
                  ...userInfo,
                  bio: e.target.value,
                })
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

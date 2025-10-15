import {
  Button,
  ImageList,
  ImageListItem,
  Paper,
  Typography,
} from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import GoogleSignUpButton from "../mui_components/googleSignUpButton";
import { useContext, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { LoginContext } from "../context/LoginContext";
import Login from "../components/login";
import { useNavigate } from "react-router-dom";
import GoogleIcon from "@mui/icons-material/Google";
// import { BuggyComponent } from "../App";

const galleryImages = [
  {
    url: "src/assets/LoginPage/grid_img1.jpg",
  },
  {
    url: "src/assets/LoginPage/grid_img2.jpg",
  },
  {
    url: "src/assets/LoginPage/grid_img3.jpg",
  },
  {
    url: "src/assets/LoginPage/grid_img4.jpg",
  },
  {
    url: "src/assets/LoginPage/grid_img5.jpg",
  },
  {
    url: "src/assets/LoginPage/grid_img6.jpg",
  },
  {
    url: "src/assets/LoginPage/grid_img7.jpg",
  },
  {
    url: "src/assets/LoginPage/grid_img8.jpg",
  },
  {
    url: "src/assets/LoginPage/grid_img9.jpg",
  },
];

//error boundary practice

export function BuggyComponent({ shouldThrow }) {
  return (
    <>
      <p>"oops somthing went wrong"</p>
    </>
  );
}

const LoginPage = () => {
  const [count, setCount] = useState(0);

  if (count > 3) {
    return new Error("oops, something went wrong!");
  }
  const gridCont = {
    backgroundColor: "blue",
  };
  const gridItem = {
    backgroundColor: "orange",
  };
  const navigate = useNavigate();
  function handleClick() {
    // const navigate = useNavigate();
    console.log("Navigating to feed");
    navigate("/feed");
  }

  return (
    <Box>
      {/* image gallery */}
      <ImageList variant="masonry" cols={3} gap={8} sx={{ mt: 0, mb: 0 }}>
        {galleryImages.map((image, index) => (
          <ImageListItem key={image.url}>
            <img src={image.url} alt="" />
          </ImageListItem>
        ))}
      </ImageList>
      <Box
        sx={{
          backgroundColor: "#fff",
          height: "45vh",
          mt: "-99px",
          textAlign: "center",
          position: "relative",
          zIndex: "99",
          borderRadius: "35px 35px 0 0",
          marginTop: "-94px",
          // position: "absolute",
          // top: "505px",
          // width: "100%",
        }}
      >
        <Box sx={{ p: 3 }}>
          <Typography variant="h5" component="h1" sx={{ color: "black" }}>
            Vibesnap
          </Typography>
          <Typography variant="p" sx={{ color: "black", mt: 5 }}>
            Moments That Matter, Shared Forever.
          </Typography>
        </Box>
        <Button
          variant="contained"
          startIcon={<GoogleIcon />}
          sx={{ borderRadius: 9, backgroundColor: "black" }}
          onClick={handleClick}
        >
          Continue with Google
        </Button>

        {/* error boundary practice */}
        {/* <ErrorBoundary fallback={<BuggyComponent />}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "1em",
            }}
          >
            <Button onClick={() => setCount(count + 1)}>+</Button>
            <Typography>{count}</Typography>
            <Button onClick={() => setCount(count - 1)}>-</Button>
          </Box>
        </ErrorBoundary> */}
      </Box>
    </Box>
  );
};

export default LoginPage;

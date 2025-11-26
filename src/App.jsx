import { useContext, useState } from "react";
import "./App.css";
import Button from "@mui/material/Button";
import GoogleSignUpButton from "./mui_components/googleSignUpButton";
import SimpleDialogDemo from "./mui_components/SharePostModal";
import { Route, Routes } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import Feed from "./pages/Feed.jsx";
import Profile from "./pages/Profile.jsx";
import EditProfile from "./pages/EditProfile.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import UserNameAndBioContext from "./context/UserNameAndBio.jsx";
// import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import UserNameBioProvider from "./context/UserNameAndBio.jsx";

function App() {
  const [hasError, setHasError] = useState(false);
  // const { isLoggedIn, setIsLoggedIn } = useContext(LoginContext);
  // console.log("isLoggedIn ", isLoggedIn);

  // const { userInfo, setUserInfo } = useContext(userNameAndBioContext);

  return (
    <>
      {/* <GoogleSignUpButton onClick={() => setHasError(true)} /> */}
      {/* <BuggyComponent shouldThrow={hasError} /> */}
      {/*<SimpleDialogDemo /> */}

      <UserNameBioProvider>
        <Routes>
          {/* <Route path="/" element={} /> */}
          {/* <Route path="/" element={<Login />} /> */}
          <Route path="/" element={<LoginPage />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/edit-profile" element={<EditProfile />} />
        </Routes>
      </UserNameBioProvider>
    </>
  );
}

export default App;

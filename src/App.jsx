import { useContext, useState } from "react";
import "./App.css";
import Button from "@mui/material/Button";
import GoogleSignUpButton from "./mui_components/googleSignUpButton";
import SimpleDialogDemo from "./mui_components/SharePostModal";
import LoginPage from "./pages/LoginPage";
import { Route, Routes } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import Feed from "./pages/Feed.jsx";
import Login from "./components/login.jsx";
import { LoginContext } from "./context/LoginContext.jsx";

// import CloudUploadIcon from '@mui/icons-material/CloudUpload';

function App() {
  const [hasError, setHasError] = useState(false);
  const { isLoggedIn, setIsLoggedIn } = useContext(LoginContext);
  console.log("isLoggedIn ", isLoggedIn);

  return (
    <>
      {/* <GoogleSignUpButton onClick={() => setHasError(true)} /> */}
      {/* <BuggyComponent shouldThrow={hasError} /> */}
      {/*<SimpleDialogDemo /> */}
      {isLoggedIn ? (
        <Routes>
          {/* <Route path="/" element={} /> */}
          {/* <Route path="/" element={<Login />} /> */}
          <Route path="/" element={<LoginPage />} />
          <Route path="/feed" element={<Feed />} />
        </Routes>
      ) : (
        <Login />
      )}
    </>
  );
}

export default App;

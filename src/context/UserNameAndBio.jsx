import { createContext, useEffect, useState } from "react";
import profilePic from "../assets/FeedPage/ProfilePic.jpg";
import banner from "../assets/ProfilePage/banner.png";

export const UserNameAndBioContext = createContext();

const UserNameBioProvider = ({ children }) => {
  const userInfoLocal = localStorage.getItem("userInfo");

  useEffect(() => {
    setUserInfo(() => {
      return userInfoLocal
        ? JSON.parse(userInfoLocal)
        : { name: "", bio: "", profilePic: "", bannerPic: "" };
    });
  }, []);

  const [userInfo, setUserInfo] = useState({
    // name: "Sakshi Agarwal",
    // bio: "loves to design and code",
    // profilePic: profilePic,
    // bannerPic: banner,

    name: userInfoLocal ? userInfoLocal.name : "",
    bio: userInfoLocal ? userInfoLocal.bio : "",
    profilePic: userInfoLocal ? userInfoLocal.profilePic : "",
    bannerPic: userInfoLocal ? userInfoLocal.bannerPic : "",
  });

  useEffect(() => {
    localStorage.setItem("userInfo", JSON.stringify(userInfo));
  }, [userInfo]);

  return (
    <div>
      <UserNameAndBioContext.Provider value={{ userInfo, setUserInfo }}>
        {children}
      </UserNameAndBioContext.Provider>
    </div>
  );
};

export default UserNameBioProvider;

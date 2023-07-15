// ./src/Router.tsx
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Hashtag from "./pages/Hashtag";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import SeeUsers from "./pages/SeeUsers";
import EditProfile from "./pages/EditProfile";
import { isLoggedInVar } from "./apollo";
import { useReactiveVar } from "@apollo/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Router = () => {
  const isLoggedIn: boolean = useReactiveVar(isLoggedInVar);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {isLoggedIn && <Route path="photos/upload" element={<Home />} />}
        <Route path="photos/:id" element={<Home />} />
        <Route path="/users/all" element={<SeeUsers />} />
        <Route path="users/:username" element={<Profile />} />
        {isLoggedIn && (
          <>
            <Route path="users/:username/photos/upload" element={<Profile />} />
            <Route path="users/:username/edit" element={<EditProfile />} />
          </>
        )}
        <Route path="users/:username/photos/:id" element={<Profile />} />
        <Route path="users/:username/followers" element={<Profile />} />
        <Route path="users/:username/following" element={<Profile />} />
        <Route path="hashtags/:name" element={<Hashtag />} />
        {isLoggedIn && (
          <Route path="hashtags/:name/photos/upload" element={<Hashtag />} />
        )}
        <Route path="hashtags/:name/photos/:id" element={<Hashtag />} />
        {!isLoggedIn && <Route path="/login" element={<Login />} />}
        {!isLoggedIn && <Route path="/signup" element={<SignUp />} />}
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

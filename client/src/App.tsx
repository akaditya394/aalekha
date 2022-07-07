import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import CreatePage from "./pages/CreatePage";
import Home from "./pages/Home";
import PostPage from "./pages/PostPage";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { login, logout } from "./features/user/userSlice";

function App() {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user.user);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          login({
            name: user?.displayName,
            email: user?.email,
            photoURL: user?.photoURL,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/create" element={user ? <CreatePage /> : <Home />} />
      <Route path="/post/:postId" element={user ? <PostPage /> : <Home />} />
    </Routes>
  );
}

export default App;

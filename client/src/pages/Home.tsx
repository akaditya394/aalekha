import React, { Key, useEffect, useState } from "react";
import Header from "../components/Header";
import TypeAnimation from "react-type-animation";
import { useAppSelector } from "../app/hooks";
import { RootState } from "../app/store";
import ProfileBox from "../components/ProfileBox";
import Post from "../components/Post";
import Axios from "axios";
import Button from "../components/Button";
import { PencilIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";
import "animate.css";

type Piece = {
  body: String;
  _id: Key | null;
};

function Home() {
  const [posts, setPosts] = useState([]);
  const user = useAppSelector((state: RootState) => state.user.user);

  useEffect(() => {
    Axios.get(
      `${user && `https://aalekha.onrender.com/getPosts/${user?.email!}`}`
    ).then((response) => {
      console.log(response.data);
      setPosts(response.data);
    });
  }, [user]);

  return (
    <div>
      <Header />
      {user ? (
        <div className="w-[85%] mt-5 mx-auto flex items-center">
          <div className="flex flex-col">
            <ProfileBox />
          </div>

          <div
            className="overflow-y-scroll rounded-md
           h-[34rem] min-h-fit mx-2 flex flex-col items-center justify-start w-[85%]"
          >
            <Link to="/create">
              <Button>
                <PencilIcon className="h-7 w-7" />
                {posts.length > 0
                  ? `Whats on your mind ${user?.name} ?`
                  : `Start journaling ${user?.name}`}
              </Button>
            </Link>
            {posts?.length > 0 ? (
              posts?.map((post: Piece) => (
                <Link
                  key={post._id}
                  className="animate__animated animate__fadeInUp w-[80%] 
                  my-3 min-h-fit glass flex flex-col 
              items-center text-white cursor-pointer"
                  to={`post/${post._id}`}
                >
                  <Post body={post.body} />
                </Link>
              ))
            ) : (
              <div className="w-fit mx-auto p-5 text-white mt-8">
                <TypeAnimation
                  cursor={true}
                  sequence={[
                    "Discover yourself!",
                    3000,
                    "Practice gratitude!",
                    3000,
                  ]}
                  wrapper="h2"
                  className="text-white text-[2.25rem] font-semibold leading-15 font-Montserrat"
                  repeat={Infinity}
                />
              </div>
            )}
          </div>
        </div>
      ) : (
        <div
          className="mx-auto mt-20 w-[75%] flex flex-col items-center 
      rounded-md justify-evenly p-5"
        >
          <div className=" mx-auto w-[60%]">
            <TypeAnimation
              cursor={true}
              sequence={[
                "Login and start journaling!",
                2000,
                "Cultivate a rewarding habit!",
                2000,
                "Journaling can help you deal with depression and anxiety!",
                2000,
                "Get a better idea about your strengths and weaknesses!",
                2000,
              ]}
              wrapper="h2"
              className="text-white text-[3.25rem] font-semibold leading-15 font-Montserrat"
              repeat={Infinity}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;

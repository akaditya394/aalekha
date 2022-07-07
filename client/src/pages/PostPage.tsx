import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header";
import Axios from "axios";
import { ChaoticOrbit } from "@uiball/loaders";
import { TrashIcon } from "@heroicons/react/solid";
import toast from "react-hot-toast";

type Post = {
  author: string;
  body: string;
};

function PostPage() {
  const navigate = useNavigate();
  const param = useParams();
  const [post, setPost] = useState<Post>();

  useEffect(() => {
    Axios.get(`https://aalekha.herokuapp.com/getPost/${param.postId}`).then(
      (response) => {
        setPost(response.data[0]);
      }
    );
  }, [param.postId]);

  const deletePost = () => {
    Axios.get(`https://aalekha.herokuapp.com/deletePost/${param.postId}`)
      .then((response) => {
        console.log(response);
      })
      .then(() => {
        toast.success("Post deleted");
      })
      .then(() => {
        navigate("/");
      });
  };

  return (
    <div>
      <Header />
      {post ? (
        <div className="glass p-5 w-[80%] my-5 mx-auto overflow-y-scroll min-h-fit">
          <div className="text-white font-Montserrat">{post?.body}</div>
        </div>
      ) : (
        <div className="w-[80%] my-5 mx-auto flex flex-col items-center">
          <ChaoticOrbit size={25} speed={1.5} color="blue" />
        </div>
      )}
      <div
        onClick={deletePost}
        className="w-[80%] my-5 mx-auto flex flex-col items-center cursor-pointer"
      >
        <TrashIcon className="h-7 w-7 text-white" />
      </div>
    </div>
  );
}

export default PostPage;

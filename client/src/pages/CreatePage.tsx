import React, { ChangeEvent, useState } from "react";
import Header from "../components/Header";
import Axios from "axios";
import { useAppSelector } from "../app/hooks";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function CreatePage() {
  const [content, setContent] = useState("");
  const user = useAppSelector((state) => state.user.user);
  const navigate = useNavigate();

  const formSubmitHandler: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const notification = toast.loading("Creating post....");
    Axios.post(`${user && "https://aalekha.herokuapp.com/createPost"}`, {
      author: user?.email,
      body: content,
    })
      .then((response) => {
        console.log(response);
        toast.success("Post created", { id: notification });
      })
      .then(() => {
        setContent("");
      })
      .then(() => {
        navigate("/");
      });
  };

  return (
    <div>
      <Header />
      <form
        className="bg-transparent w-[60%] mx-auto mt-10 flex flex-col"
        onSubmit={formSubmitHandler}
      >
        <textarea
          value={content}
          placeholder="share your feelings!"
          className="my-3 rounded-lg h-[25rem] outline-none border-none overflow-y-scroll
          p-3 font-Montserrat"
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
            setContent(e.target.value);
          }}
        />
        <button className="text-white glass p-3 w-fit mx-auto" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default CreatePage;

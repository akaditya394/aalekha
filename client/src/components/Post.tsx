import React from "react";

type Props = {
  body: String;
};

function Post(props: Props) {
  return (
    <div className="w-full my-3 h-full p-3 flex flex-col 
    items-center text-white cursor-pointer">
      <div className="w-[90%] font-Montserrat">
        <div className="my-3">
          <p className="text-lg font-semibold"></p>
        </div>
        <div className="min-h-fit truncate">
          <span className="text-lg">{props.body}</span>
        </div>
      </div>
    </div>
  );
}

export default Post;

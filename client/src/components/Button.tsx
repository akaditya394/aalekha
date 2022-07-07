import React from "react";

function Button(props: any) {
  return (
    <button
      className="font-Montserrat h-fit glass w-fit gap-2 flex my-3 items-center 
      justify-evenly text-sm
  border-purple-900 text-white p-3"
    >
      {props.children}
    </button>
  );
}

export default Button;

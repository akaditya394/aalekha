import React from "react";
import { useAppSelector } from "../app/hooks";
import { RootState } from "../app/store";

function ProfileBox() {
  const user = useAppSelector((state: RootState) => state.user.user);
  return (
    <div
      className="hidden glass font-Montserrat mt-10 h-fit p-4 
    w-[20%] min-w-fit lg:flex flex-col items-center text-white"
    >
      <img
        className="-mt-12 rounded-full object-contain h-20 w-20 border border-purple-500"
        src={user?.photoURL!}
        alt={user?.name!}
      />
      <div className="flex flex-col items-center my-3">
        <div className="my-3">
          <p>{user?.name}</p>
        </div>
        <div className="my-3">
          <p>{user?.email}</p>
        </div>
        <div className="my-3 text-center">
          <p>
            "You yourself, as much as anybody in the entire universe, deserve
            your love and affection" <br /> - Buddha
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProfileBox;

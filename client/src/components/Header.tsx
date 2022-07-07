import { signInWithPopup } from "firebase/auth";
import toast, { Toaster } from "react-hot-toast";
import { NavLink } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import { RootState } from "../app/store";
import { login, logout } from "../features/user/userSlice";
import { auth, provider, signOut } from "../firebase";

function Header() {
  const user = useAppSelector((state: RootState) => state.user.user);
  const dispatch = useAppDispatch();

  const loginHandler = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        dispatch(
          login({
            name: user?.displayName,
            email: user?.email,
            photoURL: user?.photoURL,
          })
        );
      })
      .then(() => {
        toast.success("Logged in successfully!");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const logoutHandler = () => {
    signOut(auth)
      .then(() => {
        dispatch(logout());
      })
      .then(() => {
        toast.success("Logged out successfully!");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="mx-auto flex items-center w-[85%] p-5 text-white">
      <Toaster />
      <div className="flex-1">
        <h1 className="font-Ubuntu text-2xl font-bold">aalekha</h1>
      </div>
      <div className="font-Ubuntu flex items-center">
        <div className="cursor-pointer">
          <NavLink to="/">
            <p className="font-Ubuntu mx-5 font-semibold ">Home</p>
          </NavLink>
        </div>
        {!user ? (
          <div className="cursor-pointer" onClick={loginHandler}>
            <p className="font-Ubuntu mx-5 font-semibold">Login</p>
          </div>
        ) : (
          <div className="cursor-pointer" onClick={logoutHandler}>
            <p className="font-Ubuntu mx-5 font-semibold">Logout</p>
          </div>
        )}
        {user && (
          <div className="mx-5">
            <img
              className="object-contain h-10 w-10 rounded-full"
              src={user.photoURL!}
              alt={user.name!}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;

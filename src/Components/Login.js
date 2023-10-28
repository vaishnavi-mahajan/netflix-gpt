import React, { useRef, useState } from "react";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import {USER_AVATAR,BG_URL} from "../utils/constants"

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch;

  const email = useRef(null);
  const password = useRef(null);
  const fullname = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    //Validate the form data
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);

    if (message) return;
    //create a new user
    if (!isSignInForm) {
      //Sign up
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);

          updateProfile(user, {
            displayName: fullname.current.value,
            photoURL: USER_AVATAR
          })
            .then(() => {
              const {uid, email, displayName, photoURL} = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      //Sign In Logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log("User signed in:", user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log("Sign-in error:", errorCode, errorMessage);
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  return (
    <div className="md:w-32 lg:w-48">
      <div className="absolute height-full">
        <img
          src={BG_URL}
          alt="background"></img>
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute text-white p-12 bg-black w-3/12 my-40 m-auto right-0 left-0 bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            // ref={fullname}
            type="text"
            placeholder="Full name"
            className="p-4 my-2 w-full bg-gray-700 rounded-md">
            {/* <p className="text-red-500 ">{errorMessage}</p> */}
          </input>
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email or phone number"
          className="p-4 my-2 w-full bg-gray-700 rounded-md"></input>
        <input
          ref={password}
          type="text"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700 rounded-md"></input>
        <p className="text-red-500 ">{errorMessage}</p>
        <button
          className="py-4 my-6 rounded-md w-full bg-red-700 cursor-pointer"
          onClick={handleButtonClick}>
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign up Now"
            : "Already register? Sign In Now"}{" "}
        </p>
        <p className="text-gray-400 text-xs">
          This page is protected by Google reCAPTCHA to ensure you're not a bot.
          Learn more.
        </p>
      </form>
    </div>
  );
};

export default Login;

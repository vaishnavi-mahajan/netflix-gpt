import React, { useState } from "react";

const Login = () => {
  const[isSignInForm, setIsSignInForm]=useState();
  
  const toggleSignInForm=()=>{
    setIsSignInForm(!isSignInForm)
  }

  return (
    <div>
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/a73c4363-1dcd-4719-b3b1-3725418fd91d/fe1147dd-78be-44aa-a0e5-2d2994305a13/IN-en-20231016-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="logo"></img>
      </div>
      <form className="absolute text-white p-12 bg-black w-3/12 my-40 m-auto right-0 left-0 bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {!isSignInForm && (<input
          type="text"
          placeholder="Full name"
          className="p-4 my-2 w-full bg-gray-700 rounded-md"></input>)}
        <input
          type="text"
          placeholder="Email or phone number"
          className="p-4 my-2 w-full bg-gray-700 rounded-md"></input>
        <input
          type="text"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700 rounded-md"></input>
        <button className="py-4 my-6 rounded-md w-full bg-red-700 cursor-pointer">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
        {isSignInForm ? "New to Netflix? Sign up Now" : "Already register? Sign In Now"} </p>
        <p className="text-gray-400 text-xs">This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.</p>
      </form>
    </div>
  );
};

export default Login;

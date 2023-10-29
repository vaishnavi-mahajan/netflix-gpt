import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO_URL, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptsearch=useSelector((store)=>store.gpt.showGptsearch)

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    //unsubscribe when component unmounts
    return () => unsubscribe();
  }, []);

  const handleGPTSearchClick=()=>{
    //Toggle GPT Search button
    dispatch(toggleGptSearchView());
  }

  const handleLanguageChange=(e)=>{
    dispatch(changeLanguage(e.target.value))
  }



  return (
    <div className="flex justify-between absolute px-8 py-2 w-screen bg-gradient-to-b from-black z-10 flex-col md:flex-row">
      <img className="w-44 mx-auto md:mx-0" src={LOGO_URL} atl="logo"></img>
      {user && (
        <div className="flex p-2">
         {showGptsearch && (
         <select className="py-2 px-4 m-2 bg-gray-700 text-white"
         onChange={handleLanguageChange}>
          {SUPPORTED_LANGUAGES.map(lang=><option  key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}
         </select>
         )}
          <button className="py-2 px-4 m-2 bg-red-800 text-white rounded-lg mx-4 my-2"
          onClick={handleGPTSearchClick}> 
          {showGptsearch? "Home" : "GPT Search"}</button>
          <img
            className="w-[35px] h-[35px] my-2"
            atl="usericon"
            src={user?.photoURL}></img>
          <button className="text-white mx-1" onClick={handleSignOut}>
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;

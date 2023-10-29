import React,{useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import {auth} from "../utils/firebase"
import {signOut} from "firebase/auth"
import {onAuthStateChanged} from "firebase/auth"
import { useDispatch, useSelector } from 'react-redux'
import { addUser,removeUser } from '../utils/userSlice'
import {LOGO_URL} from "../utils/constants"

const Header = () => {
  const dispatch=useDispatch()
  const navigate=useNavigate();
  const user=useSelector(store=>store.user)

  const handleSignOut=()=>{
  signOut(auth)
  .then(()=>{})
    .catch((error)=>{
      navigate("/error");
    });
  };

  useEffect(()=>{
   const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
         const {uid, email, displayName, photoURL} = user;
         dispatch(addUser({uid:uid,email:email,displayName:displayName, photoURL:photoURL}))
         navigate("/browse")
        } else {
        dispatch(removeUser());
        navigate("/")
        }
      });
      //unsubscribe when component unmounts
      return ()=>unsubscribe()
},[])


  return (
    <div className='flex justify-between absolute px-8 py-2 w-screen bg-gradient-to-b from-black z-10 flex-col md:flex-row'>
        <img className="w-44 mx-auto md:mx-0"
         src={LOGO_URL}
        atl="logo"></img>
        {user && (<div>
          <img className='w-[35px] h-[35px]'
          atl="usericon"
          src={user?.photoURL}></img>
        <button className='text-white '
        onClick={handleSignOut}
        >Sign Out</button>
        </div>)}
     
    </div>
  )
}

export default Header
import React from 'react'
import { useNavigate } from 'react-router-dom'
import {auth} from "../utils/firebase"
import {signOut} from "firebase/auth"
import { useSelector } from 'react-redux'



const Header = () => {
  const user=useSelector(store=>store.user)
  const navigate=useNavigate();
  const handleSignOut=()=>{
  signOut(auth)
  .then(()=>{
      navigate("/");
    })
    .catch((error)=>{
      navigate("/error");
    });
  };

  return (
    <div className=' flex justify-between absolute px-28 py-2 w-screen bg-gradient-to-b from-black z-10'>
        <img className="w-44"
         src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        atl="logo"></img>
        {user && (<div>
          <img className='w-[35px] h-[35px] m-2'
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
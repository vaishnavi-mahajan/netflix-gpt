import React, { useEffect } from 'react'
import Login from './Login'
import Browse from './Browse'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Home'
import {  onAuthStateChanged } from "firebase/auth";
import {auth}  from '../utils/firebase'
import { useDispatch } from 'react-redux'
import{addUser,removeUser} from "../utils/userSlice"


const Body = () => {
    const dispatch=useDispatch();

    const appRouter=createBrowserRouter([
        {
            path:"/",
            element:<Home></Home>
        },
        {
            path:"/login",
            element:<Login></Login>
        },
        {
            path:"/browse",
            element:<Browse></Browse>
        }
    ])

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
             const {uid, email, displayName, photoURL} = user;
            dispatch(addUser({uid:uid,email:email,displayName:displayName, photoURL:photoURL}))
            } else {
            dispatch(removeUser());
            }
          });
    },[])

  return (
    <div>
        <RouterProvider router={appRouter} />
    </div>
  )
}

export default Body
import React from 'react';
import { postContext } from '../../firebase/postContext';
import { useContext,useEffect } from 'react';
import { Firebase } from '../../firebase/config';
import 'firebase/compat/firestore'
import { useState } from 'react';

import './View.css';
function View() {
  
  const [userDetails,setUserDetails]=useState()
  const {postDetails,setPostDetails}=useContext(postContext)
  console.log(postDetails)
  const {user}=postDetails
  console.log(user)

  useEffect(()=>{
    
  Firebase.firestore().collection('users').where('id','==',user).get().then((res)=>{
    
   res.forEach((obj)=>{
    console.log('objecting',obj.data())
    setUserDetails(obj.data())
   
   })
  })
  },[])
  
  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          src={postDetails?postDetails.url:''}
          alt=""
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {postDetails?postDetails.price:''} </p>
          <span>{postDetails?postDetails.name:''}</span>
          <p>{postDetails?postDetails.category:''}</p>
          <span>{postDetails?postDetails.createdAt:''}</span>
        </div>
        <div className="contactDetails">
          <p>{userDetails?userDetails.username:""}</p>
          
          <p>{userDetails?userDetails.phone:''}</p>
        </div>
      </div>
    </div>
  );
}
export default View;

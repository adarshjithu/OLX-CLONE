import React from 'react';
import { useState,useEffect } from 'react';
import { Firebase } from '../../firebase/config';
import 'firebase/compat/firestore'
import Heart from '../../assets/Heart';
import './Post.css';
import { useHistory } from 'react-router-dom';
import { postContext } from '../../firebase/postContext';
import { useContext } from 'react';

function Posts() {
  const [products,setProducts]=useState([])
const {setPostDetails}=useContext(postContext)
const history=useHistory()


useEffect(()=>{

  Firebase.firestore().collection('products').get().then((snapshot)=>{
const allPost=snapshot.docs.map((product)=>{
   return{
    ...product.data(),id:product.id
   }
})
console.log(allPost)
setProducts(allPost)

  })
},[])
  return (
    <div className="postParentDiv">
     
      <div className="moreView">
        <div className="heading">
          <span>Quick Menu</span>
          <span>View more</span>
        </div>
        <div className="cards">

       {products.map((obj)=>{
        return   (<div onClick={()=>{setPostDetails(obj)
        history.push('/view')}  }
        className="card"
      >
        <div className="favorite">
          <Heart></Heart>
        </div>
       
        <div className="image">
          <img src={products?obj.url:''} alt="" />
        </div>
        {/* {console.log('post details',postDetails)} */}
        <div className="content">
          <p className="rate">&#x20B9; {obj.price}</p>
          <span className="kilometer">{obj.category}</span>
          <p className="name"> {obj.name}</p>
        </div>
        <div className="date">
          <span>{obj.createdAt}</span>
     
        </div>
      </div>)

       })}
          
          





        </div>
      </div>
      <div className="recommendations">
        <div className="heading">
          <span>Fresh recommendations</span>
        </div>
        <div className="cards">


          
          <div className="card">
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src="../../../Images/R15V3.jpg" alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; 250000</p>
              <span className="kilometer">Two Wheeler</span>
              <p className="name"> YAMAHA R15V3</p>
            </div>
            <div className="date">
              <span>10/5/2021</span>
            </div>
          </div>




        </div>
      </div>
    </div>
  );
}

export default Posts;

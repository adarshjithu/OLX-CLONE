import React, { Fragment } from 'react';
import './Create.css';
import Header from '../Header/Header';
import { useState } from 'react';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { Appcontext } from '../../firebase/Appcontext';
import { useContext } from 'react';
import { Firebase } from '../../firebase/config';
import { useHistory } from 'react-router-dom';






const Create = () => {
  const [name, setName] = useState()
  const [category, setCategory] = useState()
  const [price, setPrice] = useState()
  const [image, setImage] = useState()
  const history=useHistory()
  
  const user = useContext(Appcontext)
  const date=new Date()



  const handleSubmit = () => {
  const storage=getStorage() 
  const storageRef = ref(storage, `/image/${image.name}`);
 uploadBytesResumable(storageRef, image).then(({data})=>{
    console.log(data)
    getDownloadURL(ref(storage,`image/${image.name}`)).then((url)=>{
      console.log(url)
      Firebase.firestore().collection('products').add({
        name:name,
        category:category,
        price:price,
       url:url,
       user:user.uid,
       createdAt:date.toDateString()

      }).then(()=>{
        history.push('/')
      })
     })
  //  
})

  }






  return (
    <Fragment>
      <Header />
      <card>
        <div className="centerDiv">

          <label htmlFor="fname">Name</label>
          <br />
          <input
            className="input"
            type="text"
            id="fname"
            name="Name"
            onChange={(e) => setName(e.target.value)}
            value={name} />
          <br />




          <label htmlFor="fname">Category</label>
          <br />
          <input
            className="input"
            type="text"
            id="fname"
            name="category"

            onChange={(e) => setCategory(e.target.value)}
            value={category}
          />




          <br />
          <label htmlFor="fname">Price</label>
          <br />


          <input className="input" type="number" id="fname" name="Price"
            onChange={(e) => setPrice(e.target.value)}
            value={price} />
          <br />




          <br />
          <img alt="Posts" width="200px" height="200px" src={image ? URL.createObjectURL(image) : ''}></img>



          <br />
          <input type="file" onChange={(e) => setImage(e.target.files[0])} />
          <br />
          <button className="uploadBtn" onClick={handleSubmit}>upload and Submit</button>

          {console.log(name, price, category)}
        </div>
      </card>
    </Fragment>
  );
};

export default Create;

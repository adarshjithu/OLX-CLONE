

import './Header.css';
import OlxLogo from '../../assets/OlxLogo';
import Search from '../../assets/Search';
import Arrow from '../../assets/Arrow';
import SellButton from '../../assets/SellButton';
import SellButtonPlus from '../../assets/SellButtonPlus';
import { useContext } from 'react';
import {Appcontext} from '../../firebase/Appcontext';
import { getAuth,signOut } from 'firebase/auth';
import { useHistory } from 'react-router-dom';
import { BrowserRouter as Router,Link,Routes } from 'react-router-dom';
import Create from '../Create/Create';
function Header(props) {
const history=useHistory()
const user=useContext(Appcontext)
console.log('user',user)

  return (
    <div className="headerParentDiv">
      
      
      <div className="headerChildDiv">
        <div className="brandName">
          <OlxLogo></OlxLogo>
        </div>
        <div className="placeSearch">
          <Search></Search>
          <input type="text" />
          <Arrow></Arrow>
        </div>
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find car,mobile phone and more..."
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff"></Search>
          </div>
        </div>
        <div className="language">
          <span> ENGLISH </span>
          <Arrow></Arrow>
        </div>
        <div className="loginPage">
          <span className='username'>{user?user.displayName:''}</span>
     

          <hr />
        </div>
{user?<a href='a' className='user' onClick={()=>{
  const auth=getAuth()
  signOut(auth).then(()=>{
    history.push('/login')
  })
}}>Logout</a>:''}
        <div className="sellMenu">
        
          



          <Link to={'/login'}>Login</Link>
          <SellButton ></SellButton>
          <div className="sellMenuContent">
            <SellButtonPlus></SellButtonPlus>
            <Link to='/create' >SELL</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;

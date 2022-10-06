import { Fragment, useState } from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './pages/home/Home';
import {Routes, Route}from "react-router-dom"
import Cart from './pages/cart/Cart';
import Favorites from './pages/favorites/Favorites';
import Account from './pages/account/Account';
import HomeLink from './components/header/explore/HomeLink';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons"
import Electronics from './components/navigation_items/Electronics';
import Jewelery from './components/navigation_items/Jewelery';
import Men from './components/navigation_items/Men';
import Women from './components/navigation_items/Women';


function App() {
  const [toggle, setToggle] = useState(false);
    const handleSideNavAppear = ()=>{
      setToggle(!toggle)
    }


  return (
    <Fragment>
        <div className="App">
          <Header handleSideNavAppear = {handleSideNavAppear} />
          <div className="body-app">
            {toggle ? (
              <div className='after-body-app'>
                <FontAwesomeIcon onClick={()=> setToggle(false)} icon={faCircleXmark}/>
              </div>
            ): ""}
              <Routes>
                  <Route path='/' element ={<Home toggle = {toggle} />}/>
                  <Route path='/' element ={<HomeLink />}/>
                  <Route path='/cart' element = {<Cart/>}/>
                  <Route path='/favorites' element= {<Favorites/>}/>
                  <Route path='/account' element= {<Account/>}/>
                  <Route path='/electronics' element= {<Electronics toggle = {toggle}/>}/>
                  <Route path='/jewelery' element= {<Jewelery toggle = {toggle}/>}/>
                  <Route path='/men' element= {<Men toggle = {toggle}/>}/>
                  <Route path='/women' element= {<Women toggle = {toggle}/>}/>
              </Routes>
          </div>
        </div>
    </Fragment>
  );
}

export default App;

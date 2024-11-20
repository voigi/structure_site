import React from 'react'
import Nav from '../components/Navbar'
import Photo from '../components/Photo'
import Prestation from '../components/Prestation'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import './Homepage.css';

const Homepage = () => {
  return (
    <>
    <Nav />
    <div id='container'>
       <Photo />
    {/* <h1 style={{textAlign:'center'}}>Bienvenue sur le site web!</h1> */}
    <Prestation />
    </div>
   
    <Contact/> 
    <Footer/>
    </>
  )
}

export default Homepage
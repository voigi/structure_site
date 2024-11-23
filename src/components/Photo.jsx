import React from 'react';
import { Image } from 'react-bootstrap';
import  '../components/Photo.css';

const Photo = () => {
  return (
   <Image id='imgpage' src="https://picsum.photos/1280/720" fluid/>
  )
}

export default Photo
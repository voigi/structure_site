import React from 'react';
import { Image } from 'react-bootstrap';
import  '../components/Photo.css';

const Photo = () => {
  return (
    <div><Image id='imgpage' src="https://loremflickr.com/1280/720" fluid/></div>
  )
}

export default Photo
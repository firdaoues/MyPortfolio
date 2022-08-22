import React, { useState } from 'react';


import {images } from '../../constants';
import AppWrap  from '../../wrapper/AppWrap';
import MotionWrap  from '../../wrapper/MotionWrap';
import { client } from '../../client';
import './Footer.scss';


const Footer = () => {
  return (
    <div>Footer</div>
  )
}

export default AppWrap (
  MotionWrap(Footer, 'app__footer'),
  'conatct',
  'app__whitebg'
)
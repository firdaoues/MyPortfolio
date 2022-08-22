import React, { useState } from 'react';


import {images } from '../../constants';
import AppWrap  from '../../wrapper/AppWrap';
import MotionWrap  from '../../wrapper/MotionWrap';
import { client } from '../../client';
import './Footer.scss';


const Footer = () => {
   const [formData, setFormData] = useState({name :'', email :'', message :''})
   const [isFormSubmitted, setIsFormSubmitted] = useState(false);
   const [loading, setLoading] = useState(false);

   const { name, email, message} = formData;
   const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData,  [name]: value});
  }
  const handleSubmit = () => {
    setLoading(true);
  }
  return (
   <>
   <h2 className='head-text'> Take a coffe and chat with me</h2>
   <div className='app__footer-cards'>
    <div className='app__footer-card'>
      <img src = {images.email} alt ="email" />
      <a href="mailto:firdaouesmiraoui@gmail.com" className="p-text">firdaouesmir@gmail.com</a>
    </div>
    <div className='app__footer-card'>
      <img src = {images.mobile} alt ="mobile" />
      <a href="tel: 1234567" className="p-text">1234567</a>
    </div>
   </div>
   <div className='app__footer-form app__flex'>
    <div className='app__flex'>
      <input className='p-text' type= 'text' placeholder='Your Name' name='name' value={name} onChange={handleChangeInput}/>
    </div>
    <div className='app__flex'>
      <input className='p-text' type= 'text' placeholder='Your Email' name='email' value={email} onChange={handleChangeInput}/>
    </div>
    <div>
      <textarea className='p-text' placeholder='Your message' value={message} name={message} onChange={handleChangeInput}/>
    </div>
    <button type='button' className='p-text' onChange={handleSubmit}>{loading ? 'Sending' : 'Send Message'}</button>
   </div>
   </>
  )
}

export default AppWrap (
  MotionWrap(Footer, 'app__footer'),
  'conatct',
  'app__whitebg'
)
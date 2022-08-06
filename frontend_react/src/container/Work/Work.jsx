import React, {useState, useEffect} from 'react';
import {AiFillEye, AiFillGithub} from 'react-icons/ai';
import { motion } from 'framer-motion';

import AppWrap from '../../wrapper/AppWrap';
import { urlFor, client } from '../../client';

import './Work.scss';


const Work = () => {
  const [works, setWorks] = useState([]);

  useEffect(() => {
    const query = '*[_type == "works"]';
    client.fetch(query)
    .then((data) => setWorks(data))
}, []);
const handleWorkFilter = (item) => {
  
}
  return (
    <>
       <h2 className="head-text"> My Creative <span>Portfolio</span>  Section </h2>
       <div className="app__work_filter">
       {works.map((work, index) => (
      <motion.div 
      whileInView={{ opacity: 1}}
      whileHover= {{ scale: 1.1}}
      transition= {{ duration: 0.5, type:'tween'}}
      className="app__profile-item"
      key={work.title + index}>
      <img src={urlFor(work.imgUrl)} alt={work.title} />
      <h2 className="bold-text" style={{marginTop: 20}}>{work.title}</h2>
      <p className="p-text" style={{marginTop: 10}}>{work.description}</p>
      </motion.div>

    ))}
        </div>

    </>
  )
}

export default Work
import React, {useState, useEffect} from 'react';
import {AiFillEye, AiFillGithub} from 'react-icons/ai';
import { motion } from 'framer-motion';

import AppWrap from '../../wrapper/AppWrap';
import { urlFor, client } from '../../client';

import './Work.scss';


const Work = () => {
  const [works, setWorks] = useState([]);
  const [animateCard, setanimateCard] = useState({ y: 0, opacity: 1});
  const [activeFilter, setactiveFilter] = useState('All');
  const [filterWork, setFilterWork] = useState([])


  useEffect(() => {
    const query = '*[_type == "works"]';
    client.fetch(query)
    .then((data) => {
      setFilterWork(data);
      setWorks(data);
      })
    
}, []);

  const handleWorkFilter = (item) => {

}

  return (
    <>
       <h2 className="head-text"> My Creative <span>Portfolio</span>  Section </h2>
       <div className="app__work_filter">
        <div 
        key = {index}
        onClick={() => handleWorkFilter(item)} 
        className={`app__work-filter app__flex p-text ${active}`} > {item}
        </div>
       </div>

      <motion.div 
      animate={animateCard}
      transition= {{ duration: 0.5, delayChildren: 0.5 }}
      className="app__work-portfolio" >

      {filterWork.map((work, index) => (
      <div className="app__work-item app__flex" key={index}>
        <div className="app__work-img app__flex">
          <img src={urlFor(work.imageUrl)} alt={work.name} />

          <motion.div 
          whileHover = {{opacity: [0, 1]}}
          transition= {{ duration: 0.5, ease: 'easeInOut', staggerChildren: 0.5 }}
          className="app__work-hover app__flex"   
          >


            <a href={work.projectLink} target="_blank" rel="noreferrer">

              <motion.div
              whileInView={{scale: [1, 0.9]}}
              whileHover = {{scale: [1, 0.9]}}
              transition= {{ duration: 0.25}}
              className=" app__flex"   
              >
                  <AiFillEye />

              </motion.div>
            </a>
            <a href={work.codeLink} target="_blank" rel="noreferrer">

              <motion.div
              whileInView={{scale: [1, 0.9]}}
              whileHover = {{scale: [1, 0.9]}}
              transition= {{ duration: 0.25}}
              className=" app__flex"   
              >
                  <AiFillGithub />

              </motion.div>
            </a>
          </motion.div>
        </div>
      </div>
        ))}
      </motion.div>

      

    </>
  )
}

export default Work
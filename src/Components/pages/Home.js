import React from 'react'
import '../../App.css'
import HeroSection from '../HeroSection'
// import Cards from '../Cards'
import Skill from '../Skill'
// import Projecthome from '../Projecthome'
import Main from '../../Components/Filter/Main'
import { motion } from 'framer-motion'
function Home() {
  return (
   <>
   <motion.div class="HomePage"
   intial={{width:0}}
   animate={{width:"100%"}}
   exit={{x:window.innerWidth , transition:{duration:0.5}}}
   >
    <motion.div className='section_one' initial={{opacity:0 }}
            whileInView={{opacity:1 }}
            viewport={{once:true , amount:0.3}}
            transition={{duration:0.8 , delay: 0.3}}>
   <HeroSection/>
   </motion.div>
   <motion.div className='section_two' initial={{opacity:0 }}
            whileInView={{opacity:1 }}
            viewport={{once:true , amount:0.3}}
            transition={{duration:0.8 , delay: 0.3}}>
   <Skill/>
   </motion.div>
   {/* <Cards/> */}
   {/* <Projecthome/> */}
  <div className='section_three'>
   <Main/>
   </div>

   </motion.div>


   </>
  )
}

export default Home
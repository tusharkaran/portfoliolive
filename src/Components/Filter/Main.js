

import React, { useState ,useEffect } from "react";
import './Filter.css'
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import {useLocation} from 'react-router-dom';

function Main() {

  let demo = [];
  let counter;
  const [item, setItem] = useState([]);
  const [color, setColor] = useState();
  const [menuItems , setmenuItems] = useState([])
  // if(localStorage.getItem('Project_data')){
  const fetchData = async () => {
    if(localStorage.getItem('Project_data')){
       demo  = JSON.parse(localStorage.getItem('Project_data'));
       setItem(demo);
     
    }else{
      const response = await fetch("https://firestore.googleapis.com/v1/projects/portfolio-4d4c6/databases/(default)/documents/Projects");
      const data = await response.json();
      data.documents.map((d) => {
        let  obj ={
        id: d.fields.id.stringValue,
        title:d.fields.title.stringValue,
        category: d.fields.category.stringValue,
        img: d.fields.img.stringValue,
        desc: d.fields.desc.stringValue
        };
        demo.push(obj);
      });
      console.log("call",[...demo])
      setItem([...demo]);
    }
 
    
     
   
     setmenuItems([...new Set([...demo].map((Val) => Val.category))]);
      localStorage.setItem("Project_data" , JSON.stringify([...demo]));   
    }


  const filterItem = (curcat) => {
    const newItem = JSON.parse(localStorage.getItem('Project_data')).filter((newVal) => {
      return newVal.category === curcat; 
    });
    setItem(newItem);
  };
  const setAllItem = () => {
    const newItem = JSON.parse(localStorage.getItem('Project_data'));
    setItem(newItem);
  };
  const getRandomColor= () => {
    let colorValues = ["#E4EE89", "#81D8F7", "#FD2155", "orange"];
    let selectedColor= colorValues[Math.floor(Math.random() * colorValues.length)];
   counter =selectedColor ;
    
    return selectedColor;
  };



  
    useEffect(() => {
      fetchData()
    }, [])
  return (
    <>
    <div class="project_home">
      Projects
    </div>
 
     <div className="filter_all_button">
        {menuItems.map((Val, id) => {
          return (         
            <motion.a class="button-rotating filter-btn" onClick={() => filterItem(Val)}
            initial={{opacity:0 , translateX:-30,translateY:-30}}
            whileInView={{opacity:1 , translateX:0,translateY:0}}
            viewport={{once:true , amount:0.5}}
            transition={{duration:0.5 , delay: id*0.1}}
            >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            {Val}                     
        </motion.a>
     
          );
        })}
          <motion.a class="button-rotating filter-btn" onClick={() => setAllItem()} 
           initial={{opacity:0 , translateX:-30,translateY:-30}}
           whileInView={{opacity:1 , translateX:0,translateY:0}}
           viewport={{once:true , amount:0.5}}
           transition={{duration:0.5 , delay: counter*0.1}}
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            All
        </motion.a>
       </div>
    <div className="container-fluid">
   
    <div class="filter_row">
     
        {item?.map((Val , i) => {
          return (
            <motion.div class="filter_column"
            initial={{opacity:0 , translateX:-30,translateY:-30}}
            whileInView={{opacity:1 , translateX:0,translateY:0}}
            viewport={{once:true , amount:0.5}}
            transition={{duration:0.5 , delay: i*0.1}}>
              <div class="filter_card">
                <div class="page-content-filter">
                  
                  <div class="card-filter" style={{borderTop: `2px solid ${getRandomColor()} `}} >
                  <div class="folder"><svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-folder"><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg></div>
                    <div class="content-filter">
                      <h2 class="title-filter" >{Val.title}</h2>
                      <p class="copy">{Val.desc}</p>
                      <Link class="btn" to ="/projects"
                                          state={{ key:Val.id
                                          }}>
                                          
                        View Project
                        </Link>
                       
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      
      </div>
      <div class= "view_page_btn"><Link to ="/projects" className="button-rotating">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        View All Projects
        </Link></div>
    </div>
  </>
  )
}

export default Main


 
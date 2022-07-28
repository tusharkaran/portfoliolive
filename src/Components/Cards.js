import React from 'react';
import './Cards.css';
import CardItems from './Carditems';
import { motion } from 'framer-motion';


function Cards() {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.8,
        staggerChildren: 0.2
      }
    }
  };
  

 
  return (

    <div className='cards'>
       <div class="Name knowtitle">
      <span>K</span>
      <span>n</span>
      <span>o</span>
      <span>w</span>
      <span> </span>
      <span>m</span>
      <span>o</span>
      <span>r</span>
      <span>e</span>
      <span> </span>
      <span>a</span>
      <span>b</span>
      <span>o</span>
      <span>u</span>
      <span>t</span>
      <span> </span>
      <span>m</span>
      <span>e</span>
    </div>
      <div className='cards__container'>
        <div className='cards__wrapper'>

          <ul className="cards__items">
            <CardItems
              text='Are you up for a short story? : Have you ever clicked a website button and wondered what would happen next? Have you ever questioned how a car or a human travels on a single click when playing computer games? Thats me when I was kid.The only difference now is: I like to be the one who controls the behavior of that click.In short, I enjoy building and automating.'
              label='What drives me?'
              path='/services'
              index='1'
            />
            
            <CardItems
              text='I enjoy discussing variety of topics, including UIdevelopment, website design and development, IOT, AI, and entrepreneurship.'
              label='What am I interested in?'
              path='/services'
              index='2'
            />
             <CardItems
              text='Whatever I feel like, because why not? 
              Built posters, planted flowers, read books, played football and regular gyming, and most importantly designed this website.'
              label='What do I do in my free time?'
              path='/sign-up'
            />
            
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
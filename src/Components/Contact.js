import React, { useRef , useState ,useEffect } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css'


function Contact() {
 
  const form = useRef();
  const [click1, setClick1] = useState(true);
  const [click2, setClick2] = useState(false);
  const [click3, setClick3] = useState(false);
  const [currentstep, setcurrentstep] = useState('name');
  const [dataname, setdataname] = useState('');
  const [dataemail, setdataemail] = useState('');
  const [next, setdisablenext] = useState(true);
  const [submit, setdisablesubmit] = useState(true);


  const NextToChild = () => {

    if(currentstep === 'name'){     
      setClick1(!click1);
      setClick2(!click2);
      setcurrentstep('email');
      if(dataemail.length >=1){
        setdisablenext(false)
      }else{
        setdisablenext(true)
      }
    
     
    }else if(currentstep === 'email'){
      setClick2(!click2);
      setClick3(!click3);
      setcurrentstep('message');
      setdisablenext(true)
    }
    
   

  } 
  function nameChange(event) {
    event.target.value.length >=1 ? setdisablenext(false) : setdisablenext(true); 
    setdataname(event.target.value) ; 
  }
  function emailChange(event) {
    let  regex = event.target.value.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
    regex != null ? setdisablenext(false) : setdisablenext(true);
    setdataemail(event.target.value) ;

  }
  function messageChange(event) {
    event.target.value.length >=1 ? setdisablesubmit(false): setdisablesubmit(true);
  }
  const NameChild = () => {
    setClick1(true);
    setClick2(false);
    setClick3(false);
    setcurrentstep('name');
    setdisablenext(false) 
  }
  const EmailChild = () => {
    setClick1(false);
    setClick2(true);
    setClick3(false);
    setcurrentstep('email');
    setdisablenext(false) 
  }
 
 
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_rhmsjuq', 'template_mwfd60d', e.target, 'ot-WQ7cRU5l276T1Q')
      .then((result) => {
          setClick3(!click3);
          setClick1(!click1);
          setcurrentstep('name');
          setdataname('') ;
          setdataemail('') ;

      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };


  return (
   <div class ="contact-event">
     <ul class= "form-value">

       <li class className={currentstep === 'email' || currentstep === 'message' ?'name-value showvalue' : 'name-value' }> 
       <button class= "showdata_button" onClick={() => NameChild()}>
        
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" viewBox="0 0 50 50" space="preserve" class="i-svg i-svg user"><path d="M25,2.579c6.191,0,11.212,5.019,11.212,11.21C36.212,19.981,31.191,25,25,25 s-11.211-5.019-11.211-11.211C13.789,7.598,18.809,2.579,25,2.579z M25,30.604c-17.097,0-22.42,11.212-22.42,11.212v5.604h44.84 v-5.604C47.42,41.816,42.097,30.604,25,30.604z" fill="#333333"></path></svg>
        <span>{dataname}</span>
     
      </button>
       </li>
       <li class  className={currentstep === 'message' ?'email-value showvalue' : 'email-value' }>
         <button class= "showdata_button" onClick={() => EmailChild()}>
         <svg version="1.1" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" viewBox="0 0 50 50" space="preserve" class="i-svg i-svg mail"><path d="M2.58,13.065L25.746,32.02l23.166-18.955V8.853H2.58V13.065z M2.58,38.862 l11.377-12.639L2.58,15.967V38.862z M48.912,39.173L37.214,26.267L48.912,16.12V39.173z M25.746,35.687l-9.477-7.879L2.58,42.55 h46.333L35.203,27.808L25.746,35.687z" fill="#333333"></path></svg>
         <span>{dataemail}</span>
         </button>
       </li>
     </ul>
    <form class="contact-form" ref={form}  onSubmit={sendEmail}>
    <div class= {click1 ? 'name-data activeField' : 'name-data'}>
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" viewBox="0 0 50 50" space="preserve" class="i-svg i-svg user"><path d="M25,2.579c6.191,0,11.212,5.019,11.212,11.21C36.212,19.981,31.191,25,25,25 s-11.211-5.019-11.211-11.211C13.789,7.598,18.809,2.579,25,2.579z M25,30.604c-17.097,0-22.42,11.212-22.42,11.212v5.604h44.84 v-5.604C47.42,41.816,42.097,30.604,25,30.604z" fill="#333333"></path></svg>
    {/* <label class= "data-label">Name</label> */}
    <input class="name-input"  type="text" name="user_name" autoComplete="false" placeholder='Fill up your name' onChange={nameChange} value={dataname}/>
    </div>
    <div class= {click2 ? 'email-data activeField' : 'email-data'}>
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" viewBox="0 0 50 50" space="preserve" class="i-svg i-svg mail"><path d="M2.58,13.065L25.746,32.02l23.166-18.955V8.853H2.58V13.065z M2.58,38.862 l11.377-12.639L2.58,15.967V38.862z M48.912,39.173L37.214,26.267L48.912,16.12V39.173z M25.746,35.687l-9.477-7.879L2.58,42.55 h46.333L35.203,27.808L25.746,35.687z" fill="#333333"></path></svg>
    {/* <label class= "data-label">Email</label> */}
    <input class="email-input" type="email" name="user_email" autoComplete="false" placeholder='Fill up your email' onChange={emailChange} value={dataemail}/>
    </div>
    <div class=  {click3 ? 'message-data activeField' : 'message-data'}>
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" viewBox="0 0 50 50" space="preserve" class="i-svg i-svg msg"><path d="M47.811,7.352l-4.198-4.191 c-0.434-0.433-1.003-0.65-1.571-0.65c-0.569,0-1.139,0.216-1.571,0.649l-3.358,3.348l7.341,7.328l3.358-3.347 C48.678,9.623,48.678,8.217,47.811,7.352z M15.315,28.264l7.342,7.33l20.225-20.187l-7.343-7.33L15.315,28.264z M13.73,29.831 l-1.567,8.892l8.91-1.562L13.73,29.831z M34.026,42.685H6.344V15.003H25.88l4.814-4.805H4.646c-1.709,0-3.107,1.398-3.107,3.107 v31.077c0,1.71,1.398,3.108,3.107,3.108h31.078c1.709,0,3.107-1.398,3.107-3.108V22.164l-4.805,4.797V42.685z" fill="#333333"></path></svg>
    {/* <label class= "data-label">Message</label> */}
    <textarea class="message-input" name="message" placeholder='Fill up your message' onChange={messageChange}/>
    </div>
    <div class="buttons-show">
    <a class={next ?"next-button disablelink": "next-button "} onClick={() => NextToChild()} aria-disabled = "true" >Next</a>
    <button class="submit-button" type="submit" value="Send" disabled = {submit}>Send Message</button>
    </div>
   
  </form>
  
   {/* <button onClick={() => PrevToChild()}>Prev</button> */}
   </div>
  )
}

export default Contact
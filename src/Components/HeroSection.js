import React from 'react';
import '../App.css';
import './HeroSection.css';


function HeroSection() {
  // dots is an array of Dot objects,
  // mouse is an object used to track the X and Y position
  // of the mouse, set with a mousemove event listener below
  // var dots = [],
  // mouse = {
  //   x: 0,
  //   y: 0
  // };

  // // The Dot object used to scaffold the dots
  // var Dot = function() {
  // this.x = 0;
  // this.y = 0;
  // this.node = (function(){
  // var n = document.createElement("div");
  // n.className = "trail";
  // document.body.appendChild(n);
  // return n;
  // }());
  // };
  // // The Dot.prototype.draw() method sets the position of 
  // // the object's <div> node
  // Dot.prototype.draw = function() {
  // this.node.style.left = this.x + "px";
  // this.node.style.top = this.y + "px";
  // };

  // // Creates the Dot objects, populates the dots array
  // for (var i = 0; i < 12; i++) {
  // var d = new Dot();
  // dots.push(d);
  // }

  // // This is the screen redraw function
  // function draw() {
  // // Make sure the mouse position is set everytime
  // // draw() is called.
  // var x = mouse.x,
  //   y = mouse.y;

  // // This loop is where all the 90s magic happens
  // dots.forEach(function(dot, index, dots) {
  // var nextDot = dots[index + 1] || dots[0];

  // dot.x = x;
  // dot.y = y;
  // dot.draw();
  // x += (nextDot.x - dot.x) * .6;
  // y += (nextDot.y - dot.y) * .6;

  // });
  // }

  // window.addEventListener("mousemove", function(event) {
  // //event.preventDefault();
  // mouse.x = event.pageX;
  // mouse.y = event.pageY;
  // });

  // // animate() calls draw() then recursively calls itself
  // // everytime the screen repaints via requestAnimationFrame().
  // function animate() {
  // draw();
  // requestAnimationFrame(animate);
  // }

  // // And get it started by calling animate().
  // animate();


  return (

    <div class="man-o">
      <div className='HersoSection'>
        <div class="typing-demo">
          Hi, my name is
        </div>
        <div class="Name">
          <span>T</span>
          <span>u</span>
          <span>s</span>
          <span>h</span>
          <span>a</span>
          <span>r</span>
          <span> </span>
          <span>K</span>
          <span>a</span>
          <span>r</span>
          <span>a</span>
          <span>n</span>
        </div>
        <div class="Text-intro">Frontend Developer</div>
        {/* <div  class="text-data">UI developer with a B.tech in Computer Engineering from Grapic Era University in Uttrakhand, specialized in Cloud Computing. At the moment, I'm employed at Tata Consultancy Services as a System Engineer</div> */}
        <h1 class="abc">
          <span>UI </span>
          <span> </span>
          <span>developer </span>
          <span>B.tech </span>
          <span> </span>
          <span>in </span>
          <span>Computer </span>
          <span>Engineering </span>
          <span>from </span>
          <span>Graphic, </span>
          <span>Era </span>
          <span>University </span>
          <span>in </span>
          <span>Uttrakhand </span>
          <span>,</span>
          <span>specialized </span>
          <span>in </span>
          <span>Cloud </span>
          <span>Computing. </span>
          <span>At</span>
          <span>the</span>
          <span>moment</span>
          <span>,</span>
          <span>I</span>
          <span>am</span>
          <span>employed</span>
          <span>at</span>
          <span>Tata</span>
          <span>Consultancy</span>
          <span>Services</span>
          <span>as</span>
          <span>a</span>
          <span>Frontend</span>
          <span>Developer</span>
        </h1>
        <a class="button-rotating" href="/contact">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Contact Me
        </a>
      </div>
    </div>

  );
}

export default HeroSection;
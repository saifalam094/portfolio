import React, { useRef } from 'react'
import {animate, motion} from "framer-motion";
import TypeWriter from 'typewriter-effect';
import {BsArrowUpRight, BsChevronDown} from "react-icons/bs";
import  Profile from '.././assets/profile.jpg';
const Home = () => {
  const clientCount=useRef(null)
  const clientProjectCount=useRef(null)
  const animationClientsCount=()=>{
    animate(0,100,{
      duration:1,
      onUpdate:(v)=>(clientCount.current.textContent=v.toFixed()),
    })
  }
  const animationProjectsCount=()=>{
    animate(0,200,{
      duration:1,
      onUpdate:(v)=>(clientProjectCount.current.textContent=v.toFixed()),
    })
  }
  const animations={
    h1:{
      initial:{
        x:"-100%",
        opacity:0,
      },
      whileInView:{
        x:0,
        opacity:1
      },
    },
    button:{
      initial:{
        y:"-100%",
        opacity:0,
      },
      whileInView:{
        y:0,
        opacity:1
      },
    }
  }
  return (
    <div id='home'>
<section>
  <div>
<motion.h1 {...animations.h1}>
Hi, I am <br/> Saif Alam
</motion.h1>
<TypeWriter options={{
  strings:["A Developer","A Designer","A Creator","Call at: <h2>+91 7903494097</h2>"],
  autoStart: true,
  loop:true,
  cursor:"",
  wrapperClassName:"typewriterpara"
}}/>
<div>
  <a href="mailto:saifalam.in094@gmail.com">Hire me </a>
  <a href="#work">Projects  <BsArrowUpRight/></a>
</div>
<article>
  <p>
  +<motion.span whileInView={animationClientsCount} ref={clientCount}>
  {clientCount.current?.textContent}
</motion.span>

  </p>
  <span>Clients Worldwide</span>
</article>
<aside>
<article>
  <p>
  +<motion.span whileInView={animationProjectsCount} ref={clientProjectCount}>
  {clientCount.current?.textContent}
</motion.span>
  </p>
  <span>Projects Done</span>
</article>
<article data-special >
  <p>
Contacts
  </p>
  <span>saif.alam@peopletech.com</span>
</article>
</aside>
  </div>
</section>
<section>
  <img src={Profile} alt="saif" />
</section>
<BsChevronDown/>
    </div>
  )
}

export default Home
import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Styles from '../styles/style.module.scss'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import FadeInWhenVisible from '../animations/fadeInVisi'
import StaggerWhenVisible from '../animations/staggerVisi'
import { motion, useAnimation } from "framer-motion";
import {stagger,delaystagger,fadein} from "../animations/animations_utils"
import Timeline from '../components/Timeline'
// import Image from 'next/image'
import Sound from '../components/Sound'

// import useSound from 'use-sound';

// import boopSfx from '../public/sounds/wooden.mp3';

//gsap
import React, { useEffect } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// import Cookies from 'universal-cookie';

// let visi = false
// const cookies = new Cookies();
// if(!cookies.get('visited')){
//   cookies.set('visited', 'yes', { path: '/' });
//   console.log('Cookie set')
// }
// else{
//   visi = true
//   console.log(cookies.get('visited'));
// }

// console.log(cookies.get('my')); // Pacman




export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

const m = 0;

export default function Home({ allPostsData }) {
  // console.log("hello",allPostsData)
  const animateFromTo = (elem, direction) => {
    const offset = 300;
    let x = 0;
    let y = direction * offset;

    direction = direction | 1;

    if (elem.classList.contains("slide_from_left")) {
      x = -offset;
      y = 0;
    } else if (elem.classList.contains("slide_from_right")) {
      x = offset;
      y = 0;
    } else if (elem.classList.contains("slide_from_top")){
      x = 0
      y = offset;
    }

    gsap.fromTo(
      elem,
      { xPercent: x, yPercent: y, autoAlpha: 0},
      {
        duration: 1.25,
        xPercent: 0,
        yPercent: 0,
        autoAlpha: 1,
        ease: "easeOut",
        overwrite: "auto",
      }
    );
  };

  const hide = (elem) => {
    gsap.set(elem, { autoAlpha: 0 });
  };

  useEffect(() => {
    // window.sessionStorage.setItem("hasAnimationPlayed", "true");
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray(".animate").forEach(function (elem) {
      hide(elem);

      ScrollTrigger.create({
        trigger: elem,
        once: true,
        start: "top 85%",
        end:"+=20",
        onEnter: function () {
          animateFromTo(elem);
        },
        onEnterBack: function () {
            animateFromTo(elem,-1);
        },
        // onLeave: function () {
        //   hide(elem);
        // },
      });
    });
  }, []);

  return (
    <div className={Styles.pad}>
    <motion.div exit={{opacity:0}} initial='initial' animate='animate'>  
    <div className = {Styles.big_container}>

        <div className = {Styles.navbar_container}>
          <motion.ul variants={delaystagger} className = {Styles.ul}>
            
            <motion.div variants={fadein}>
            <li className={Styles.navbar_items}>
              <a href="#first_work">work</a>
            </li>
            </motion.div>
            
            <motion.div variants={fadein}>
            <li className={Styles.navbar_items}>
              <a href='#research'>research</a>
            </li>
            </motion.div>
            <motion.div variants={fadein}>
            <li className={Styles.navbar_items}>about me</li>
            </motion.div>
            <motion.div variants={fadein}>
            <li className={Styles.navbar_items}>contact</li>
            </motion.div>
          </motion.ul>
        </div>
      <div className = {Styles.content_container}>
        <div className = {Styles.Intro_container}>
          <Head>
            <title>{siteTitle}</title>
            <link href="//db.onlinewebfonts.com/c/23c0fcab84d99da0de762de7e220a6e1?family=Europa" rel="stylesheet" type="text/css"/>
          </Head>
          <section className={`${utilStyles.heading2Xl} ${Styles.h2_intro}`}>
            <motion.div variants={stagger}>
            <motion.p variants={fadein}>Hi! I'm Akash. I'm an</motion.p >
            <motion.p variants={fadein}>entrepreneur, researcher </motion.p >
            <motion.p variants={fadein}> and an ML engineer. </motion.p >
            </motion.div>
            {/* <br></br>
            <p>I'm a Data Scientist</p> */}
            {/* <p>
              (This is a sample website - you’ll be building a site like this on{' '}
              <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
            </p> */}
          </section>
        </div>
        <div className={`animate slide_from_top ${Styles.p_header}`}>
          <div className={Styles.line}></div>
            <br></br>
            <br></br>
            <br></br>
            <p className={Styles.p_h_t}>MY WORK</p>
            <h2 className={Styles.experiences}>Experiences</h2> 
        </div>
      </div>
        {/* <Timeline items={itemsArray} /> */}
        
        {/* <div className={Styles.blog}> */}
          {/* <FadeInWhenVisible> */}
              {/* <ul className={utilStyles.list}> */}
              
                {allPostsData.map(({ description, img, title, id , dates}, idx) => ( 
                
                  // <li className={utilStyles.listItem} key={id}>
                  // <Link href={`/posts/${id}`} key={id}>
                  //   <a key={id}>{title}</a>
                  // </Link>
                  // <br />
                  // <small className={utilStyles.lightText} key={id}>
                  //   <Date dateString={date} />
                  // </small>
                  // </li>
               
                <div className={`${idx%2==0 ? Styles.left_project_wrap : Styles.right_project_wrap} ${idx==0 ? Styles.first_work:"nvm"}`} id={idx==0 ? "first_work":"nvm"}>
                    <div className={idx%2==0 ? Styles.left_project_headline : Styles.right_project_headline}>
                      <Link href={`/posts/${id}`}>
                        <a>
                      <h3 className={`animate ${idx%2==0 ? "slide_from_top" : "slide_from_top"}`}>{title}</h3>
                        </a>
                      </Link>
                    </div>
                    <div className={idx%2==0 ? Styles.left_line_container : Styles.right_line_container}>
                      <div className={`animate ${Styles.line} ${idx%2==0 ? "slide_from_left" : "slide_from_right"}`}></div>
                    </div>
                    <Link href={`/posts/${id}`}>
                    <div className={idx%2==0 ? Styles.left_project_pic : Styles.right_project_pic}>
                      <img
                        src={img}
                        className={`animate ${idx%2==0 ? "slide_from_right" : "slide_from_left"}`}
                      />
                    </div>
                    </Link>
                    <div className={idx%2==0 ? Styles.left_project_text : Styles.right_project_text}>
                      <p className={`animate ${idx%2==0 ? "slide_from_left" : "slide_from_right"}`}>{description}</p>
                      <br/>
                    </div>
                    <div className={idx%2==0 ? Styles.read_more_left : Styles.read_more_right}>
                    <div className={` ${Styles.dates} animate ${idx%2==0 ? "slide_from_left" : "slide_from_right"}`}>{dates}</div>
                    <Link href={`/posts/${id}`}>
                      <div className={`animate ${idx%2==0 ? "slide_from_left" : "slide_from_right"}`}>
                      <Sound>Read More →</Sound>
                      </div>
                    </Link>
                    </div>

                  </div>
                ))}

              {/* </ul> */}
          {/* </FadeInWhenVisible> */}
        {/* </div> */}

        <div className={`animate slide_from_top ${Styles.research_wrap}`} id="research">
          <div className={Styles.p_header}>
            <div className={Styles.line2}></div>
            <br></br>
            <h2 className={Styles.experiences}>Research</h2> 
          </div>
          <p className={Styles.subheading}><i>Publications</i></p>
          <br></br>
          <div className={Styles.research_container}>
            <div className={Styles.research_item}>
              <ul>
                <a href="https://arxiv.org/abs/2103.12505" target="_blank">
                <li>Towards an Open Global Air Quality Monitoring Platform to Assess Children's Exposure to Air Pollutants in the Light of COVID-19 Lockdowns,
                  {/* <i> Christina Last, Prithviraj Praminik, Nikita Saini, Akash Smaran Majety, Do-Hyung Kim, Manuel García-Herranz, Subhabrata Majumdar</i> */}
                  <b> 2021 CHI Conference on Human Factors in Computing Systems</b>
                </li>
                {/* <embed src="./public/pdf/chi2021.pdf" type="application/pdf" width="100%" height="600px" /> */}
                </a>
                <a href="https://www.researchgate.net/publication/335857545_Investor_Risk_Tolerance" target="_blank">
                <li>Investor Risk Tolerance,
                  <i> Aditya Singh, Akash Smaran Majety*, Kanumuru Vikranth Reddy, Rajkumar R</i>
                </li>
                </a>
              </ul>
            </div>
          </div>
          <br></br>
          <p className={Styles.subheading}><i>Labs</i></p>
          <br></br>
          <ul>
            <a href="https://penglab.weill.cornell.edu/" target="_blank">
              <li> Peng Lab, Weill Cornell Medicine, New York, NY, USA.
                <i> (Natural Language Processing, Biomedical Text Data)</i> 
              </li>
            </a>
            <li>Innovation Lab, Vellore Institute of Technology, Vellore, India. 
                <i> (Computer Vision, Robotics)</i> 
            </li>
            <br />
          </ul>
        </div>
        
    
    </div>
    
    </motion.div>
    </div>
   
  )
}
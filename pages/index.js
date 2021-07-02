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
import Image from 'next/image'

//gsap
import React, { useEffect } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
  
const itemsArray = [
  {
    "title": "Humaine Technologies",
    "description": "Humaine is a conversational AI platform that generates virtual patients for the use and deliberate practice of medical students in both high and low resource settings. Students login online or via a smartphone app to access virtual patients with varying medical conditions, and practice with these patients at will.",
    "img": "/images/humaine1.png",
  },
  {
    "title": "UNICEF",
    "description": "Humaine is a conversational AI platform that generates virtual patients for the use and deliberate practice of medical students in both high and low resource settings. Students login online or via a smartphone app to access virtual patients with varying medical conditions, and practice with these patients at will.",
    "img": "/images/unicef.png",
  },
  {
    "title": "Alfaleus",
    "description": "Humaine is a conversational AI platform that generates virtual patients for the use and deliberate practice of medical students in both high and low resource settings. Students login online or via a smartphone app to access virtual patients with varying medical conditions, and practice with these patients at will.",
    "img": "/images/alfaleus.png",
  }
];

const m = 0;

export default function Home({ allPostsData }) {
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
    <motion.div exit={{opacity:0}} initial='initial' animate='animate'>
    <div className = {Styles.big_container}>
      <div className = {Styles.navbar_container}>
        <motion.ul variants={delaystagger} className = {Styles.ul}>
          <motion.div variants={fadein}>
          <li className={Styles.navbar_items}>projects</li>
          </motion.div>
          <motion.div variants={fadein}>
          <li className={Styles.navbar_items}>blogs</li>
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
          </Head>
          <section className={`${utilStyles.heading2Xl} ${Styles.h2_intro}`}>
            <motion.div variants={stagger}>
            <motion.p variants={fadein}>Hi! I am Akash Majety.</motion.p >
            <motion.p variants={fadein}> I am currently a Master's</motion.p >
            <motion.p variants={fadein}> student at Cornell Tech</motion.p >
            </motion.div>
            {/* <br></br>
            <p>I'm a Data Scientist</p> */}
            {/* <p>
              (This is a sample website - you’ll be building a site like this on{' '}
              <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
            </p> */}
          </section>
        </div>
        
        <FadeInWhenVisible>
          <div className={Styles.line}></div>
          <br></br>
          <br></br>
          <br></br>
          <p className={utilStyles.headingLg}>HERE ARE MY </p>
          <h2 className={Styles.experiences}>Experiences</h2> 
        </FadeInWhenVisible>
        </div>
        {/* <Timeline items={itemsArray} /> */}
        
        {/* <div className={Styles.blog}> */}
          {/* <FadeInWhenVisible> */}
              {/* <ul className={utilStyles.list}> */}
              
                {itemsArray.map(({ description, img, title }, idx) => ( 
                
                  // <li className={utilStyles.listItem} key={id}>
                  // <Link href={`/posts/${id}`} key={id}>
                  //   <a key={id}>{title}</a>
                  // </Link>
                  // <br />
                  // <small className={utilStyles.lightText} key={id}>
                  //   <Date dateString={date} />
                  // </small>
                  // </li>
                  <div className={idx%2==0 ? Styles.left_project_wrap : Styles.right_project_wrap}>
                    <div className={idx%2==0 ? Styles.left_project_headline : Styles.right_project_headline}>
                      <h3 className={`animate ${idx%2==0 ? "slide_from_top" : "slide_from_top"}`}>{title}</h3>
                    </div>
                    <div className={idx%2==0 ? Styles.left_line_container : Styles.right_line_container}>
                      <div className={`animate ${Styles.line} ${idx%2==0 ? "slide_from_left" : "slide_from_right"}`}></div>
                    </div>
                    <div className={idx%2==0 ? Styles.left_project_pic : Styles.right_project_pic}>
                      <img
                        src={img}
                        className={`animate ${idx%2==0 ? "slide_from_right" : "slide_from_left"}`}
                      />
                    </div>
                    <div className={idx%2==0 ? Styles.left_project_text : Styles.right_project_text}>
                      <p className={`animate ${idx%2==0 ? "slide_from_left" : "slide_from_right"}`}>{description}</p>
                    </div>
                  </div>
                ))}

              {/* </ul> */}
          {/* </FadeInWhenVisible> */}
        {/* </div> */}
      
    </div>
    </motion.div>
  )
}
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

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData }) {
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
      </FadeInWhenVisible>
      
        <div className={Styles.blog}>
          
          
            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
              {/* <h2 className={utilStyles.headingLg}>Blog</h2> */}
              <ul className={utilStyles.list}>
              
                {allPostsData.map(({ id, date, title }) => ( 
                  <FadeInWhenVisible>
                  <li className={utilStyles.listItem} key={id}>
                  <Link href={`/posts/${id}`} key={id}>
                    <a key={id}>{title}</a>
                  </Link>
                  <br />
                  <small className={utilStyles.lightText} key={id}>
                    <Date dateString={date} />
                  </small>
                  </li>

                  </FadeInWhenVisible>
                ))}
              </ul>
            </section>
        </div>
      </div>
    </div>
    </motion.div>
  )
}
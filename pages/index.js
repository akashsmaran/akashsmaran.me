import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Styles from '../styles/style.module.scss'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'

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
    <div className = {Styles.big_container}>
      <div className = {Styles.navbar_container}>
        <ul className = {Styles.ul}>
          <li className={Styles.navbar_items}>projects</li>
          <li className={Styles.navbar_items}>blogs</li>
          <li className={Styles.navbar_items}>about me</li>
          <li className={Styles.navbar_items}>contact</li>
        </ul>
      </div>
      <div className = {Styles.content_container}>
      <div className = {Styles.Intro_container}>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <section className={`${utilStyles.heading2Xl} ${Styles.h2_intro}`}>
          <p>Graphic Designer that does work in interactive design and paint</p>
          {/* <br></br>
          <p>I'm a Data Scientist</p> */}
          {/* <p>
            (This is a sample website - you’ll be building a site like this on{' '}
            <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
          </p> */}
        </section>
      </div>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          {/* <h2 className={utilStyles.headingLg}>Blog</h2> */}
          <ul className={utilStyles.list}>
            {allPostsData.map(({ id, date, title }) => (
              <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
            ))}
          </ul>
        </section>
        </div>
    </div>
  )
}
import React from 'react'

import Layout from '../components/layout'
import Head from '../components/head'

import chefAbout from '../images/chefAbout.jpg'
import signature from '../images/signature.png'

import layoutStyles from './about.module.scss'


const About = () => {
    return (
       <Layout>
          <Head title="About" />
         <div className={layoutStyles.intro}>
           <div className={layoutStyles.leftIntro}><img src={chefAbout} alt="Adam Batista" /></div>
           <div className={layoutStyles.rightIntro}>
              <p><span>ADAM BATISTA</span> is a world-renowned chef, writer, and author of the New York Times bestseller <span>"In The Moment"</span> as well as the regular best-seller, <span>"Dining In”</span>.</p> <p>In <span>exclusive content</span> here, Adam shares personal parts of his life, his relationship with food and art, and of cause recipes.</p>
            <div><img src={signature} alt="" /></div>
            </div>   
         </div>
       </Layout>
    )
 }

 export default About
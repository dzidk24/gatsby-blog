import React from 'react'
import Layout from '../components/layout'
import Head from '../components/head'

import rightPic from '../images/chef.jpg'
import leftIntro from '../images/introText.gif'
import bookPic from '../images/inTheMoment.jpg'

import layoutStyles from './home.module.scss'

const IndexPage = () => {
   return (
      <Layout>
         <Head title="Home"/>
         <div className={layoutStyles.intro}>
           <div className={layoutStyles.leftIntro}><img src={leftIntro} alt="message" /></div>
           <div className={layoutStyles.rightPic}><img src={rightPic} alt="chef" /></div>   
         </div>

         <div className={layoutStyles.introTwo}>
            <div className={layoutStyles.introTwoLeft}>
                <div className={layoutStyles.hello}>HELLO,</div>
                <div className={layoutStyles.guys}>I'm Adam</div>
            </div>
            <div className={layoutStyles.introTwoRight}>Welcome to my blog. This is an intimate place where you will see me in my element, experience my life behind the camera, and travel the world with me as I find inspiration for new recipes.  </div>
         </div>

         <div className={layoutStyles.introThree}>
            <div className={layoutStyles.bookWrapper}>
            <div className={layoutStyles.book}><img src={bookPic} alt="in The Moment" /></div>
            <div className={layoutStyles.bookNotes}><div><span>"In The Moment"</span> is filled with simple recipes inspired by various cultures around the globe. These recipes will give you something different, take you away from your home and invoke emotions that will create special moments for you and your loved ones. Available in most book stores. </div></div>
            </div>
         </div>
      </Layout>
   )
}

export default IndexPage

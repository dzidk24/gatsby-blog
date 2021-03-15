import React from 'react'

import Layout from '../components/layout'
import Head from '../components/head'
import layoutStyles from './contact.module.scss'


import contactImage from '../images/contact.jpg'

const Contact = () => {
    return (
       <Layout>
          <Head title="Contact" />
          <div className={layoutStyles.intro}>
           <div className={layoutStyles.leftIntro}>
              <h1>say hello!</h1>
              <div className={layoutStyles.bookings}>
                 <h2>PRESS/BOOKINGS</h2>
                 <p className={layoutStyles.paragraph}>adambaptist@mosaicla.com</p>
              </div>
              <div className={layoutStyles.photoCredit}>
                 <h2>PHOTO CREDIT</h2>
                 <p className={layoutStyles.paragraph}>all images Nishant Aneja + cottonbro</p>
                 <p className={layoutStyles.paragraph}>via pexels.com</p>
               </div>
              <div className={layoutStyles.webDesign}>
                 <h2>WEB DESIGN</h2>
                 <p className={layoutStyles.paragraph}>edward gbeddy</p>
               </div>
              
           </div>
           <div className={layoutStyles.rightIntro}><img src={contactImage} alt="" /></div>
              
         </div>
       </Layout>
    )
 }

 export default Contact
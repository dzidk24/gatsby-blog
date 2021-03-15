import React from 'react'

import facebook from '../images/facebook.png'
import instagram from '../images/instagram.png'
import twitter from '../images/twitter.png'
import youtube from '../images/youtube.png'

import layoutStyles from './footer.module.scss'

const Footer = () => {
    return (
       <footer>
         
           <div className={layoutStyles.iconListWrapper}>
             <div className={layoutStyles.icon}><a href="https://en-gb.facebook.com/" target="_blank" rel="noreferrer"><img src={facebook} alt="facebook" /></a></div>
             <div className={layoutStyles.icon}><a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><img src={instagram} alt="instagram" /></a></div>
             <div className={layoutStyles.icon}><a href="https://twitter.com/" target="_blank" rel="noreferrer"><img src={twitter} alt="twitter" /></a></div>
             <div className={layoutStyles.icon}> <a href="https://www.youtube.com/" target="_blank" rel="noreferrer"><img src={youtube} alt="youtube" /></a></div>                
             
           </div>
           <p className={layoutStyles.copyright}>Created by Edward Gbeddy, copyright 2020</p>
       
       </footer>
    )
 }

 export default Footer
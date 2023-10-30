import React from 'react'
import "../Component/Home.css"
import { BiLogoFacebookCircle } from "react-icons/bi";
import { AiFillTwitterCircle,AiOutlineYoutube,AiOutlineInstagram,AiOutlineMail } from "react-icons/ai";

import { BsTelephone } from "react-icons/bs";
import online from "../images/online.webp"
import war from "../images/whoAreWe.webp"
import ofline from "../images/ofline.webp"


const Home = () => {

let email="foreverdanceacademy@gmail.com";



  return (
    // <div id="div">Home</div>
    <div>
      {/* sections one with quote start */ }
      <section className='home' id='home'>
        <div className='content'>
          <h3>WELCOME </h3>
          <h4><i>TO</i> </h4>
          <h3>FOREVER DANCE ACADEMY</h3>
          <h1 id="quote"><i>Dance is the hidden language of the soul</i></h1>
        </div>

      </section>
      {/* /*sections one with quote end */ }

      {/* About us starts */}


      <section className='about' id='about'>
        <h1 className='heading'><span>About </span>Us</h1>
        <div className='row'>
          <div className='image'>
            <img src={war} alt="" />
          </div >
          <div className='content'>
            <h3>WHO ARE WE ?</h3>
            <p>The Terence Lewis Contemporary Dance
               Company (voted India’s Number 1 dance 
               company) and the Terence Lewis Professional
                Training Institute are widely-acknowledged 
                as the country’s most popular and reputed
                 dance organisations. 
                 </p><p>
                 Together with theTerence Lewis Dance Scholarship Foundation
                  Trust, they make up the TL brand, whichfosters creative excellence in the talented,
                    enthusiastic dancer, raising the standards of dance in India and beyond.
                    </p><p>
                    Learn about our various courses both online and in the 
                     studio and pick the perfect course for you.</p>
          </div>
        </div>
      
      </section>
       {/* About us ends*/}

{/* Our Course start */}
<section className='ourcourse'>
  <div className='content'>
  <h1>OUR COURSE</h1>
  <h3>Learn about our various course and pick the one <b><span id='red'>PERFECT</span> for <span id='yellow'>YOU</span></b></h3>
  
  </div>
  <div className="row" id='roe1'>
    <div className='box' id='img1'><img src={online} alt="" /></div>
    <div className='box'id='img1'><img src={ofline} alt="" /></div>
  </div>
</section>

{/* Our Course End */}


      {/* MyServices Start */}


      <div>

      </div>
      {/* MyServices Ends */}


      



      {/* footerStart */}
      <footer className='footer'>
        <div className='footer1'>
        <div>
          <span >Social Medias</span>
        </div>
        <div className='media-icons'>
          <a href="https://www.facebook.com/bindhu.s.1428"><BiLogoFacebookCircle  className='media facebook' /></a>
          <a href="/"><AiFillTwitterCircle className='media twitter'/></a>
          <a href="/"><AiOutlineInstagram className='media insta'/></a>
          <a href="https://lbb.in/bangalore/dance-schools-bangalore/"><AiOutlineYoutube className='media youtube'/></a> 


        </div>
        </div>
        <div className='footer2'>
          <div className='subfooter2 Branches'>
            <h6>About</h6>
            <h6>School</h6>
            <h6>Support</h6>
            <h6>Watch</h6>
          </div>
          <div className='subfooter2 courses'>
            <h6>What's on</h6>
            <h6>Cookies</h6>
            <h6>Performance</h6>
            <h6>Terms and Conditions</h6>
            
          </div>
          <div className='subfooter2 Academies'>
            <h6>Gellery</h6>
            <h6>Innovation</h6>
            <h6>Privacy Policy</h6>
            <h6>Help</h6>
          </div>
          <div className='subfooter2 Academies'>
          <h5>Contact us</h5>
<h6><BsTelephone/>: 797504347/9535921101</h6>
<a href={`mailto:${email}`}><h6><AiOutlineMail/>: foreverdanceacademy@gmail.com</h6></a>
          
          </div>
        </div>
        
        <div className='footer3'>
        <h4><i>@2023 Forever Dance Academy Company.All Rights Reversed</i></h4>
           
        </div>
      </footer>
      {/* footerEnds */}
    </div>
  )
}

export default Home
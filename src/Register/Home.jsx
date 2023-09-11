// import React from 'react'
// import "../Component/Home.css"
// import img1 from "../images/onep1.jpeg"
// import b2 from "../images/b3.jpeg"
// import ba2 from "../images/ballet1.webp"
// import h1 from "../images/h1.jpeg"
// import k1 from "../images/k3.jpeg"
// import be from "../images/be1.jpeg"
// import i1 from "../images/IN1.jpeg"
// import i2 from "../images/inv3.jpeg"
// import i3 from "../images/INV2.jpeg"
// const Home = () => {
//   return (
// <>
//     <header>
//       <div className='header-content'>
//       <h2> Welcome To  </h2>
//       <h1>Forever Dance Academy</h1>
//       <h2>Dance is the hidden language of the soul</h2>
//       <div className='line'></div>
//       </div>
//     </header>

//     {/* Events */}

//     <section>
// <div class="title">
//   <h1>UPCOMING EVENTS</h1>
//   {/* <div className='line'></div> */}
// </div >
// <div className='row'>
//   <div className='col'><img src={i1} alt=""  height={400}/>
//   <h4>international school compitation</h4>
//   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, deleniti?</p>
 
//   </div>
//   <div className='col'><img src={i2} alt="" />
//   <h4>compitation</h4>
//   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, deleniti?</p>
 
//   </div>
//   <div className='col'><img src={i3} alt="" />
//   <h4>compitation</h4>
//   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, deleniti?</p>
 
//   </div>
// </div>
// </section>


















// {/* section3 */}
    
//     <section id='explore'>
//     <div><img src={img1} alt="" /></div>
//     </section>


// {/* <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
//   <div class="carousel-indicators">
//     <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
//     <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
//     <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
//   </div>
//   <div className="carousel-inner">
//     <div className="carousel-item active">
//       <img src={img1} className="d-block w-100" alt="..."/>
//       <div className="carousel-caption d-none d-md-block">
//         <h5>First slide label</h5>
//         <p>Some representative placeholder content for the first slide.</p>
//       </div>
//     </div>
//     <div className="carousel-item">
//       <img src={img1} className="d-block w-100" alt="..."/>
//       <div className="carousel-caption d-none d-md-block">
//         <h5>Second slide label</h5>
//         <p>Some representative placeholder content for the second slide.</p>
//       </div>
//     </div>
//     <div className="carousel-item">
//       <img src={img1} className="d-block w-100" alt="..."/>
//       <div className="carousel-caption d-none d-md-block">
//         <h5>Third slide label</h5>
//         <p>Some representative placeholder content for the third slide.</p>
//       </div>
//     </div>
//   </div>
//   <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
//     <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//     <span className="visually-hidden">Previous</span>
//   </button>
//   <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
//     <span className="carousel-control-next-icon" aria-hidden="true"></span>
//     <span className="visually-hidden">Next</span>
//   </button>
// </div>


//  */}









//     {/* section4 */}
// <section id="type4">  
// <div className='diffdance' >
//   <div className='imag4' ><img id='img4' src={h1} alt="" /></div>
//   <div className='imag4'><h2>Hip-Hop</h2><p>Hip-hop dance is a vibrant form of dance that combines a variety of freestyle movements to create a cultural piece of art. Through its three main styles of popping, locking, and breaking, hip-hop dance has evolved into one of the most popular and influential styles of dance.</p></div>
// </div>


// <div className='diffdance' >
// <div className='imag4'><h2>Ballet</h2><p>Ballet traces its origins to the Italian Renaissance, when it was developed as a court entertainment. During the 15th and 16th centuries the dance technique became formalized. The epicentre of the art moved to France following the marriage of the Italian-born aristocrat Catherine de Médicis to Henry II of France.</p></div>
//   <div className='imag4' ><img  id='img4' src={ba2} alt="" /></div>
//   </div>

// <div className='diffdance' >
//   <div className='imag4'  ><img id='img4' src={k1} alt="" /></div>
//   <div className='imag4'><h2>heading</h2><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam, praesentium?</p></div>
// </div>

// <div className='diffdance' >
// <div className='imag4'><h2>heading</h2><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam, praesentium?</p></div>
//   <div className='imag4' ><img id='img4' src={b2} alt="" /></div>
//   </div>

// <div className='diffdance' >
//   <div className='imag4' ><img id='img4' src={be} alt="" /></div>
//   <div className='imag4'><h2>heading</h2><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam, praesentium?</p></div>
// </div>



// </section>

// </>
//   )
// }

// export default Home
//******************************NEW HOME PAGE************************************************* */
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
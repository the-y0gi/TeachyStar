import React from 'react';
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../assest/6 (1).jpg";
import img2 from "../assest/6 (2).jpg";
import img3 from "../assest/6 (3).jpg";
import img4 from "../assest/6 (4).jpg";
import img5 from "../assest/6 (5).jpg";


const Services = () => {
  return (
    <div className="services">

        <Carousel 
        infiniteLoop 
        autoPlay 
        showStatus={false} 
        showArrows= {false}
        showThumbs={false}
        interval={1000}>
            <div>
                <img src={img1} alt="Item1" />
                <p className='legend'>Full Stack</p>
            </div>

            <div>
                <img src={img2} alt="Item2" />
                <p className='legend'>Peer to Peer Support</p>
            </div>
            <div>
                <img src={img3} alt="Item2" />
                <p className='legend'>Peer to Peer Support</p>
            </div>
            <div>
                <img src={img4} alt="Item2" />
                <p className='legend'>Peer to Peer Support</p>
            </div>
            <div>
                <img src={img5} alt="Item2" />
                <p className='legend'>Peer to Peer Support</p>
            </div>
        </Carousel>

    </div>
  )
}

export default Services
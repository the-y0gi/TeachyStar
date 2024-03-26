import React from 'react'
import png from "../assest/6(7).png"
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle, 
  AiFillYoutube,
  AiFillInstagram,
}  from "react-icons/ai";
const Home = () => {
  return (

    <>
    <div className="home">
        <main>
            <h1>TechyStar</h1>
            <p>Solution of your All Problem.</p>
        </main>
    </div>

    <div className="home2">
      <img src={png} alt="PNG" />

      <div>
        <p>
          We are your one and only solution to the teach Problem
          you face
          every day. We are leading tech company whose aim is to
          increase the 
          problem solving ability in children.
          
        </p>
      </div>
    </div>

    <div className="home3" id="About">
      <div>
        <h1>Who we are?</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum illum itaque exercitationem aliquam sequi beatae, ipsam dolorem dolor quia delectus nobis totam impedit tempore rem deserunt odit enim eos reiciendis fuga, facere soluta nesciunt ea praesentium similique? Quisquam, aut quo doloremque iste minus vitae est corrupti. Deserunt voluptates eos maiores optio quidem sunt maxime sint aliquam obcaecati, aliquid ab consequuntur, similique vitae vel repellendus! Voluptatum, illum. Quae velit iusto soluta et. Fuga placeat quos inventore cupiditate ullam quia ut, aliquid repellendus beatae ducimus, doloribus nulla nemo quis veritatis! Ipsam consectetur facere laboriosam odio eius nulla labore tenetur? Quod, debitis exercitationem?</p>
      </div>
    </div>

    <div className="home4" id="Brands">
      <div>
        <h1>Brands</h1>

        <article>
          <div
          style={{
            animationDelay: "0.3s",
          }}
          >
            <AiFillGoogleCircle/>
            <p>Google</p>
          </div>
          
          <div
          style={{
            animationDelay: "0.5s",
          }}
          >
            <AiFillAmazonCircle/>
            <p>Amazon</p>
          </div>

          <div
          style={{
            animationDelay: "0.7s",
          }}
          >
            <AiFillYoutube/>
            <p>Youtube</p>
          </div>

          <div
          style={{
            animationDelay: "1s",
          }}
          >
            <AiFillInstagram/>
            <p>Instagram</p>
          </div>
        </article>
      </div>
    </div>
    </>

  )
}

export default Home;
import React from "react";
import { BrowserRouter as Router , Routes, Route } from "react-router-dom";
import Header from './component/Header';
import Home from "./component/Home";
import Footer from "./component/Footer";
import Contact from "./component/Contact";
import Services from "./component/Services";

import "./style/App.css";
import "./style/header.css";
import "./style/home.css";
import "./style/footer.css";
import "./style/contact.css";
import "./style/mediaquery.css"




export const App = () => {
  return (
    <Router>

      <Header/>

      <Routes>

        <Route path="/" element = {<Home/>} />
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/services" element = {<Services/>} />

      </Routes>

      <Footer/>

    </Router>
    
    
  );
}

export default App;
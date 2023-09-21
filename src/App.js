import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import { Carrousel } from './Components/Carrousel';
import React, { useRef, useState,useEffect } from "react";

import { Bio } from './Components/Bio';

import { Home } from './Components/Home';
import {
  
  Routes,
  Route,

} from "react-router-dom";
import Navbar from './Components/Navbar';
import Contact from './Components/Contact';
import Portfolio from './Components/Portfolio';
import { NavMobile } from './Components/NavMobile';
import { Footer } from './Components/Footer';
import {Gallery} from './Components/ImageGallery';

function App() {
  const [landscape,setLandscape] = React.useState(window.matchMedia("(min-width: 770px)").matches)
  React.useEffect(()=>{

    const detectarLandscape = () => setLandscape((window.matchMedia("(min-width: 770px)").matches)
    )
    window.addEventListener('resize',detectarLandscape)
  })
  //import AOS from 'aos';
// import 'aos/dist/aos.css';
    // useEffect(() => {
    //   AOS.init();
    //   AOS.refresh();
    // }, []);
   return (
   
    <ChakraProvider>  
     
      {landscape?<Navbar/>:<NavMobile/>}
   
            
              <Routes> 
            <Route path="/" element={ <Home />} />
             <Route path="/about" element={<Bio/>}/>
              <Route path="/gallery" element={<Carrousel />}/>
              <Route path="/contact" element={<Contact />}/>
              <Route path="/portfolio" element={<Portfolio />}/>
              <Route path="/gallery" element={<Gallery />}/>

         
         </Routes>
   
         <Footer/>
      
    </ChakraProvider>
  );
}

export default App;

import './App.css';
import {Box,Image, Grid,GridItem,Flex,Text} from '@chakra-ui/react'
import { ChakraProvider } from '@chakra-ui/react'
import { FaBeer } from 'react-icons/fa';
import { Carrousel } from './Components/Carrousel';
import React, { useRef, useState,useEffect } from "react";
import {motion} from 'framer-motion'
import soraBio from './img/biosora.jpg'
import vacanza from './img/vacanza.jpg'
import { Bio } from './Components/Bio';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Home } from './Components/Home';
import {
  
  Routes,
  Route,

} from "react-router-dom";
import Navbar from './Components/Navbar';
import Contact from './Components/Contact';
import Portfolio from './Components/Portfolio';
import ArticleItem from './Components/Article';

function App() {
  
  
    useEffect(() => {
      AOS.init();
      AOS.refresh();
    }, []);
   return (
   
    <ChakraProvider>  
      <Navbar/>
      {/* <Bio/>
      <Carrousel/>
      <Flex data-aos="fade-up-right"marginBottom='20rem'>
                 <Flex >
                  <Box>hola</Box>
                  <Box>aa</Box>
                  <Box>ss</Box>
                 </Flex>
                 <Flex>
                  <Box></Box>
                 </Flex>
              </Flex>
      <Flex justifyContent='center' flexWrap='wrap' w='100vw' h='100vh'>
      <Grid
          w='60%'
          h={['50%','50%','10%','10%']}
          templateRows={[  'repeat(10, 1fr)','repeat(10, 1fr)' ,'repeat(1, 1fr)','repeat(1, 1fr)']}
          templateColumns={['repeat(1, 1fr)','repeat(1, 1fr)','repeat(4, 1fr)','repeat(4, 1fr)']}
          gap={4}
           marginTop='4rem' marginBottom='4rem'  >       
          <GridItem colSpan={[1,1,1,1]} rowSpan={[9,9,1,1]} h='100%'  objectFit={['cover','cover','cover','cover']}  > 
          <Image src={vacanza} boxSize={['100%','100%','100%','100%']}   objectFit={['cover','cover','cover','cover']} objectPosition='top'></Image>
          </GridItem>

          <GridItem colSpan={[1,1,3,3]} rowSpan={[1,1,1,1]} h='100%'  >
            <Grid  templateRows={['repeat(2, 1fr)','repeat(2, 1fr)','repeat(8, 1fr)','repeat(8, 1fr)']} padding='1rem'>
              <GridItem rowSpan={1}><Text as='h2' fontSize='lg'>Versace x Dua Lipa 'La Vacanza' Resort 2024 Show Cannes</Text></GridItem>
              <GridItem rowSpan={1}> <Text as='p' marginBottom='0rem'>05/23/2023</Text> </GridItem>
              <GridItem display={['none','none','inline','inline']} rowSpan={['none','none',5,5]}></GridItem>

            </Grid>
          </GridItem>
              </Grid>
              <Grid
          w='60%'
          h={['80vh','80vh','30vh','30vh']}
          templateRows={[  'repeat(10, 1fr)','repeat(10, 1fr)' ,'repeat(1, 1fr)','repeat(1, 1fr)']}
          templateColumns={['repeat(1, 1fr)','repeat(1, 1fr)','repeat(4, 1fr)','repeat(4, 1fr)']}
          gap={4}
           marginTop='4rem' marginBottom='4rem' >       
          <GridItem colSpan={[1,1,1,1]} rowSpan={[9,9,1,1]} h={['inherit','inherit','inherit','inherit']}   > 
          <Image src={vacanza} boxSize={['100%','100%','100%','100%']} p={['3rem','3rem','0','0']}  objectFit={['cover','cover','cover','cover']} objectPosition='top' ></Image>
          </GridItem>

          <GridItem colSpan={[1,1,3,3]} rowSpan={[1,1,1,1]} bg='tomato' >
            <Flex>

                </Flex>
          </GridItem>
              </Grid>
            
              </Flex> */}

            
              <Routes> 
            <Route path="/" element={ <Home />} />
             <Route path="/about" element={<Bio/>}/>
              <Route path="/gallery" element={<Carrousel />}/>
              <Route path="/contact" element={<Contact />}/>
              <Route path="/portfolio" element={<Portfolio />}/>

         
         </Routes>

    </ChakraProvider>
  );
}

export default App;

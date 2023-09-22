import React, { useRef, useState,useEffect } from 'react';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import "../Components/const/swipper.css"
import {useParams} from 'react-router-dom'
import {Box,Flex} from '@chakra-ui/react'
import {AiOutlineArrowLeft} from "react-icons/ai";
import {Link} from 'react-router-dom'

export const Gallery = ({prop}) => {  
    const [landscape,setLandscape] = React.useState(window.matchMedia("(min-width: 770px)").matches)
    React.useEffect(()=>{
  
      const detectarLandscape = () => setLandscape((window.matchMedia("(min-width: 770px)").matches)
      )
      window.addEventListener('resize',detectarLandscape)
    })
    const {id} = useParams()
    const images = [
      "https://picsum.photos/200/300?image=1050",
      "https://picsum.photos/300/300?image=206",
      "https://picsum.photos/100/300?image=206",
      "https://picsum.photos/150/300?image=206",

  ]
 console.log(prop[id].item)
  return (
 
 <Box position='relative' minHeight='100vh' display='flex' flexDirection='column' alignItems='center' alignContent='center' >
    <Flex w='90%' justifyContent='flex-start' m='1rem'> 
        <Link to='/portfolio'>
        <AiOutlineArrowLeft size={30} className='iconn'/></Link>
        </Flex>
        <Flex w='90%'>
<Masonry columnsCount={landscape? 3: 2} gutter="20px">
                {prop[id].item.map((image, i) => (
                    <img
                        key={i}
                        src={image.url}
                        style={{width: "100%", display: "block"}}
                    />
                ))}
            </Masonry></Flex>
          </Box>
  
  )
}


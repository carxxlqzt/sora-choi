import React from 'react'
import {Link} from 'react-router-dom'
import {Flex,Button,Box} from '@chakra-ui/react'
import { NavLinks } from './const/Navlinks'
const Navbar = () => {
  return (
   <Flex justifyContent='center'>
    <Flex flexDirection='row' justifyContent='end' w='80vw' borderBottom='1px solid' borderColor='whiteAlpha.500'>
        <Box    marginBottom='0.3rem'>
        {NavLinks.map((item,index)=>{
            return(
             <Link to={'/'+ item.url} key={index} >     
            <Button size='xs' p='1rem' colorScheme='whiteAlpha'  fontFamily='Roboto, sans-serif' variant='ghost' key={item.id} > {item.name} 
                    
                  
                   </Button > </Link>)}) 
    }
          </Box>
          
     
    </Flex></Flex>
  )
}

export default Navbar
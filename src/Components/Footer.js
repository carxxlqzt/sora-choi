import React from 'react'
import {Box,Flex,Text} from '@chakra-ui/react'
import {BsLinkedin,BsFacebook,BsGithub} from 'react-icons/bs'

export const Footer = () => {
  return (
    <Box  w='100vw' minH='6vh' display='flex' bgColor='#141414' justifyContent='center' paddingTop='1rem' paddingBottom='1rem' position='relative'   >
<Box    h='70%' display='flex' flexDirection={['column','column','row','row','row']} justifyContent='center' alignItems='center' position='relative'>
   <Text color='white' fontSize='11px' marginBottom='0'  >Created by Loquizta</Text>
   <Text color='white' marginLeft='3rem' fontSize='11px' marginBottom='0' > If you are interesed in my designs please contact me </Text>
   <Flex flexDirection='row' width='70px' height='1rem' marginLeft='1rem' marginTop={['0.5rem','0.5rem','0rem','0rem','0rem']} justifyContent='space-around' alignItems='center'>
               <a href='https://www.linkedin.com/in/carolina-meneces'> <BsLinkedin   fontSize='11px' color='white'/></a>
               <a href='https://www.facebook.com/profile.php?id=100079221933052'> <BsFacebook  fontSize='11px' color='white'/></a>
               <a href='https://www.github.com/carxxlqzt'> <BsGithub fontSize='11px' color='white'/></a>
                </Flex>  
</Box> </Box>
 )
}

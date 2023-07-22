import React from 'react'
import {Box,Flex,Text} from '@chakra-ui/react'
import {BsLinkedin,BsFacebook,BsGithub} from 'react-icons/bs'

export const Footer = () => {
  return (
<Box marginLeft='1rem' w='100vw' h='3vh' bg='#141414' marginTop='2rem' >
   <Text color='white' fontSize='9px' m='0.2rem' >Created by Loquizta</Text>
   <Text color='white' fontSize='9px' m='0.2rem' > If you are interesed in my designs please contact me </Text>
   <Flex flexDirection='row' w={['40vw','50vw','40vw', '25vw']} justifyContent='space-between' p='1rem' >
               <a href='https://www.linkedin.com/in/carolina-meneces'> <BsLinkedin   fontSize='1.5rem' color='white'/></a>
               <a href='https://www.facebook.com/profile.php?id=100079221933052'> <BsFacebook  fontSize='1.5rem' color='white'/></a>
               <a href='https://www.github.com/carxxlqzt'> <BsGithub fontSize='1.5rem' color='white'/></a>
                </Flex>  
</Box> 
 )
}

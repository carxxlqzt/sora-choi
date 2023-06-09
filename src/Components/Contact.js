import React from 'react'
import {Box,Image,Text,Flex} from '@chakra-ui/react'
import { AGENCIES } from './const/Images'
import {BsTwitter,BsFacebook,BsInstagram} from 'react-icons/bs'

const Contact = () => {
    console.log(AGENCIES)
  return (
    <Box w='100vw' h='100vh' position='relative' >
        <Box position='absolute' zIndex='1' h='100%' display='flex' justifyContent='center' flexDirection='column' alignItems='center' w='100vw'  bgImage={AGENCIES[5].sora}  filter='auto' blur='2px' brightness='40%' bgRepeat='no-repeat' bgSize='contain' > </Box>
         <Box h={['70%','70%','70%','70%','80%']} position='absolute' zIndex='2' margin='2rem 0rem 1rem 1rem' display='flex' flexDirection='column' justifyContent='space-around'>
            <Box >
             <Text color='white' fontFamily='Roboto, sans-serif' >MODELING AGENCIES</Text>   
            <Flex flexDirection='row' flexWrap='wrap' w={['90vw','90vw','90vw','80vw' ,'60vw']}  >
               {AGENCIES.map((item,index)=>{
                 return( <a href={item.link}>  <Image  boxShadow='base' margin='1.5rem 1.5rem 1.5rem 0rem' rounded='md'
                 objectFit='cover' h={['4rem','3rem','4rem','5rem']} src={item.url} key={index}/></a>) 
               })}   
            </Flex>
            </Box>
            <Box>
            <Text color='white'  fontFamily='Roboto, sans-serif'>MOTHER AGENCY</Text> 
            <Flex  flexDirection='row' alignItems='center' p='1rem'>
               <a  href={AGENCIES[4].link}> <Image src={AGENCIES[4].url} h='3rem' ></Image>  </a>  <Text color='white' p='1rem' fontFamily='Roboto, sans-serif' >THE YOUNGBLOODS</Text> 
                </Flex> 
            </Box>
            <Box>
            <Text color='white' fontFamily='Roboto, sans-serif'>SOCIAL MEDIA</Text> 
                <Flex flexDirection='row' w={['80vw','50vw','40vw', '25vw']} justifyContent='space-between' p='1rem' >
               <a href='https://www.instagram.com/sola5532/'> <BsTwitter   fontSize='3rem' color='white'/></a>
               <a href='https://www.facebook.com/ModelChoisora'> <BsFacebook  fontSize='3rem' color='white'/></a>
               <a href='https://www.instagram.com/sola5532/'> <BsInstagram fontSize='3rem' color='white'/></a>
                {/* <Image h='3rem' src={AGENCIES[5].sora}></Image> */}
                </Flex>
            </Box>
        </Box>
        </Box>  )
}

export default Contact
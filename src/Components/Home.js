import React,{useEffect} from 'react'
import {Box,Flex,Text} from '@chakra-ui/react'
import SoraH from '../Components/Img/Portfolio/home1.mp4'

export const Home = () => {

  useEffect(()=>{
    document.title='Sora Choi'
  },[])

  return (
    <Box w='100vw' height='100vh' >
        <Flex w='100%' h='100%' justifyContent='center' alignItems='center' position='relative'>
             
                              <video className='video'  src={SoraH} autoPlay loop muted></video> 
                <Box w='100%' h='100%' bgColor='black' position='absolute' opacity='30%' zIndex='1' display='flex' justifyContent='center' alignItems='center' >

                </Box>                    
              <Box bgColor='transparent' zIndex='2' m='0'  padding='1rem' opacity={['50%','50%','50%','80%','80%']} borderRadius='2px' >
                <Text fontSize={['2rem' ,'2rem' ,'2rem' ,'4rem' ,'4rem' ]}   color='white' fontFamily='Tenor Sans, sans-serif' > 
                SORA CHOI   </Text>
                <Text color='white' fontSize='0.5rem' textAlign='right' fontFamily='Tenor Sans, sans-serif'>a fanpage created by Loquizta</Text>
                </Box>
        </Flex>
    </Box>
  )
}

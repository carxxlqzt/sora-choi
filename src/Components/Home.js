import React from 'react'
import {Box,Flex,Text} from '@chakra-ui/react'
import SoraH from '../Components/Img/sorachoimugler.jpg'
import {motion} from 'framer-motion'
export const Home = () => {
  return (
    <Box w='100vw' h='100vh' >
        <Flex w='100%' h='100%' justifyContent='center' alignItems='center' position='relative'>
                <Box as={motion.div} bgImage={SoraH} w='80%' h='80%'backgroundSize='cover' bgPosition='center' bgRepeat='no-repeat'  position='absolute' zIndex='0'
                                        animate={{ x:0, opacity: 1, scale: 1 }}
                                        transition='1s linear'
                                        initial={{ opacity: 0, scale: 1.2 }}
                                        
                        ></Box>
                <Box w='100%' h='100%' bgColor='black' position='absolute' opacity='20%' zIndex='1' display='flex' justifyContent='center' alignItems='center' >

                </Box>                    
                <Text fontSize='5rem' color='white' fontFamily='Tenor Sans, sans-serif' zIndex='2' > SORA CHOI </Text>
        </Flex>
    </Box>
  )
}

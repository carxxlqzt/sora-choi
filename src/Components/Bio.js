import {Grid, GridItem,Flex,Image, Text,Box} from '@chakra-ui/react'
import { IMGCarrousel } from './const/Images'
import {motion} from 'framer-motion'

export const Bio= () =>{
  console.log(IMGCarrousel)
    return(
    
        <Flex alignItems='center' justifyContent='center' marginBottom='4rem' height='90vh' >
      <Grid
        w='80%'
        h='90%'
        templateRows={['repeat(5, 1fr)','repeat(5, 1fr)','repeat(3, 1fr)','repeat(3, 1fr)'] }
        templateColumns={['repeat(1, 1fr)','repeat(1, 1fr)','repeat(5, 1fr)','repeat(5, 1fr)']} 
        gap={2}
      >
        <GridItem rowSpan={[1,1,3,3]} colSpan={[1,1,2,2]}   > 
          <Image as={motion.img} initial={{opacity:0, scale:0.9, x:-50}}   animate={{opacity:1, scale:1, x:0,y:0}} transition='0.6s linear'   boxSize='100%'  objectFit='cover' src={IMGCarrousel[5].url} p='1rem' ></Image>
        </GridItem>

        <GridItem rowSpan={[4,4,3,3]} colSpan={[1,1,3,3]}>
          <Flex flexDirection='column' justifyContent='center'>
            <Flex  flexDirection='row' flexWrap='wrap' justifyContent={['center','space-around','space-around','space-around','space-around' ]}  alignItems='center' p='1rem' > 
              <Text color='whiteAlpha.700' marginRight={['0.2rem','0.3rem','0rem','0rem']} fontSize={['7px','9px','9px','9px','9px']} as='b' > 5' 11''  |</Text>
              <Text color='whiteAlpha.700' marginRight={['0.2rem','0.3rem','0rem','0rem']} fontSize={['7px','9px','9px','9px','9px']} as='b' > B 29''  |</Text>
              <Text color='whiteAlpha.700' marginRight={['0.2rem','0.3rem','0rem','0rem']} fontSize={['7px','9px','9px','9px','9px']} as='b' > W 23 1/2  |</Text>
              <Text color='whiteAlpha.700' marginRight={['0.2rem','0.3rem','0rem','0rem']} fontSize={['7px','9px','9px','9px','9px']} as='b' > H 24''  |</Text>
              <Text color='whiteAlpha.700' marginRight={['0.2rem','0.3rem','0rem','0rem']} fontSize={['7px','9px','9px','9px','9px']} as='b' > SHOES 9  |</Text>
              <Text color='whiteAlpha.700' marginRight={['0.2rem','0.3rem','0rem','0rem']} fontSize={['7px','9px','9px','9px','9px']} as='b' > HAIR BLACK  |</Text>
              <Text color='whiteAlpha.700' marginRight={['0.2rem','0.3rem','0rem','0rem']} fontSize={['7px','9px','9px','9px','9px']} as='b'> EYES BROWN </Text>
                 </Flex>

            <Box >
              <Text color='whiteAlpha.700'  as={motion.p} initial={{opacity:0, scale:0.9, x:50,y:70}}   animate={{opacity:1, scale:1, x:0,y:0}} transition='0.6s linear'  p='1rem 0rem 0rem 1rem' >
             <strong className='bio'>S</strong>outh Korean model Sora Choi, also known as Choi So-ra, got her start in modelling when she accompanied a nervous friend to a casting call. Ultimately, she was the one who left with an offer. After Choi’s first big international break at Louis Vuitton’s cruise show in 2014, she went on to become a regular on the catwalk and in campaigns for Louis Vuitton, Marc Jacobs and Coach. She has worked with brands including Prada, Fendi and Burberry and shot with publications including Vogue, V Magazine and i-D. On the back of her campaign for Dior Beauty Hydra Life in 2017, Choi co-starred in Dior’s 2021 cruise campaign. In 2022, she appeared in Mugler’s Spring/Summer film and Louis Vuitton’s resort show in San Diego. 
          </Text></Box>
          </Flex>

           </GridItem>
</Grid>

</Flex>
    )
}
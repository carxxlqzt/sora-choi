import React,{useState} from 'react'
import ImagePlaceholder from "./ImagePlaceholder";
import {Card,Image,Stack,CardBody,Button,CardFooter,Heading,Text,Flex,ListItem,UnorderedList,List} from '@chakra-ui/react'
import { IMGCarrousel,PORTFOLIO } from './const/Images'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css'
import {motion} from 'framer-motion'
import '../App.css'
const Portfolio = () => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  return (

    <Flex w='100vw' h='100vh' justifyContent='center' alignItems='center'    >
        <Flex w='80%' h='80%'justifyContent='space-around' flexWrap='wrap' >
       
        {PORTFOLIO.map((item, index)=>{
          
            return(

                <Card 

                    direction={{ base: 'column', sm: 'row' }}
                    overflow='hidden'
                    variant='outline'
                    position='relative'
                    width='200px'
                    h='300px'
                    className='card'
                    key={index}
                    m='1rem'
                             > 
                             {!isImageLoaded && <ImagePlaceholder />}
                         <Image
                             className={`img-fluid mb-2 ${isImageLoaded ? "d-block" : "d-none"}`}
                             width='100%'
                             height='100%'
                             objectFit='cover'
                             src={item.url}
                             alt='Caffe Latte'
                             onLoad={() => setTimeout(() => setIsImageLoaded(true), 2000)}

                            
                                />
  
                        <Stack position='absolute' w='100%' h='100%' top='0' right='-220' color='white' className='card-body' >
                          <CardBody padding='1rem'>
                            <Heading size='sm'>{item.title} </Heading>
                                
                            <UnorderedList spacing={0}  p='0'>
                                  <ListItem> {item.info1} </ListItem>
                                  <ListItem> {item.info2} </ListItem>
                                  <ListItem>{item.info3} </ListItem>
                                        </UnorderedList>
                          </CardBody>
                                
                          <CardFooter p='0rem 1rem 1rem 1rem'>
                            <Button variant='solid' colorScheme='blue'>
                              More Details
                            </Button>
                          </CardFooter>
                        </Stack>
                </Card>
            )
        })}
    </Flex>
     </Flex>
  )
}

export default Portfolio
import React from "react"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper";
import '../App.css'
import { IMGCarrousel } from "./const/Images";
import {Box} from '@chakra-ui/react'
export const Carrousel = ()=> {


    return(
        <Box w='100vw' h={['70vh','80vh','90vh','90vh']}  display='flex' alignItems='center'  >
           <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
       
      >
        {IMGCarrousel.map((item)=>{
          return(  
            
            <SwiperSlide  className='swiper-slide'>
          <img src={item.url} />
        </SwiperSlide>
          )
        })}
     
  
      </Swiper>
        </Box>
    )
}
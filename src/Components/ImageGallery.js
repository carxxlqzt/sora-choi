import React, { useRef, useState } from 'react';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import "../Components/const/swipper.css"
export const Gallery = ({prop}) => {  
    console.log(prop)
    const images = [
      "https://picsum.photos/200/300?image=1050",
      "https://picsum.photos/300/300?image=206",
      "https://picsum.photos/100/300?image=206",
      "https://picsum.photos/150/300?image=206",

  ]

  return (
    
 <>
<Masonry columnsCount={3} gutter="20px">
                {images.map((image, i) => (
                    <img
                        key={i}
                        src={image}
                        style={{width: "100%", display: "block"}}
                    />
                ))}
            </Masonry>
          </>
  
  )
}


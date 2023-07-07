import React, { useState } from "react";
import ImagePlaceholder from "./ImagePlaceholder";
import { IMGCarrousel } from "./const/Images";
const ArticleItem = () => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  return (
    <div>
      {!isImageLoaded && <ImagePlaceholder />}
      <img
        className={`img-fluid mb-2 ${isImageLoaded ? "d-block" : "d-none"}`}
        src={IMGCarrousel[2].url}
        alt={IMGCarrousel[2].title}
        onLoad={() => setTimeout(() => setIsImageLoaded(true), 2000)}
      />
      <h2>{IMGCarrousel[2].title}</h2>
      <div>{IMGCarrousel[2].title}</div>
    </div>
  );
};

export default ArticleItem;

import React from "react";
import ContentLoader from "react-content-loader";

const MyLoader = () => (
  <ContentLoader
    speed={2}
    width={200}
    height={300}
    viewBox="0 0 200 300"
    backgroundColor="#f3f3f3"
    foregroundColor='#dbd9d4'
  >
    <rect x="2" y="2" rx="0" ry="0" width="200" height="300" />
  </ContentLoader>
);

export default MyLoader;
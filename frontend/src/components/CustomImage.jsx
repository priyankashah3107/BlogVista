// import React from 'react';
// import Loader from "react-loader-spinner"
// import { ThreeDots } from "react-loader-spinner";


// const CustomImage = ({ src, alt, className }) => {
//   const [isLoading, setIsLoading] = React.useState(true);

//   const handleImageLoad = () => {
//     setIsLoading(false);
//   };

//   return (
//     <div className={className}>
//       {isLoading && (
//         <Loader type="ThreeDots" color="#333" height={50} width={50} />
//       )}
//       <img
//         src={src}
//         alt={alt}
//         onLoad={handleImageLoad}
//         onError={() => setIsLoading(false)}
//         style={{ display: isLoading ? 'none' : 'block' }}
//       />
//     </div>
//   );
// };

// export default CustomImage;
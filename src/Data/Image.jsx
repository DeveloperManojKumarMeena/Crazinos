import React, { createContext, useState } from 'react';


export const photo = createContext(null);

const Images = (props) => {
  const [photos, setPhotos] = useState([
    {
      id: 1,
      photo: "public/image/PriceTag.png"
    },
    {
      id: 2,
      photo: "public/image/Stand.png"
    },
    {
      id: 3,
      photo: "public/image/logo.png"
    }
  ]);

  return (
   
    <photo.Provider value={photos}>
      {props.children}
    </photo.Provider>
  );
};

export default Images;
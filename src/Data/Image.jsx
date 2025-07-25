import React, { createContext, useState } from 'react';


export const photo = createContext(null);

const Images = (props) => {
  const [photos, setPhotos] = useState([
    {
      id: 1,
      photo: "/image/PriceTag.png"
    },
    {
      id: 2,
      photo: "/image/Stand.png"
    },
    {
      id: 3,
      photo: "/image/logo.png"
    }
  ]);

  return (
   
    <photo.Provider value={photos}>
      {props.children}
    </photo.Provider>
  );
};

export default Images;

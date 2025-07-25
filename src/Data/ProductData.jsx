import React, { createContext, useState } from "react";
export const porductData = createContext(null);
const ProductData = (props) => {
  const [Products, setProducts] = useState([
    {
      id: 1,
      name: "Mega Science Kit",
      mrp: 1999,
      discount: 35,
      price: 1299,
      image: "public/image/megakit.png",
      color:"",
      background:""
    },
    {
      id: 2,
      name: "Fun & Learn Kit",
      mrp: 2399,
      discount: 38,
      price: 1499,
      image: "public/image/funKIt.png",
      color:"",
      background:""
    },
    {
      id: 3,
      name: "Slime & Sand Kit ",
      mrp: 2199,
      discount: 36,
      price: 1399,
      image: "public/image/SmileKit.png",
      color:"#FFA600",
      background:"#1A1035",
      distext:"#F1F1F1"
    },
  ]);

  return (
    <porductData.Provider value={Products}>
   
      {props.children}
    </porductData.Provider>
  );
};

export default ProductData;

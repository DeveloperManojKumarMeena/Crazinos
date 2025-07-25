import React, { useContext } from "react";
import { porductData } from "../Data/ProductData"
import "./Product.css";

const ProductSection = () => {
  const products = useContext(porductData);

  return (<div id="productsection">
    <section className="product-section">
      <h2 className="section-heading">Our Science Kits</h2>
      <div className="product-grid">
        {products.map((item) => (
          <div key={item.id} className="product-card" style={{ backgroundColor: item.background || "#001F3F" }}>
            <img src={item.image} alt={item.name} className="productimage" />
            <h3 className="product-title">{item.name}</h3>
            <p className="product-mrp">MRP: ₹{item.mrp}</p>
            <p className="product-discount" style={{ color: item.distext || "#FFD700" }}>
              {item.discount}% OFF
            </p>
            <p className="product-price">₹{item.price}</p>
            <button className="buy-btn">Buy Now</button>
          </div>
        ))}
      </div>
    </section>
    </div>
  );
};

export default ProductSection;

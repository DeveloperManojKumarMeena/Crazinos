import React, { useContext, useState, useEffect, useRef } from "react";
import { porductData } from "../Data/ProductData";
import { gsap } from "gsap";
import "./SectionOne.css";

const Home = () => {
  const products = useContext(porductData);
  const [currentProductIndex, setCurrentProductIndex] = useState(0);
  const imageRef = useRef(null);

  const currentProduct = products[currentProductIndex];
  const nextProduct = products[(currentProductIndex + 1) % products.length];

  // Text & background animation
  useEffect(() => {
    if (currentProduct) {
  

      gsap.fromTo(
        ".product-text h1, .product-text p, .product-price > span, .product-actions > button",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          delay: 0.5,
        }
      );
    }
  }, [currentProduct]);


// My Idea code



  // Flip image animation with midway swap
  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentProductIndex + 1) % products.length;
      const nextData = products[nextIndex];

      gsap.set(imageRef.current, { transformOrigin: "center center", rotationY: 0 });
      imageRef.current.dataset.swapped = "false"; // Reset for new cycle

      const tl = gsap.timeline({
        onComplete: () => {
          setCurrentProductIndex(nextIndex);
          gsap.set(imageRef.current, { rotationY: 0 });
        },
      });

      tl.to(imageRef.current, {
        rotationY: 360,
        duration: 1.5,
        ease: "power2.inOut",
        onUpdate: () => {
          const rotation = gsap.getProperty(imageRef.current, "rotationY");
          if (rotation >= 180 && imageRef.current.dataset.swapped !== "true") {
            imageRef.current.src = nextData.image;
            imageRef.current.alt = nextData.name;
            imageRef.current.dataset.swapped = "true";
          }
        },
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [currentProductIndex, products]);

  if (!currentProduct) return <div className="Home-loading">Loading...</div>;

  return (
    <div className="Home">
      <div className="book-display-container">

        <div className="image-page-wrapper">
          <img
            ref={imageRef}
            src={currentProduct.image}
            alt={currentProduct.name}
            className="product-image"
            data-swapped="false"
          />
        </div>

        <div className="text-page">
          <div className="product-text">
            <h1>{currentProduct.name}</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...
            </p>
            <div className="product-price">
              <span className="mrp">₹{currentProduct.mrp}</span>
              <span className="discount">{currentProduct.discount}% off</span>
              <span className="current-price">₹{currentProduct.price}</span>
            </div>
            <div className="product-actions">
              <button className="buy-now-btn">Buy Now</button>
              <button className="know-more-btn">Know More...</button>
            </div>
          </div>
        </div>

        
      </div>




    </div>
  );
};

export default Home;

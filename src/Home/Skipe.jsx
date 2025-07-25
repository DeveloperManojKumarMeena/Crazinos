import React from "react";
import "./App.css"; // <-- CSS file import
import ImageCursorTrail from "../components/ui/image-cursortrail";

const App = () => {
  const images = [
    "https://images.pexels.com/photos/30082445/pexels-photo-30082445.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.unsplash.com/photo-1692606743169-e1ae2f0a960f?q=80&w=3560&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1709949908058-a08659bfa922?q=80&w=1200&auto=format",
    "https://images.unsplash.com/photo-1548192746-dd526f154ed9?q=80&w=1200&auto=format",
    "https://images.unsplash.com/photo-1644141655284-2961181d5a02?q=80&w=3000&auto=format&fit=crop",
    "https://images.pexels.com/photos/30082445/pexels-photo-30082445.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://assets.lummi.ai/assets/QmNfwUDpehZyLWzE8to7QzgbJ164S6fQy8JyUWemHtmShj?auto=format&w=1500",
    "https://images.unsplash.com/photo-1706049379414-437ec3a54e93?q=80&w=1200&auto=format",
    "https://assets.lummi.ai/assets/Qmb2P6tF2qUaFXnXpnnp2sk9HdVHNYXUv6MtoiSq7jjVhQ?auto=format&w=1500",
    "https://images.unsplash.com/photo-1508873881324-c92a3fc536ba?q=80&w=1200&auto=format",
  ];

  return (
    <div className="main-container">
      <ImageCursorTrail
        items={images}
        maxNumberOfImages={5}
        distance={25}
        imgClass="image-trail"
        className="trail-wrapper"
      >
        <article className="content-section">
          <h1 className="heading">
            Crazions – Where Future Scientists Begin
          </h1>
          <p className="subtext">
            Experience science like never before — with Crazy XYZ's Crazions!
          </p>
        </article>
      </ImageCursorTrail>
    </div>
  );
};

export default App;


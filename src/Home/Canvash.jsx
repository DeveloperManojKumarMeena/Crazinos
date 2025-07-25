import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "../Home/Canvash.css";
import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";

// Register plugin
gsap.registerPlugin(ScrollTrigger);

const Canvash = () => {
  const canvasRef = useRef(null);
  const [frames, setFrames] = useState({
    currentIndex: 0,
    maxIndex: 160,
  });
  const [images, setImages] = useState([]);

  // Preload images only once
  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    let loadedImages = [];
    let imagesLoaded = 0;

    const preloadImage = () => {
      for (let i = 0; i <= frames.maxIndex; i++) {
        const imageURL = `/Canvsaphoto/canvas_${i.toString().padStart(3, "0")}.png`;
        const img = new Image();
        img.src = imageURL;

        img.onload = () => {
          imagesLoaded++;
          if (imagesLoaded === frames.maxIndex + 1) {
            console.log("All images loaded!");
            setImages(loadedImages);
            loadImage(frames.currentIndex, loadedImages);
          }
        };

        loadedImages.push(img);
      }
    };

    const loadImage = (index, imagesArray) => {
      if (index >= 0 && index <= frames.maxIndex) {
        const img = imagesArray[index];
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const scaleX = canvas.width / img.width;
        const scaleY = canvas.height / img.height;
        const scale = Math.max(scaleX, scaleY);

        const newWidth = img.width * scale;
        const newHeight = img.height * scale;

        const offsetX = (canvas.width - newWidth) / 2;
        const offsetY = (canvas.height - newHeight) / 2;

        context.clearRect(0, 0, canvas.width, canvas.height);
        context.imageSmoothingQuality = "high";
        context.imageSmoothingEnabled = true;
        context.drawImage(img, offsetX, offsetY, newWidth, newHeight);
      }
    };

    preloadImage();
  }, []);

  // ✅ useGSAP hook for Scroll Animation
  useGSAP(() => {
    if (images.length === 0) return; // Wait for images to load

    gsap.to(frames, {
      currentIndex: frames.maxIndex,
      ease: "none",
      scrollTrigger: {
        trigger: "#canvsh1",
        start: "top top",
        end: "+=3000",
        scrub: 2,
      },
      onUpdate: () => {
        const index = Math.floor(frames.currentIndex);
        if (images[index]) {
          const canvas = canvasRef.current;
          const context = canvas.getContext("2d");

          const img = images[index];
          canvas.width = window.innerWidth;
          canvas.height = window.innerHeight;

          const scaleX = canvas.width / img.width;
          const scaleY = canvas.height / img.height;
          const scale = Math.max(scaleX, scaleY);

          const newWidth = img.width * scale;
          const newHeight = img.height * scale;

          const offsetX = (canvas.width - newWidth) / 2;
          const offsetY = (canvas.height - newHeight) / 2;

          context.clearRect(0, 0, canvas.width, canvas.height);
          context.imageSmoothingQuality = "high";
          context.imageSmoothingEnabled = true;
          context.drawImage(img, offsetX, offsetY, newWidth, newHeight);
        }
      }
    });
  }, [images]); // Run after images are loaded

  return (
    <div className="CanvashBody">
      <div id="canvsh1">
        <div id="canvsh2">
          <canvas ref={canvasRef} id="frame" />
        </div>
      </div>
    </div>
  );
};

export default Canvash;

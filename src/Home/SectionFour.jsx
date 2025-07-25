import React, { useRef } from "react";
import "./SectionFour.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const SectionFour = () => {
  var initialPath = "M 100 100 Q 95 100 1400 100";
  var path = "M 100 100 Q 95 100 1400 100";
  var finalPath = "M 100 100 Q 700 100  1400 100 ";
  const rafval = useRef(null);

  useGSAP(() => {
    const element = rafval.current;
    element.addEventListener("mousemove", (e) => {
      initialPath = `M 100 100 Q ${e.x} ${e.y} 1400 100`;
      console.log(initialPath);
      gsap.to("svg path", {
        attr: { d: initialPath },
      });
    });

    element.addEventListener("mouseleave", (f) => {
      gsap.to("svg path", {
        duration: 2,
        attr: { d: path },

        ease: "elastic.out(1,0.3)",
      });
    });
  });

  return (
    <div className="section4">
      <div className="line" ref={rafval}>
        <h1>Our Product's</h1>
        <svg height="200" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M 100 100 Q 95 100 1400 100"
            stroke="white"
            fill="transparent"
          />
        </svg>
      </div>

      <div className="cardsection">
        <div className="card" id="p1">
          <img src="https://i.postimg.cc/PJHP1kDX/megakit.png" alt="" />
          <div className="text">
            <h1>Mega Kit</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
              eius temporibus repellat repellendus maiores reiciendis.
            </p>
          </div>
        </div>
        <div className="card" id="p2">
          <img src="https://i.postimg.cc/Dygbdm5t/SmileKit.png" alt="" />
          <div className="text">
            <h1>Smile Kit</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
              eius temporibus repellat repellendus maiores reiciendis.
            </p>
          </div>
        </div>
        <div className="card" id="p3">
          <img src="/image/funKIt.png" alt="" />
          <div className="text">
            <h1>Fun & Learn Kit</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
              eius temporibus repellat repellendus maiores reiciendis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionFour;

// SecTwo.jsx (JSX with updated class & id names)
import { useGSAP } from "@gsap/react";
import "./sectiontow.css";
import { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const SecTwo = () => {
  const marqueeRaf = useRef(null);

  useGSAP(() => {
    window.addEventListener("wheel", (e) => {
      if (e.deltaY > 0) {
        gsap.to(".scroll-row", {
          transform: "translateX(-200%)",
          repeat: -1,
          duration: 5,
          ease: "none",
        });
        gsap.to(".scroll-row img", {
          rotate: 180,
          duration: 1.5,
        });
      } else {
        gsap.to(".scroll-row", {
          transform: "translateX(0%)",
          repeat: -1,
          duration: 5,
          ease: "none",
        });
        gsap.to(".scroll-row img", {
          rotate: 0,
          duration: 1.5,
        });
      }
    });
  });

  useGSAP(() => {
    const tml2 = gsap.timeline({
      scrollTrigger: {
        trigger: "#kit-section",
        start: "top 70%",
        end: "30% 30%",
        scrub: 2.5,
      },
    });

    tml2.from(".kit-left h1", { x: -100, duration: 1.5, opacity: 0 }, "heading");
    tml2.from(".kit-right h1", { x: 100, duration: 1.5, opacity: 0, stagger: 1 }, "heading");

    tml2.from(".kit-left h2", { x: -100, duration: 1.5, opacity: 0, stagger: 1 }, "subHading");
    tml2.from(".kit-left li", { x: -100, duration: 1.5, opacity: 0, stagger: 1 });
    tml2.from(".kit-left p", { x: -100, duration: 1.5, opacity: 0, stagger: 1 });

    tml2.from(".kit-right p", { x: 100, duration: 1.5, opacity: 0, stagger: 1 }, "subHading");
    tml2.from(".kit-right button", { x: 100, duration: 1.5, opacity: 0, stagger: 1 });
    tml2.from(".kit-right img", { x: 100, duration: 1.5, opacity: 0, stagger: 1 }, "subHading");
  });

  return (
    <div id="kit-section">
      <div id="scroll-strip" ref={marqueeRaf}>
        {[...Array(6)].map((_, index) => (
          <div className="scroll-row" key={index}>
            <h1>CRAZIONS A Product Of CRAZY-XYZ</h1>
            <img src="https://www.brandium.nl/wp-content/uploads/2023/07/arrow-br.svg" alt="arrow" />
          </div>
        ))}
      </div>

      <div id="kit-content">
        <div className="kit-left">
          <h1>
            What’s Inside the Kit : <span>25+</span> components
          </h1>
          <h2>6 Classic Board Games</h2>
          <ul>
            <li>Ludo</li>
            <li>Snake & Ladder</li>
            <li>Chess</li>
            <li>Train Journey Game</li>
            <li>Nine Men's Morris</li>
            <li>Tic Tac Toe</li>
          </ul>
          <p>
            Unlock a world of excitement with the Crazinos Fun & Learn Kit—where play meets
            discovery! Packed with brain-boosting games and hands-on activities, kids can solve the
            India map puzzle, build tangram shapes, and create colorful sand art.
          </p>
        </div>

        <div className="kit-right">
          <div className="kit-textbox">
            <h1>Fun & Learn Kit</h1>
            <p>
              Dive into a world of squishy fun with the Crazinos Slime & Sand Kit! From making
              colorful, stretchy slimes to building magical castles with kinetic sand, this kit
              offers endless sensory play. Kids can customize their creations with glitter, glow
              powder, and fun add-ons. It’s the perfect mix of creativity and hands-on learning. Let
              the messy magic begin!
            </p>
            <button id="buy-btn">Buy Now</button>
            <button id="more-btn">Know More...</button>
          </div>

          <img src="https://i.postimg.cc/85p9q41Z/prophto.png" alt="kit" />
        </div>
      </div>
    </div>
  );
};

export default SecTwo;
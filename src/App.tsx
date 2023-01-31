import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

import { Navbar } from "./components/navbar";

import background from "./assets/images/background.jpg";
import clock from "./assets/videos/clock.mp4";
import clockLoop from "./assets/videos/clockloop.mp4";
import weeks from "./assets/videos/render.mp4";
import letters from './assets/videos/letters.gif'
import letters2 from './assets/videos/letters2.gif'
import letters3 from "./assets/videos/letters3.mp4";
import { Form } from "./components/form";
import { Footer } from "./components/footer";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    let video: any;
    for (video of document.querySelectorAll(".videoPlayer")) {
       console.log(video);
       ScrollTrigger.create({
          trigger: video,
          onEnter: () => video.play(),
          onEnterBack: () => video.play(),
          onLeave: () => video.pause(),
          onLeaveBack: () => video.pause(),
       });
    }
 }, []);
  return (
    <>
      <div className="absolute z-0 bg-black flex flex-row">
        <div
          style={{
            backgroundImage: `url(${background})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
          className="w-screen h-screen opacity-25"
        ></div>
        <div
          style={{
            backgroundImage: `url(${background})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
          className="w-screen h-screen opacity-25"
        ></div>
        <div
          style={{
            backgroundImage: `url(${background})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
          className="w-screen h-screen opacity-25"
        ></div>
        <div
          style={{
            backgroundImage: `url(${background})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
          className="w-screen h-screen opacity-25"
        ></div>
        <div
          style={{
            backgroundImage: `url(${background})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
          className="w-screen h-screen opacity-25"
        ></div>
        <div
          style={{
            backgroundImage: `url(${background})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
          className="w-screen h-screen opacity-25"
        ></div>
      </div>
      <div className="absolute z-5 text-white">
        <Navbar />
        <div className="w-full h-screen flex flex-row">
          <section className="w-screen h-screen flex flex-col items-center justify-around">
            <video width="70%" loop muted autoPlay>
              <source src={clock} />
              <source src={clockLoop} />
            </video>
            <p className="text-5xl font-bold">Font  & time power</p>
          </section>
          <section className="w-screen h-screen flex flex-col items-center justify-around">
            <img src={letters} alt="" width={'85%'} />
          </section>
          <section className="w-screen h-screen flex flex-col items-center justify-around">
            <video width="70%" loop muted autoPlay>
              <source src={weeks} />
            </video>
          </section>
          <section className="w-screen h-screen flex flex-col items-center justify-around">
          <img src={letters2} alt="" width={'85%'} />
          </section>
          <section className="w-screen h-screen flex flex-col items-center justify-around">
            <video width="70%" loop muted autoPlay>
              <source src={letters3} />
            </video>
          </section>
          <section className="w-screen h-screen flex flex-col items-center justify-around">
            <h2 className="text-8xl">Join us</h2>
            <Form/>
            <Footer/>
          </section>
        </div>
      </div>
    </>
  );
}

export default App;

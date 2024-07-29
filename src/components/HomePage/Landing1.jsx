import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Navbar1 from "./Navbar1";

const Landing1 = () => {
  useGSAP(() => {
    gsap.fromTo(
      "#mbAWS",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1,
        ease: "power2.inOut",
        delay: 3.1,
      }
    );
    gsap.fromTo(
      "#LgAWS",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1,
        ease: "power2.inOut",
        delay: 3.1,
      }
    );
    gsap.fromTo(
      "#para",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1,
        ease: "power2.inOut",
        delay: 3.1,
      }
    );

    gsap.fromTo(
      "#robo",
      {
        x: "-50vw",
        opacity: 0,
        scale: 3,
        // duration:2
      },
      {
        x: 0,
        scale: 1.2,
        opacity: 1,
        duration: 4,
        ease: "power2.inOut",
      }
    );

    gsap.fromTo(
      "#Nav",
      {
        y: "-15vh",
      },
      {
        y: 0,
        duration: 2,
        ease: "power2.inOut",
      }
    );
    gsap.fromTo(
      "#Header",
      {
        // y:"-1vh"
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 2,
        ease: "power2.inOut",
      }
    );
    gsap.to(".robo1", {
      y: "20px",
      repeat: -1,
      yoyo: true,
      duration: 1,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <div
      id="Landing"
      className="w-screen h-screen flex flex-col overflow-hidden "
    >
      <div id="Nav" className="h-[15vh] w-screen z-10">
        <Navbar1 />
      </div>
      <div className="w-screen h-[85vh] flex">
        <div className="hidden lg:block  w-1/2 h-full  ">
          <img
            id="robo"
            src="/images/cloud1.svg"
            className="h-full object-contain robo1"
          />
        </div>
        <div className="w-full h-full lg:hidden flex flex-col ">
          <h1
            id="mbAWS"
            className="text-white Amz   text-[140px]  text-center "
          >
            aws
          </h1>
          <h1
            id="para"
            className="text-white text-3xl underline Title  text-center "
          >
            Cloud Club PICT
          </h1>

          <div id="para" className="w-full text-white text-lg font-mono ">
            <p className="text-justify p-5">
              AWS Cloud Club PICT is a student community at Pune Institute of
              Computer Technology (PICT) that focuses on cloud computing using
              Amazon Web Services (AWS). The club provides students with
              resources, workshops, and hands-on experiences to learn and apply
              AWS technologies, fostering cloud computing skills and knowledge
              within the academic environment.
            </p>
          </div>
        </div>
        <div className="w-1/2 h-full lg:block justify-center  hidden  ">
          <h1
            id="LgAWS"
            className="text-white Amz   text-[144px]  text-center "
          >
            aws
          </h1>
          <h1
            id="para"
            className="text-white Title underline   text-4xl text-center "
          >
            Cloud Club PICT
          </h1>
          <div id="para" className="w-full text-white text-lg font-mono ">
            <p className="text-justify p-5">
              AWS Cloud Club PICT is a student community at Pune Institute of
              Computer Technology (PICT) that focuses on cloud computing using
              Amazon Web Services (AWS). The club provides students with
              resources, workshops, and hands-on experiences to learn and apply
              AWS technologies, fostering cloud computing skills and knowledge
              within the academic environment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing1;

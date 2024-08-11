import React, { useEffect, useState } from "react";
import Text from "./EventText";
import { useInView } from "react-intersection-observer";

export default function Event() {
  const [imglink, setImglink] = useState(
    "https://secure.meetupstatic.com/photos/event/4/4/2/0/600_520517440.webp?w=384"
  );

  const [myref1, visible1] = useInView({ threshold: 0.5 });
  const [myref2, visible2] = useInView({ threshold: 0.5 });
  const [myref3, visible3] = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (visible1) {
      setImglink(
        "https://media.licdn.com/dms/image/D4D22AQFRqBnXtmK1Ug/feedshare-shrink_800/0/1722925451846?e=1726099200&v=beta&t=r40AGY1aUAMr_Ev_4hzs8LXy7qUQGOPTMXK3vQlh34o"
      );
    }
    if (visible2) {
      setImglink(
        "https://secure.meetupstatic.com/photos/event/6/d/b/1/600_520408081.webp?w=384"
      );
    }
    if (visible3) {
      setImglink(
        "https://secure.meetupstatic.com/photos/event/4/4/2/0/600_520517440.webp?w=384"
      );
    }
  }, [visible1, visible2, visible3]);

  return (
    <>
      <div className="mb-5">
        <div className="flex flex-col">
          <h1 className="text-text-200 text-[2rem] sm:text-[3rem] font-bold text-center">
            See :{" "}
            <p className="inline bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
              What's
            </p>{" "}
            On
          </h1>
        </div>

        <div
          className=" grid-cols-2 flex justify-around w-full  text-white"
          style={{ scrollBehavior: "smooth", gap: "3.5vw" }}
        >
          <div
            className="block text-sm md:w-full relative md:text-m "
            style={{ marginLeft: "6vw" }}
          >
            <div ref={myref1} className={`flex flex-wrap w-full h-screen md:mb-0 mb-10`}>
              <div
                className={`md:hidden md:mt-0 mt-7 block justify-center w-full ease-in-out duration-700 ${visible1 ? "opacity-100" : "opacity-40"}`}
                style={{ marginRight: "8vw" }}
              >
                <div
                  className="rounded-3xl overflow-auto flex justify-center align-middle"
                  style={{
                    objectFit: "contain",
                    height: "30vh",
                    marginTop: "vh",
                    boxShadow: "rgb(56 189 248 / 60%) 0px 0px 300px",
                  }}
                >
                  <img src="https://secure.meetupstatic.com/photos/event/4/4/2/0/600_520517440.webp?w=384"></img>
                </div>
              </div>

              <Text
                title="AWS Cloud Fundamental Bootcamp"
                subtitle="Get Certified with Two Days Boot Camp"
                tense="Conducting On :"
                date="12th & 13th August 2024"
                content={
                  <>
                    This two-day bootcamp is designed for anyone interested in getting started with AWS and cloud computing. It aims to provide attendees with a solid foundation in AWS services, featuring sessions on Compute, Storage, Databases, Networking, and Security.
                    <br /><i style={{textShadow:'0px 0px 10px'}}>At the end of the bootcamp, attendees can claim their certification proving their knowledge on AWS Fundamentals.</i>
                  </>
                }
                link="https://www.meetup.com/aws-cloud-club-at-pict/events/302665177/"
                linkText="Visit Meetup"
                transp={visible1}
              />
            </div>

            <div ref={myref2} className={`flex flex-wrap w-full h-screen `}>
              <div
                className={`md:hidden md:mt-0 mt-7 block justify-center w-full ease-in-out duration-700 ${visible2 ? "opacity-100" : "opacity-40"}`}
                style={{ marginRight: "8vw" }}
              >
                <div
                  className="rounded-3xl overflow-auto flex justify-center align-middle"
                  style={{
                    objectFit: "contain",
                    height: "30vh",
                    marginTop: "vh",
                    boxShadow: "rgb(56 189 248 / 60%) 0px 0px 300px",
                  }}
                >
                  <img src="https://secure.meetupstatic.com/photos/event/4/4/2/0/600_520517440.webp?w=384"></img>
                </div>
              </div>

              <Text
                title="ON-PREM V/S CLOUD"
                subtitle="A Virtualization Worshop"
                tense="Conducted On :"
                date="22th April 2024"
                content={
                  <>
                    This interactive workshop aims to understand the concepts of Virtualization, offering hands-on projects on Virtualization, both locally and on the cloud.
                    <br/>Understand how to set up virtual machines, configure the networks and resource optimization while performing deployment of a website.
                  </>
                }
                link="https://www.meetup.com/aws-cloud-club-at-pict/events/300534045/"
                linkText="Visit MeetUp"
                transp={visible2}
              />
            </div>


            <div ref={myref3} className={`flex flex-wrap w-full h-screen `}>
              <div
                className={`md:hidden block justify-center w-full ease-in-out duration-700 ${visible3 ? "opacity-100" : "opacity-40"}`}
                style={{ marginRight: "8vw" }}
              >
                <div
                  className="rounded-3xl overflow-auto flex justify-center align-middle"
                  style={{
                    objectFit: "contain",
                    height: "30vh",
                    marginTop: "5vh",
                    boxShadow: "rgb(56 189 248 / 60%) 0px 0px 300px",
                  }}
                >
                  <img src="https://secure.meetupstatic.com/photos/event/6/d/b/1/600_520408081.webp?w=384"></img>
                </div>
              </div>

              <Text
                title="Unlocking Cloud Computing "
                subtitle="Introduction to AWS Cloud Club PICT"
                tense="Conducted On :"
                date="16th April 2024"
                content={
                  <>
                    This introductory session is dedicated to exploring the concepts of cloud computing, uncovering the benefits of joining the cloud club, and discussing upcoming events and future aspirations.
                    <br/>Join us as we break down the complexities of cloud technology, highlight the opportunities available through our club, and outline our vision for exciting journey ahead.
                  </>
                }
                link="https://www.meetup.com/aws-cloud-club-at-pict/events/300417318/"
                linkText="Visit MeetUp"
                transp={visible3}
              />
            </div>

          </div>

          <div
            className="hidden overflow-visible md:grid grid-cols-1 "
            style={{ width: "5vw", height: "100vh", justifyContent: "center" }}
          >
            <div
              className={`bg-gradient-to-b from-blue-400 to-purple-700 ease-in-out duration-700 rounded-xl m-auto ${visible1 ? "opacity-100" : "opacity-40"}`}
              style={{ width: "0.5vh", height: "30vh", marginTop: "10vh" }}
            ></div>

            <div
              className={`bg-black/0 border-purple-700 m-auto ease-in-out duration-700 ${visible1 ? "opacity-100" : "opacity-40"}`}
              style={{
                width: "2vh",
                height: "2vh",
                marginTop: "2vh",
                rotate: "45deg",
                borderWidth: "0.3vh",
              }}
            ></div>

            <div
              className={`bg-gradient-to-b from-purple-700 to-blue-400 ease-in-out duration-700 rounded-xl m-auto ${visible1 ? "opacity-100" : "opacity-40"}`}
              style={{ width: "0.5vh", height: "50vh", marginTop: "2vh" }}
            ></div>

            <div
              className={`bg-gradient-to-b from-blue-400 to-purple-700 ease-in-out duration-700 rounded-xl m-auto ${visible2 ? "opacity-100" : "opacity-40"}`}
              style={{ width: "0.5vh", height: "50vh", marginTop: "2vh" }}
            ></div>

            <div
              className={`bg-black/0 border-purple-700 m-auto ease-in-out duration-700 ${visible2 ? "opacity-100" : "opacity-40"}`}
              style={{
                width: "2vh",
                height: "2vh",
                marginTop: "2vh",
                translate: " 0",
                rotate: "45deg",
                borderWidth: "0.3vh",
              }}
            ></div>

            <div
              className={`bg-gradient-to-b from-purple-700 to-blue-400 rounded-xl m-auto ease-in-out duration-700 ${visible2 ? "opacity-100" : "opacity-40"}`}
              style={{ width: "0.5vh", height: "45vh", marginTop: "2vh" }}
            ></div>
            <div
              className={`bg-gradient-to-b from-blue-400 to-purple-700  rounded-xl m-auto ease-in-out duration-700 ${visible3 ? "opacity-100" : "opacity-40"}`}
              style={{ width: "0.5vh", height: "45vh" , marginTop: "2vh"}}
            ></div>

            <div
              className={`bg-black/0 border-purple-700 m-auto ease-in-out duration-700 ${visible3 ? "opacity-100" : "opacity-40"}`}
              style={{
                width: "2vh",
                height: "2vh",
                marginTop: "2vh",
                translate: " 0",
                rotate: "45deg",
                borderWidth: "0.3vh",
              }}
            ></div>

            <div
              className={`bg-gradient-to-b from-purple-700 to-blue-400 rounded-xl m-auto ease-in-out duration-700 ${visible3 ? "opacity-100" : "opacity-40"}`}
              style={{ width: "0.5vh", height: "40vh", marginTop: "2vh" }}
            ></div>
          </div>

          <div className="hidden md:block justify-center w-full mr-14">
            <div
              className="rounded-3xl sticky top-1/4  overflow-auto flex justify-center align-middle "
              style={{
                objectFit: "contain",
                height: "45vh",
                marginBottom: "27vh",
                marginTop: "27vh",
                boxShadow: "rgb(56 189 248 / 50%) 0px 0px 300px",
              }}
            >
              <img src={imglink} className=""></img>
            </div>
          </div> 
        </div>
      </div>
    </>
  );
}

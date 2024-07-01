import React from "react";

const EventCard = ({ title, subtitle, description, imageUrl }) => (
  <div className="basis-6/12 h-fit rounded-xl relative self-center shadow-[0px_20px_207px_10px_rgba(165,_39,_255,_0.48)]">
    <div className="relative flex bg-clip-border rounded-xl p-6 bg-gray-800 border-gray-700 hover:bg-gray-700 shadow-md w-full flex-row">
      <div className="relative w-2/5 m-0 overflow-hidden text-white rounded-r-none bg-clip-border rounded-xl shrink-0">
        <img
          src={imageUrl}
          alt={`${title} image`}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="p-6">
        <h6 className="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-gray-400 uppercase">
          {title}
        </h6>
        <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-white">
          {subtitle}
        </h4>
        <p className="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-400">
          {description}
        </p>
        <a href="#" className="inline-block">
          <button
            className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-gray-200 uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20"
            type="button"
          >
            Learn More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              ></path>
            </svg>
          </button>
        </a>
      </div>
    </div>
  </div>
);

const EventsPage = () => {
  return (
    <React.Fragment>
      <div className="h-screen w-screen flex flex-col">
        <h1 className="text-text-200 text-[3rem] font-bold self-center">
          Events :{" "}
          <p className="inline bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
            Meet
          </p>{" "}
          with us...
        </h1>
        <div className="flex flex-1 justify-center gap-4">
          <EventCard
            title="Events"
            subtitle="Something Something"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci iste, fugiat officiis eligendi ad vero perspiciatis, porro maiores distinctio, harum ipsum eos quo corrupti nobis debitis laborum. Excepturi, fugit sequi."
            imageUrl="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80"
          />
          <div className="basis-1/12 flex flex-col items-center gap-4">
            <div className="w-1 bg-gradient-to-b from-transparent to-neo-green h-full"></div>
            <div className="w-1 bg-gradient-to-b from-neo-green to-neo-blue h-full"></div>
          </div>
        </div>
      </div>
      {/* Break */}
      <div className="h-screen w-screen flex flex-col">
        <div className="flex flex-1 justify-center gap-4">
          <EventCard
            title="Events 2"
            subtitle="Something Something"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci iste, fugiat officiis eligendi ad vero perspiciatis, porro maiores distinctio, harum ipsum eos quo corrupti nobis debitis laborum. Excepturi, fugit sequi."
            imageUrl="https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <div className="basis-1/12 flex flex-col items-center gap-4">
            <div className="w-1 bg-gradient-to-b from-neo-blue to-neo-yellow h-full"></div>
            <div className="w-1 bg-gradient-to-b from-neo-yellow h-full"></div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default EventsPage;

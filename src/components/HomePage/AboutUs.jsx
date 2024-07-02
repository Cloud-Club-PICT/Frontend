import React from "react";

const AboutUsPage = () => {
  return (
    <div class=" h-screen w-screen flex flex-col items-center justify-center text-white p-5 overflow-hidden">
      <div class="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          <div class="max-w-lg">
            <h1 className="text-text-200 text-[3rem] font-bold self-center">
              About Us :{" "}
              <p className="inline bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
                Who
              </p>{" "}
              are We?
            </h1>
            <p class="mt-4 text-gray-600 text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
              eros at lacus feugiat hendrerit sed ut tortor. Suspendisse et
              magna quis elit efficitur consequat. Mauris eleifend velit a
              pretium iaculis. Donec sagittis velit et magna euismod, vel
              aliquet nulla malesuada. Nunc pharetra massa lectus, a fermentum
              arcu volutpat vel.
            </p>
            <div class="mt-8">
              <a href="#" class="text-blue-500 hover:text-blue-600 font-medium">
                Learn more about us
                <span class="ml-2">&#8594;</span>
              </a>
            </div>
          </div>
          <div class="mt-12 md:mt-0">
            <img
              src="https://images.unsplash.com/photo-1531973576160-7125cd663d86"
              alt="About Us Image"
              class="object-cover rounded-lg shadow-md"
            ></img>
          </div>
        </div>
      </div>

      {/* <div className=" relative ">
        About Us
      </div>
      <div className="content">
        <div className="text">
          <h1>PICT Cloud Club</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
        </div>
        <div className="placeholder-image"></div>
      </div> */}
    </div>
  );
};

export default AboutUsPage;

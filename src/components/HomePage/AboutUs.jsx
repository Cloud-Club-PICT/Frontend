import React from "react";

const AboutUsPage = () => {
  const imageStyle = {
    width: "100%",
    height: "auto",
    borderRadius: "8px",
    position: "relative",
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center text-white p-5 overflow-hidden">
      <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          <div className="max-w-lg flex flex-col">
            <h1 className="text-text-200 text-[2rem] sm:text-[3rem] font-bold self-center">
              About Us:{" "}
              <span className="inline bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
                Who
              </span>{" "}
              are We?
            </h1>
            <p className="mt-4 text-gray-600 text-lg">
              AWS Cloud Club PICT is a student-driven community club that engages cloud beginners, enthusiasts, and interested folks to explore Cloud Computing and Amazon Web Services (AWS).
              <br />
              <br />
              What to expect from our club?
              <ul className="list-disc list-inside">
                <li>Beginner platform for students interested in cloud.</li>
                <li>Community of like-minded individuals to brainstorm your cloud ideas.</li>
                <li>Learn and grow as a community.</li>
                <li>Guidance and development of real-world projects.</li>
              </ul>
            </p>
            <div className="mt-8">
              <a href="#" className="text-blue-500 hover:text-blue-600 font-medium">
                Learn more about us
                <span className="ml-2">&#8594;</span>
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {[
              "https://images.pexels.com/photos/4069290/pexels-photo-4069290.jpeg",
              "https://images.pexels.com/photos/2102416/pexels-photo-2102416.jpeg",
              "https://images.pexels.com/photos/4065621/pexels-photo-4065621.jpeg",
            ].map((src, index) => (
              <div className="relative group aspect-w-1 aspect-h-1" key={index}>
                <img
                  src={src}
                  alt={`About Us Image ${index + 1}`}
                  style={imageStyle}
                  className="transition-transform duration-300 ease-in-out group-hover:scale-105 group-hover:brightness-110 group-hover:shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-transparent to-black opacity-0 group-hover:opacity-50 transition-opacity duration-300 ease-in-out"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;

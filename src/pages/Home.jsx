import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="antialiased text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-900 h-[100vh]"></div>

      <div
        className="relative bg-cover bg-center bg-no-repeat text-white font-sans h-[100vh] w-auto flex items-end justify-center"
        style={{ backgroundImage: "url(./images/AWS_Background.jpeg)" }}
      >
        <button
          onClick={() => navigate("/Intro")}
          className="bg-yellow-500 text-blue-900 px-7 py-3 rounded hover:bg-yellow-600 mb-10"
        >
          Join Us
        </button>
      </div>
    </>
  );
};

export default Home;

import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat text-white font-sans h-[91vh] w-auto flex items-end justify-center"
      style={{ backgroundImage: "url(./images/AWS_Background.jpeg)" }}
    >
      <button
        onClick={() => navigate("/Intro")}
        className="bg-yellow-500 text-blue-900 px-7 py-3 rounded hover:bg-yellow-600 mb-10"
      >
        Join Us
      </button>
    </div>
  );
};

export default Home;

import { useNavigate } from "react-router-dom";
import LaunchPage from "../components/Launch Page/LaunchPage";
const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <LaunchPage />
    </>
  );
};

export default Home;

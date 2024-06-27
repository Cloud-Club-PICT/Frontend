import LaunchPage from "../components/Launch Page/LaunchPage";
import NavBar from "../components/NavbarComponent/Navbar";
import { Event } from "./Event";

const Home = () => {
  return (
    <>
      <NavBar />
      <div className=" bg-gradient-to-b to-back-dark from-back-light">
        <LaunchPage />
        <Event />
        <Event />
      </div>
    </>
  );
};

export default Home;

import BlogsPage from "../components/HomePage/Blogs";
import Navbar from "../components/HomePage/Navbar";
import ContactUsPage from "../components/HomePage/ContactUs/ContactUs";
import EventsPage from "../components/HomePage/Events";
import MembersPage from "../components/HomePage/Members";
import Footer from "../components/HomePage/Footer";
import AboutUsPage from "../components/HomePage/AboutUs";
import LaunchpageMd from "../components/HomePage/Landing";
const Home = () => {
  return (
    <div className="bg-gradient-to-b from-back-dark via-back-light to-back-dark ">
      <Navbar />
      <LaunchpageMd />
      <AboutUsPage />
      <EventsPage />
      <BlogsPage />
      <MembersPage />
      <ContactUsPage />
      <Footer />
    </div>
  );
};

export default Home;

import BlogsPage from "../components/HomePage/Blogs";
import ContactUsPage from "../components/HomePage/ContactUs/ContactUs";
import EventsPage from "../components/HomePage/Events";
import MembersPage from "../components/HomePage/Members";
import Footer from "../components/HomePage/Footer";
import AboutUsPage from "../components/HomePage/AboutUs";
import Landing1 from "../components/HomePage/Landing1";

const Home = () => {
  return (
    <div className="w-screen bg-gradient-to-b from-back-dark via-back-light to-back-dark">
      <video
        loop
        muted
        autoPlay
        className="absolute h-screen w-screen object-cover -z-3 opacity-20"
      >
        <source src="/bg.mkv" />
      </video>
      
      <div id="home">
        <Landing1 />
      </div>
      
      <div id="about">
        <AboutUsPage />
      </div>
      
      <div id="events">
        <EventsPage />
      </div>
      
      <div id="blogs">
        <BlogsPage />
      </div>
      
      <div id="contact">
        <ContactUsPage />
      </div>
      
      <Footer />
    </div>
  );
};

export default Home;

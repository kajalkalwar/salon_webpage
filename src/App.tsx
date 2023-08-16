import "./App.css";
import Features from "./Components/Features/Features";
import Home from "./Components/Carousel/Home";
import Navbar from "./Components/Navbar/Navbar";
import AboutUs from "./Components/AboutUs/AboutUs";
import Offers from "./Components/Offers/Offers";
import Services from "./Components/Services/Services";
import Gallery from "./Components/Gallery/Gallery";
import DownloadApp from "./Components/DownloadApp/DownloadApp";
import ExpertTeam from "./Components/ExpertTeam/ExpertTeam";
import Testimonial from "./Components/Testimonials/Testimonial";
import OurBlogs from "./Components/Blogs/OurBlogs";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Features />
      <AboutUs />
      <Offers />
      <Services />
      <Gallery />
      <DownloadApp />
      <ExpertTeam />
      <Testimonial />
      <OurBlogs />
      <Footer />
    </div>
  );
}

export default App;

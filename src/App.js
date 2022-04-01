import MainBanner from "./components/MainBanner";
import AboutBanner from "./components/AboutBanner";
import VideoBanner from "./components/VideoBanner";
import NewsletterForm from "./components/NewsletterForm";
import Install from "./components/Install";
import Footer from "./components/Footer";
import Customized from "./components/Customized";
import "./public/stylesheets/index.css";
import "./public/fontello/css/fontello.css";
import ProductAdvisor from "./components/ProductAdvisor";

function App() {
  console.log("test");
  return (
    <div className="App">
      <MainBanner />
      <Customized />
      <ProductAdvisor />
      <AboutBanner />
      <VideoBanner />
      <NewsletterForm />
      <Install />
      <Footer />
    </div>
  );
}

export default App;

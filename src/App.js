import MainBanner from "./components/MainBanner";
import AboutBanner from "./components/AboutBanner";
import VideoBanner from "./components/VideoBanner";
import NewsletterForm from "./components/NewsletterForm";
import Install from "./components/Install";
import Footer from "./components/Footer";
import "./public/stylesheets/index.css";
import "./public/fontello/css/fontello.css";

function App() {
  console.log("test");
  return (
    <div className="App">
      <MainBanner />
      <AboutBanner />
      <VideoBanner />
      <NewsletterForm />
      <Install />
      <Footer />
    </div>
  );
}

export default App;

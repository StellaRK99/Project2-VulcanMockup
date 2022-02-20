import MainBanner from './components/MainBanner';
import Navbar from './components/Navbar'
import AboutBanner from './components/AboutBanner'
import VideoBanner from './components/VideoBanner'
import './public/stylesheets/index.css'

function App() {
  console.log("test")
  return (
    <div className="App">
      <MainBanner />
      <AboutBanner />
      <VideoBanner />
    </div>
  );
}

export default App;

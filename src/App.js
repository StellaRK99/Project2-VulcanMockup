import MainBanner from './components/MainBanner';
import AboutBanner from './components/AboutBanner'
import './public/stylesheets/index.css'

function App() {
  console.log("test")
  return (
    <div className="App">
      <MainBanner />
      <AboutBanner />
    </div>
  );
}

export default App;

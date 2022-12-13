import Info from './Components/Info';
import About from './Components/About';
import Interests from './Components/Interests';
import Footer from './Components/Footer';
import './App.css';

function App() {
  return (
    <div className='app--container'>
      <div className="app">
          <Info />
          <About />
          <Interests />
          <Footer />
      </div>
    </div>
  );
}

export default App;

import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Middle from './Components/Middle/Middle';
import Destination from './Components/Destinations/Destination';
import Portifolio from './Components/Portifolio/Portifolio';
import Questions from './Components/Questions/Questions';
import Review from './Components/Review/Review';
import Subscribe from './Components/Subscribe/Subscribe';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Middle/>
      <Destination/>
      <Portifolio/>
      <Review/>
      <Questions/>
      <Subscribe/>
      <Footer/>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import "@fontsource/montserrat";
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import News from './components/News';
import Spotlight from './components/Spotlight';
import Footer from './components/Footer';
import Sports from './components/Sports';

function App() {
  return (
    <div className="App">
      <Header/>
      <News/>
      <Spotlight/>
      <Sports/>
      <Footer/>

    </div>
  );
}

export default App;

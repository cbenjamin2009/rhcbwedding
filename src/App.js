import './App.css';
import Header from './Components/Header'
import Nav from './Components/Nav'
import Venue from './Components/Venue'
import HeaderImage from './Components/HeaderImage'
import Registry from './Components/Registry'
import Hotels from './Components/Hotels'
import Countdown from './Components/Countdown'
import Rsvp from './Components/Rsvp';
import Footer from './Components/Footer';


function App() {
  
  return (
    <div className="App">
      <Nav/>
    <Header/>
    <div className="flexHeader">
    <HeaderImage/>
    <Countdown value={"01/29/2022 15:00:00"}/>
    </div>
    <Registry/>
    <Venue/>
    <Hotels/>
    <Rsvp/>
    <Footer/>
    </div>
  );
}

export default App;

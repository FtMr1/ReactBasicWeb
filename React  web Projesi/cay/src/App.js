
import './App.css';
import { Route , Routes} from 'react-router-dom';
import Home from './companents/Home';
import {Menu }from './companents/Menu';
import About from './companents/About';
import Contact from './companents/Contact';
import Navbar from './companents/Navbar';
import Footer from './companents/Footer';
function App() {
  return (
    <div className="App">
          <Navbar/>
      <Routes>     
        <Route path='/' exact element={<Home/>}/>
        <Route path='/menü' exact element={<Menu/>}/>
        <Route path='about' exact element={<About/>}/>
        <Route path='contact' exact element={<Contact/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;

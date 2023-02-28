import React from 'react';
import Navbar from './components/Navbar/navbar';
import Home  from './pages/home';
import Fashion from './pages/fashion';
import Justgreen from './pages/justgreen';
import TheWayHome from './pages/wayhome';
import WindowSeat from './pages/window';
import StreetFood from './pages/streetfood';
import Kafka from './pages/kafka';
import CV from './pages/CV';
import Footer from './components/Footer/footer';
import {Route,Routes} from 'react-router-dom';
import './App.css';
import './style/nav.css';
import './style/layout_home.css';
import './style/lay_out_fash_str.css';
import './style/green.css';
import './style/wayhome.css';
import './style/foot.css';
import './style/slide.css';



function App() {
  return (
    <div className='App-header'>
      <Navbar/>
        <div className='container'>
          <Routes>
            <Route path ="/" element={<Home/>}/>
            <Route path ="/fashion" element={<Fashion/>}/>
            <Route path ="/justgreen" element={<Justgreen/>}/>
            <Route path ="/wayhome" element={<TheWayHome/>}/>
            <Route path ="/windowseat" element={<WindowSeat/>}/>
            <Route path ="/kafka" element={<Kafka/>}/>
            <Route path ="/streetfood" element={<StreetFood/>}/>
            <Route path ="/cv" element={<CV/>}/>
          </Routes>
        </div>
      <Footer/>
    </div>
  );
}

export default App;

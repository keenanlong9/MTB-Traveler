import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Currency from './pages/Currency/Currency';
import Language from './pages/Language/Language';
import Explore from './pages/Explore/Explore';
import Location from './pages/Location/Location';
import './styles.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/currency' element={<Currency />} />
          <Route path='/language' element={<Language />} />
          <Route path='/explore' element={<Explore/>}/>
          <Route path='/location' element={<Location/>}/>
          <Route path='*' element={<Home />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;

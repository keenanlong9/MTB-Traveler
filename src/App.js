import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Currency from './pages/Currency';
import Language from './pages/Language';
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
          <Route path='*' element={<Home />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;

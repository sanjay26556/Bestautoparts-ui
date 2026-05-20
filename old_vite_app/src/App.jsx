import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Brands from './pages/Brands';
import Marketplace from './pages/Marketplace';
import Models from './pages/Models';
import Services from './pages/Services';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Login from './pages/Login';

// New Pages
import BMWModels from './pages/BMWModels';
import HyundaiModels from './pages/HyundaiModels';
import TataModels from './pages/TataModels';
import MahindraModels from './pages/MahindraModels';
import MarutiSuzukiModels from './pages/MarutiSuzukiModels';

import MahindraXUV700 from './pages/MahindraXUV700';
import MarutiSwift from './pages/MarutiSwift';
import TataNexon from './pages/TataNexon';

function App() {
  return (
    <Router>
      <div className="bg-background text-on-surface font-body-md antialiased overflow-x-hidden" data-mode="connect">
        <Header />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/brands" element={<Brands />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/models" element={<Models />} />
          <Route path="/services" element={<Services />} />
          <Route path="/product" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          
          {/* Brand Model Pages */}
          <Route path="/models/bmw" element={<BMWModels />} />
          <Route path="/models/hyundai" element={<HyundaiModels />} />
          <Route path="/models/tata" element={<TataModels />} />
          <Route path="/models/mahindra" element={<MahindraModels />} />
          <Route path="/models/maruti-suzuki" element={<MarutiSuzukiModels />} />

          {/* Specific Car Variant Pages */}
          <Route path="/models/mahindra/xuv700" element={<MahindraXUV700 />} />
          <Route path="/models/maruti-suzuki/swift" element={<MarutiSwift />} />
          <Route path="/models/tata/nexon" element={<TataNexon />} />
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;

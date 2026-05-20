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
import AudiModels from './pages/AudiModels';
import ToyotaModels from './pages/ToyotaModels';
import HondaModels from './pages/HondaModels';
import MercedesModels from './pages/MercedesModels';
import PorscheModels from './pages/PorscheModels';
import VolkswagenModels from './pages/VolkswagenModels';
import KiaModels from './pages/KiaModels';

import Offers from './pages/Offers';
import Profile from './pages/Profile';
import CarDetail from './pages/CarDetail';

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
          <Route path="/models/audi" element={<AudiModels />} />
          <Route path="/models/toyota" element={<ToyotaModels />} />
          <Route path="/models/honda" element={<HondaModels />} />
          <Route path="/models/mercedes" element={<MercedesModels />} />
          <Route path="/models/porsche" element={<PorscheModels />} />
          <Route path="/models/volkswagen" element={<VolkswagenModels />} />
          <Route path="/models/kia" element={<KiaModels />} />

          {/* Offers & Profile & Dynamic Car Details */}
          <Route path="/offers" element={<Offers />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/models/:brand/:carId" element={<CarDetail />} />
          
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

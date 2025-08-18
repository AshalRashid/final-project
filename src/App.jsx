// App.jsx
import { Routes, Route } from 'react-router-dom';
import './App.css';

import Layout from './Component/Routers/Layout';
import Home from './Component/Routers/Home';
import HeroSection from './Component/HerSection';
import ProductSection from './Component/ProductCard';
import HeroSection2 from './Component/HeroSection2';
import Shop from './Component/Shop/Shop';
import Contact from "./Component/Contact/Contact" 


export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

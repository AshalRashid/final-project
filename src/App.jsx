// App.jsx
import { Routes, Route } from 'react-router-dom';
import './index.css';

import Layout from '../src/Pages/Routers/Layout';
import Home from '../src/Pages/Routers/Home';
import HeroSection from './Component/HerSection';
import ProductSection from './Component/ProductCard';
import HeroSection2 from './Component/HeroSection2';
import Shop from '../src/Pages/Shop/Shop';
import Contact from "../src/Pages/Contact/Contact" 


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

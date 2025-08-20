import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar'; 
import Footer from '../Fotter';

export default function Layout() {
  return (
    <>
       {/* <Navbar /> */}
      <Outlet /> 
      <Footer/>
    </>
  );
}

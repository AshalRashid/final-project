import { Outlet } from 'react-router-dom';
import Navbar from '../../Component/Navbar'; 
import Footer from '../../Component/Fotter';

export default function Layout() {
  return (
    <>
       {/* <Navbar /> */}
      <Outlet /> 
      <Footer/>
    </>
  );
}

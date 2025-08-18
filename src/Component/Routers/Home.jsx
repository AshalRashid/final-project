import Navbar from '../Navbar';
import BrandSection from '../Brand';
import Card from '../Card';
import card1 from '../../assets/Images/Card1.jpg';
import card2 from '../../assets/Images/Card2.jpg';
import card3 from '../../assets/Images/Card3.jpg';
import card4 from '../../assets/Images/Card4.jpg';
import HeroSection from '../HerSection';
import ProductSection from '../ProductCard';
import HeroSection2 from '../HeroSection2';
import Carousel from '../Carousel';
import HappyClient from '../HappyCLient';
import Footer from '../Fotter';
import Swiper_card from '../Swiper_card';

export default function Home() {
  return (
    <>
      <Carousel/>
      <BrandSection />
      <div className="grid md:grid-cols-3 md:grid-rows-2 md:gap-6 md:p-6 p-4 grid-cols-1 gap-3  h-100 md:h-150 md:grid md:grid-col-1 md:gap-12 sm:grid sm:grid-col-1 sm:gap-12 ">
        <div className="row-span-2">
          <Card image={card1} productCount={10} title="Wireless Headphones" />
        </div>
        <div className="row-span-2 sm:col-span-1 md:col-span-1 gap-2">
          <Card image={card2} productCount={20} title="Pro Sound Series" />
        </div>
        <Card image={card3} productCount={15} title="Smart Speakers" />
        <Card image={card4} productCount={12} title="Noise Cancelling" />
      </div>
      <HeroSection />
      <ProductSection />
      <HeroSection2 />
      <Swiper_card/>
      <HappyClient/>
    </>
  );
}

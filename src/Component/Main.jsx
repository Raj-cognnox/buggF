import AdBanner from './AdBanner';
import Footer from './Footer';
import Header from './Header';
import Testimonial from './Testimonial';
import HeroSlider from './HeroSlider';
import LivePrice from './LivePrice';
import LiveSpotMarkets from './LiveSpotMarkets';
import PlateForm from './PlateForm';

function Main() {
  return (
    <div id="">
      <Header/>
      <HeroSlider/>
      <LivePrice/>
      <AdBanner/>
      <LiveSpotMarkets/>
      <PlateForm/>
      <Testimonial/>
      <Footer/>
    </div>
  );
}

export default Main;

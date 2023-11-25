
import Adventure from "../Adventure/Adventure";
import Banner from "../Banner/Banner";
import Booking from "../Booking/Booking";
import Discounts from "../Discounts/Discounts";
import Special from "../Special/Special";
import MySwiper from "../Swiper/MySwiper";
import Testimonials from "../Testimonials/Testimonials";





const Home = () => {
    return (
        <div className="bg-white">
 <Banner></Banner>
 <Adventure></Adventure>
<MySwiper></MySwiper>
 <Discounts></Discounts>
 <Booking></Booking>
 <Testimonials></Testimonials>
 <Special></Special>
         
         
          
        </div>
    );
};

export default Home;
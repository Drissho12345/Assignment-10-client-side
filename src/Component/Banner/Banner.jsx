
import { EffectFade, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
const Banner = () => {
    return (
        <Swiper
        effect={"fade"}
        fadeEffect={{ crossFade: true }}
        slidesPerView={1}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, EffectFade]}
        className="mySwiper"
            >
                <div className="carousel w-full">
                    {/* slider 1 */}
                    <SwiperSlide>
                        <div id="slide1" className="carousel-item relative w-full">
                            <img src="https://cdn.kimkim.com/files/a/images/97533ef737e50965ab1c7c9918ceae77a1ad6ee7/original-8e2883c497a4c7468b5b948bf22783b0.jpg" className="w-full h-[500px]" />
                        </div>
                    </SwiperSlide>
                    {/* slider 2 */}
                    <SwiperSlide>
                        <div id="slide2" className="carousel-item relative w-full">
                            <img src="https://a.cdn-hotels.com/gdcs/production172/d459/3af9262b-3d8b-40c6-b61d-e37ae1aa90aa.jpg?impolicy=fcrop&w=800&h=533&q=medium" className="w-full h-[500px]" />
                        </div> 
                    </SwiperSlide>
                    {/* slider 3 */}
                    <SwiperSlide>
                        <div id="slide3" className="carousel-item relative w-full">
                            <img src="https://imageio.forbes.com/specials-images/imageserve/659693508de9ed1c25a60688/Wat-Arun-is-a-Buddhist-temple-in-Bangkok-Yai-district-of-Bangkok--Thailand--Wat-Arun/960x0.jpg?height=473&width=711&fit=bounds" className="w-full h-[500px]" />
                        </div>
                    </SwiperSlide>
                    {/* slider 4 */}
                    <SwiperSlide>
                        <div id="slide4" className="carousel-item relative w-full">
                            <img src="https://cdn.educba.com/academy/wp-content/uploads/2023/01/Places-to-Vist-in-Thailand-1.jpg" className="w-full h-[500px]" />
                        </div>
                    </SwiperSlide>
               </div>
       </Swiper>
    );
};

export default Banner;
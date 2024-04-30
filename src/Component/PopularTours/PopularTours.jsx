// animation
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
const PopularTours = () => {
    // animation
    useEffect(() => {
        AOS.init({
          duration: 2000,
        });
      }, []);
    return (
        <div>
            <div className='text-center'>
                <h1 className="font-bold text-5xl">Popular Tours</h1>
                <p className="mt-3 text-[16px]">A tourist spot, also referred to as a tourist attraction or destination, is a discernible  geographical <br /> location or site that has been intentionally developed or preserved for the purpose of attracting and accommodating tourists.....</p>
            </div>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-10 mt-12" data-aos="zoom-in-right">
                <div>
                    <img className="h-[400px] w-full" src="http://wahabali.com/work/travelu/images/placeholder/placeholder-01.png" alt="" />
                </div>
                <div>
                    <h1 className="font-bold text-5xl">Popular Tours</h1>
                    <p className="mt-3 text-[16px]">A tourist spot, also referred to as a tourist attraction or destination, is a discernible  geographical  location or site that has been intentionally developed or preserved for the purpose of attracting and accommodating tourists.....</p>
                    <div className="flex mt-8 gap-5">
                        <p><span className="font-bold text-[18px]">Bangladesh </span><i className="text-red-400">(07)</i></p>
                        <p><span className="font-bold text-[18px]">Thailand </span><i className="text-red-400 text-sm">(09)</i></p>
                        <p><span className="font-bold text-[18px]">Indonesia</span> <i className="text-red-400 text-sm">(05)</i></p>
                    </div>
                    <div className="flex mt-4 gap-8">
                        <p><span className="font-bold text-[18px]">Malaysia</span> <i className="text-red-400 text-sm">(07)</i></p>
                        <p><span className="font-bold text-[18px]">Vietnam</span> <i className="text-red-400 text-sm">(07)</i></p>
                    </div>
                    <p className="mt-4"><span className="font-bold text-[18px]">Cambodia</span> <i className="text-red-400 text-sm">(07)</i></p>
                    <button className="btn mt-10 bg-orange-200">ALL DESTINATIONS</button>
                </div>
           </div>
        </div>
    );
};

export default PopularTours;
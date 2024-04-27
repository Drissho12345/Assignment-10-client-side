import { LuFacebook } from "react-icons/lu";
import { FaCameraRetro } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
const GuidesSection = () => {
    return (
        <div>
            <div className="text-center mt-16 mb-10">
                <h1 className="font-bold mb-6 text-4xl">Meet The Guides</h1>
                <p>Tourist guides can offer a range of services, including city tours, museum visits, outdoor excursions, <br /> and specialized thematic tours. They may lead groups or provide personalized experiences for individuals or small parties.</p>
            </div>
            <div className="mb-16 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 justify-around">
                {/* first */}
              <div className=" shadow-2xl p-6 rounded-3xl">
                <div className="flex justify-center items-center">
                    <img className="w-full h-[300px]" src="https://t4.ftcdn.net/jpg/06/44/60/95/360_F_644609560_0IpYpZWJPahX4XeZi4Dyh4OOC4RCulKB.jpg" alt="" />
                </div>
                <div className=" pt-5">
                    <div className="flex pb-5 justify-between gap-16">
                        <div>
                            <h2 className="font-bold text-xl">Martin Blake</h2>
                            <h3 className="text-gray-400 bold text-[16]">Adventure Master</h3>
                        </div>
                        <div className="flex text-xl gap-4">
                            <LuFacebook className="cursor-pointer"/>
                            <FaCameraRetro className="cursor-pointer"/>
                            <FiTwitter className="cursor-pointer"/>
                        </div>
                    </div>
                    <hr />
                    <p className="pt-2">Tourist guides can offer a range of services, including city tours, museum visits, outdoor excursions, and specialized thematic tours.</p>
                </div>
              </div>
              {/* second */}
              <div className=" shadow-2xl p-6 rounded-3xl">
                <div className="flex justify-center items-center">
                    <img className="w-full h-[300px]" src="https://www.xola.com/wp-content/uploads/2023/10/happy-tour-guide.png" alt="" />
                </div>
                <div className=" pt-5">
                    <div className="flex pb-5 justify-between gap-16">
                        <div>
                            <h2 className="font-bold text-xl">Martin Blake</h2>
                            <h3 className="text-gray-400 bold text-[16]">Adventure Master</h3>
                        </div>
                        <div className="flex text-xl gap-4">
                            <LuFacebook className="cursor-pointer"/>
                            <FaCameraRetro className="cursor-pointer"/>
                            <FiTwitter className="cursor-pointer"/>
                        </div>
                    </div>
                    <hr />
                    <p className="pt-2">Tourist guides can offer a range of services, including city tours, museum visits, outdoor excursions, and specialized thematic tours.</p>
                </div>
              </div>
              {/* third */}
              <div className=" shadow-2xl p-6 rounded-3xl">
                <div className="flex justify-center items-center">
                    <img className="w-full h-[300px]" src="https://img.freepik.com/premium-photo/girl-man-are-walking-around-old-city-looking-map-happy-travel-concept-generative-ai_260899-3644.jpg" alt="" />
                </div>
                <div className=" pt-5">
                    <div className="flex pb-5 justify-between gap-16">
                        <div>
                            <h2 className="font-bold text-xl">Martin Blake</h2>
                            <h3 className="text-gray-400 bold text-[16]">Adventure Master</h3>
                        </div>
                        <div className="flex text-xl gap-4">
                            <LuFacebook className="cursor-pointer"/>
                            <FaCameraRetro className="cursor-pointer"/>
                            <FiTwitter className="cursor-pointer"/>
                        </div>
                    </div>
                    <hr />
                    <p className="pt-2">Tourist guides can offer a range of services, including city tours, museum visits, outdoor excursions, and specialized thematic tours.</p>
                </div>
              </div>
              
            </div>
        </div>
    );
};

export default GuidesSection;
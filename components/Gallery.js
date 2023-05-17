import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Autoplay } from "swiper";

import G1 from "../assets/g1.jpeg"
import G2 from "../assets/g2.jpeg"
import G3 from "../assets/g3.jpeg"
import G4 from "../assets/g4.jpeg"
import G5 from "../assets/g5.jpeg"
import G6 from "../assets/g6.jpeg"
import G7 from "../assets/g7.jpeg"
import G9 from "../assets/g9.jpeg"



const Gallery = () => {
    return (
        <div className="bg-gray-200  py-[4rem] text-center">
            <div className="text w-[70%] md:w-[30%] mx-auto">
                <h2 className="text-gray-600 text-2xl font-bold mb-[1rem]">Gallery</h2>
                <p className="text-base md:text-xl">Urna sit adipiscing donec egestas nisl libero. Orci penatibus magna sed sit lacinia eget diam.</p>
            </div>
            {/* main gallery */}
            <div className="gallery mt-[2rem]">
                <Swiper
                    slidesPerView={5}
                    spaceBetween={30}
                    freeMode={true}
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    // pagination={{
                    // clickable: true,
                    // }}
                    modules={[FreeMode, Autoplay]}
                    className="w-[100%]"
                >
                    <SwiperSlide className="">
                        <div className="">
                            <Image src={G1} className="w-[20rem] h-[12rem]" />
                        </div>
                        {/* <h2 className="mt-[1rem] text-left font-bold text-[.7rem] md:text-xl">Dictum magna</h2> */}
                    </SwiperSlide>
                    <SwiperSlide className="w-[20rem] h-[12rem]">
                        <div className="">
                            <Image src={G2} className="w-[20rem] h-[12rem]"  />
                        </div>
                        {/* <h2 className="mt-[1rem] text-left font-bold text-[.7rem] md:text-xl">Dictum magna</h2> */}
                    </SwiperSlide>
                    <SwiperSlide className="">
                        <div className="">
                            <Image src={G3} className="w-[20rem] h-[12rem]" />
                        </div>
                        {/* <h2 className="mt-[1rem] text-left font-bold text-[.7rem] md:text-xl">Dictum magna</h2> */}
                    </SwiperSlide>
                    <SwiperSlide className="">
                        <div className="">
                            <Image src={G4} className="w-[20rem] h-[12rem]"  />
                        </div>
                        {/* <h2 className="mt-[1rem] text-left font-bold text-[.7rem] md:text-xl">Dictum magna</h2> */}
                    </SwiperSlide>
                    <SwiperSlide className="">
                        <div className="">
                            <Image src={G1} className="w-[20rem] h-[12rem]" />
                        </div>
                        {/* <h2 className="mt-[1rem] text-left font-bold text-[.7rem] md:text-xl">Dictum magna</h2> */}
                    </SwiperSlide>
                    <SwiperSlide className="">
                        <div className="">
                            <Image src={G2} className="w-[20rem] h-[12rem]"/>
                        </div>
                        {/* <h2 className="mt-[1rem] text-left font-bold text-[.7rem] md:text-xl">Dictum magna</h2> */}
                    </SwiperSlide>
                    <SwiperSlide className="">
                        <div className="">
                            <Image src={G3} className="w-[20rem] h-[12rem]" />
                        </div>
                        {/* <h2 className="mt-[1rem] text-left font-bold text-[.7rem] md:text-xl">Dictum magna</h2> */}
                    </SwiperSlide>
                    <SwiperSlide className="">
                        <div className="">
                            <Image src={G4} className="w-[20rem] h-[12rem]"  />
                        </div>
                        {/* <h2 className="mt-[1rem] text-left font-bold text-[.7rem] md:text-xl">Dictum magna</h2> */}
                    </SwiperSlide>
                    <SwiperSlide className="">
                        <div className="">
                            <Image src={G5} className="w-[20rem] h-[12rem] "  />
                        </div>
                        {/* <h2 className="mt-[1rem] text-left font-bold text-[.7rem] md:text-xl">Dictum magna</h2> */}
                    </SwiperSlide>
                    <SwiperSlide className="">
                        <div className="">
                            <Image src={G6} className="w-[20rem] h-[12rem]" />
                        </div>
                        {/* <h2 className="mt-[1rem] text-left font-bold text-[.7rem] md:text-xl">Dictum magna</h2> */}
                    </SwiperSlide>
                    <SwiperSlide className="">
                        <div className="">
                            <Image src={G7} className="w-[20rem] h-[12rem]" />
                        </div>
                        {/* <h2 className="mt-[1rem] text-left font-bold text-[.7rem] md:text-xl">Dictum magna</h2> */}
                    </SwiperSlide>
                
                    <SwiperSlide className="">
                        <div className="">
                            <Image src={G9} className="w-[20rem] h-[12rem]"  />
                        </div>
                        {/* <h2 className="mt-[1rem] text-left font-bold text-[.7rem] md:text-xl">Dictum magna</h2> */}
                    </SwiperSlide>

                    <SwiperSlide className="">
                        <div className="">
                            <Image src={G1} className="w-[20rem] h-[12rem]"  />
                        </div>
                        {/* <h2 className="mt-[1rem] text-left font-bold text-[.7rem] md:text-xl">Dictum magna</h2> */}
                    </SwiperSlide>
                    <SwiperSlide className="">
                        <div className="">
                            <Image src={G2} className="w-[20rem] h-[12rem]"  />
                        </div>
                        {/* <h2 className="mt-[1rem] text-left font-bold text-[.7rem] md:text-xl">Dictum magna</h2> */}
                    </SwiperSlide>
                    <SwiperSlide className="">
                        <div className="">
                            <Image src={G3} className="w-[20rem] h-[12rem]"  />
                        </div>
                        {/* <h2 className="mt-[1rem] text-left font-bold text-[.7rem] md:text-xl">Dictum magna</h2> */}
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default Gallery
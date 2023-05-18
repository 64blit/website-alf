import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { BrowserView, MobileView } from 'react-device-detect';

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
import G8 from "../assets/g9.jpeg"
import G9 from "../assets/new/1beach.jpg"
import G10 from "../assets/new/1community.jpg"
import G11 from "../assets/new/1flute.jpg"
import G12 from "../assets/new/1ice.jpg"
import G13 from "../assets/new/1kid.jpg"
import G14 from "../assets/new/1speaker.jpg"
import G15 from "../assets/new/1team.jpg"
import G16 from "../assets/new/1territory.jpg"



const Gallery = () =>
{
    return (

        <>
            <BrowserView>
                <div className="bg-gray-200  py-[4rem] text-center">
                    <div className="text w-[70%] md:w-[30%] mx-auto">
                        <h2 className="text-gray-600 text-2xl font-bold mb-[1rem]">Gallery</h2>
                        {/* <p className="text-base md:text-xl">Urna sit adipiscing donec egestas nisl libero. Orci penatibus magna sed sit lacinia eget diam.</p> */}
                    </div>
                    {/* main gallery */}
                    <div className="gallery mt-[2rem]">
                        <Swiper
                            slidesPerView={4}
                            spaceBetween={0}
                            freeMode={true}
                            loop={true}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            modules={[ FreeMode, Autoplay ]}
                            className="w-[100%]"
                        >
                            <SwiperSlide className="">
                                <div className="">
                                    <Image src={G1} className="transition duration-200  w-[20rem] h-[20rem] object-cover hover:scale-150" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide >
                                <div className="">
                                    <Image src={G2} className="transition duration-200  w-[20rem] h-[20rem] object-cover hover:scale-150" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="">
                                <div className="">
                                    <Image src={G3} className="transition duration-200  w-[20rem] h-[20rem] object-cover hover:scale-150" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="">
                                <div className="">
                                    <Image src={G4} className="transition duration-200  w-[20rem] h-[20rem] object-cover hover:scale-150" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="">
                                <div className="">
                                    <Image src={G5} className="transition duration-200  w-[20rem] h-[20rem] object-cover hover:scale-150" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="">
                                <div className="">
                                    <Image src={G6} className="transition duration-200  w-[20rem] h-[20rem] object-cover hover:scale-150" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="">
                                <div className="">
                                    <Image src={G7} className="transition duration-200  w-[20rem] h-[20rem] object-cover hover:scale-150" />
                                </div>
                            </SwiperSlide>

                            <SwiperSlide className="">
                                <div className="">
                                    <Image src={G8} className="transition duration-200  w-[20rem] h-[20rem] object-cover hover:scale-150" />
                                </div>
                            </SwiperSlide>

                            <SwiperSlide className="">
                                <div className="">
                                    <Image src={G9} className="transition duration-200  w-[20rem] h-[20rem] object-cover hover:scale-150" />
                                </div>
                            </SwiperSlide>

                            <SwiperSlide className="">
                                <div className="">
                                    <Image src={G10} className="transition duration-200  w-[20rem] h-[20rem] object-cover hover:scale-150" />
                                </div>
                            </SwiperSlide>

                            <SwiperSlide className="">
                                <div className="">
                                    <Image src={G11} className="transition duration-200  w-[20rem] h-[20rem] object-cover hover:scale-150" />
                                </div>
                            </SwiperSlide>

                            <SwiperSlide className="">
                                <div className="">
                                    <Image src={G12} className="transition duration-200  w-[20rem] h-[20rem] object-cover hover:scale-150" />
                                </div>
                            </SwiperSlide>

                            <SwiperSlide className="">
                                <div className="">
                                    <Image src={G13} className="transition duration-200  w-[20rem] h-[20rem] object-cover hover:scale-150" />
                                </div>
                            </SwiperSlide>

                            <SwiperSlide className="">
                                <div className="">
                                    <Image src={G14} className="transition duration-200  w-[20rem] h-[20rem] object-cover hover:scale-150" />
                                </div>
                            </SwiperSlide>

                            <SwiperSlide className="">
                                <div className="">
                                    <Image src={G15} className="transition duration-200  w-[20rem] h-[20rem] object-cover hover:scale-150" />
                                </div>
                            </SwiperSlide>

                            <SwiperSlide className="">
                                <div className="">
                                    <Image src={G16} className="transition duration-200  w-[20rem] h-[20rem] object-cover hover:scale-150" />
                                </div>
                            </SwiperSlide>





                        </Swiper>
                    </div>
                </div>
            </BrowserView >
            <MobileView>
                <Carousel autoplay={true}>
                    <div>
                        <Image className="h-[25rem] w-[25rem] object-contain" src={G1} />
                    </div>
                    <div>
                        <Image className="h-[25rem] w-[25rem] object-contain" src={G2} />
                    </div>
                    <div>
                        <Image className="h-[25rem] w-[25rem] object-contain" src={G3} />
                    </div>
                    <div>
                        <Image className="h-[25rem] w-[25rem] object-contain" src={G4} />
                    </div>
                    <div>
                        <Image className="h-[25rem] w-[25rem] object-contain" src={G5} />
                    </div>
                    <div>
                        <Image className="h-[25rem] w-[25rem] object-contain" src={G6} />
                    </div>
                    <div>
                        <Image className="h-[25rem] w-[25rem] object-contain" src={G7} />
                    </div>
                    <div>
                        <Image className="h-[25rem] w-[25rem] object-contain" src={G8} />
                    </div>
                </Carousel>
            </MobileView>
        </>
    )
}

export default Gallery

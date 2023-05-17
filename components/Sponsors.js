import Image from "next/image";

import MainDLA from "../assets/new/main_dla_piper.png";
import MainFunai from "../assets/new/main_funai.png";
import MainLiving from "../assets/new/main_living_tongues.png";
import MainPando from "../assets/new/main_pando.png";
import PatnersDocumist from "../assets/new/patners_documist.jpg";
import PartnersIns from "../assets/new/patners_instituto.jpg";
import PatnersManu from "../assets/new/patners_manaus.jpg"

const Sponsors = () => {
    return (
        <div className="relative  w-[100%] h-[20vh] md:h-[20vh] overflow-x-hidden">
            {/* <div className="slide animate absolute flex ">
                <Image src={SponsorsImage} className="w-[100%]" alt="sponsors" />
                <Image src={SponsorsImage} className="w-[100%]" alt="sponsors" />
            </div> */}

            {/* Desktop Slider */}
            <div className="hidden slide animate absolute md:flex">
                <div className="first-slide w-[100%] grid grid-cols-7">
                    <div className="img w-full flex justify-center items-center h-[10rem]">
                        <Image src={MainDLA} className="w-[80%]" alt="" />
                    </div>
                    <div className="img w-full flex justify-center items-center h-[10rem]">
                        <Image src={MainFunai} className="w-[80%]" alt="" />
                    </div>
                    <div className="img w-full flex justify-center items-center h-[10rem]">
                        <Image src={MainLiving} className="w-[80%]" alt="" />
                    </div>
                    <div className="img w-full flex justify-center items-center h-[10rem]">
                        <Image src={MainPando} className="w-[70%]" alt="" />
                    </div>
                    <div className="img w-full flex justify-center items-center h-[10rem]">
                        <Image src={PatnersDocumist} className="w-[80%]" alt="" />
                    </div>
                    <div className="img w-full flex justify-center items-center h-[10rem]">
                        <Image src={PartnersIns} className="w-[80%]" alt="" />
                    </div>
                    <div className="img w-full flex justify-center items-center h-[10rem]">
                        <Image src={PatnersManu} className="w-[80%]" alt="" />
                    </div>
                </div>
                <div className="first-slide w-[100%] grid grid-cols-7">
                    <div className="img w-full flex justify-center items-center h-[10rem]">
                        <Image src={MainDLA} className="w-[80%]" alt="" />
                    </div>
                    <div className="img w-full flex justify-center items-center h-[10rem]">
                        <Image src={MainFunai} className="w-[80%]" alt="" />
                    </div>
                    <div className="img w-full flex justify-center items-center h-[10rem]">
                        <Image src={MainLiving} className="w-[80%]" alt="" />
                    </div>
                    <div className="img w-full flex justify-center items-center h-[10rem]">
                        <Image src={MainPando} className="w-[70%]" alt="" />
                    </div>
                    <div className="img w-full flex justify-center items-center h-[10rem]">
                        <Image src={PatnersDocumist} className="w-[80%]" alt="" />
                    </div>
                    <div className="img w-full flex justify-center items-center h-[10rem]">
                        <Image src={PartnersIns} className="w-[80%]" alt="" />
                    </div>
                    <div className="img w-full flex justify-center items-center h-[10rem]">
                        <Image src={PatnersManu} className="w-[80%]" alt="" />
                    </div>
                </div>
            </div>

            {/* Mobile Slider */}
            <div className="slide mobile-animate absolute flex md:hidden gap-4">
                <div className="first-slide w-[100%] grid grid-cols-4 gap-4">
                    <div className="img w-full flex justify-center items-center h-[10rem]">
                        <Image src={MainDLA} className="w-[100%]" alt="" />
                    </div>
                    <div className="img w-full flex justify-center items-center h-[10rem]">
                        <Image src={MainFunai} className="w-[100%]" alt="" />
                    </div>
                    <div className="img w-full flex justify-center items-center h-[10rem]">
                        <Image src={MainLiving} className="w-[100%]" alt="" />
                    </div>
                </div>
                <div className="first-slide w-[100%] grid grid-cols-4 gap-4">
                    <div className="img w-full flex justify-center items-center h-[10rem]">
                        <Image src={MainPando} className="w-[70%]" alt="" />
                    </div>
                    <div className="img w-full flex justify-center items-center h-[10rem]">
                        <Image src={PatnersDocumist} className="w-[100%]" alt="" />
                    </div>
                    <div className="img w-full flex justify-center items-center h-[10rem]">
                        <Image src={PartnersIns} className="w-[100%]" alt="" />
                    </div>
                    <div className="img w-full flex justify-center items-center h-[10rem]">
                        <Image src={PatnersManu} className="w-[100%]" alt="" />
                    </div>
                </div>
                <div className="first-slide w-[100%] grid grid-cols-4 gap-4">
                    <div className="img w-full flex justify-center items-center h-[10rem]">
                        <Image src={MainDLA} className="w-[100%]" alt="" />
                    </div>
                    <div className="img w-full flex justify-center items-center h-[10rem]">
                        <Image src={MainFunai} className="w-[100%]" alt="" />
                    </div>
                    <div className="img w-full flex justify-center items-center h-[10rem]">
                        <Image src={MainLiving} className="w-[100%]" alt="" />
                    </div>
                </div>
                <div className="first-slide w-[100%] grid grid-cols-4 gap-4">
                    <div className="img w-full flex justify-center items-center h-[10rem]">
                        <Image src={MainPando} className="w-[100%]" alt="" />
                    </div>
                    <div className="img w-full flex justify-center items-center h-[10rem]">
                        <Image src={PatnersDocumist} className="w-[100%]" alt="" />
                    </div>
                    <div className="img w-full flex justify-center items-center h-[10rem]">
                        <Image src={PartnersIns} className="w-[100%]" alt="" />
                    </div>
                    <div className="img w-full flex justify-center items-center h-[10rem]">
                        <Image src={PatnersManu} className="w-[100%]" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sponsors
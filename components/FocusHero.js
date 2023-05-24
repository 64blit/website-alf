import Nav from "./Nav";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

import FocusHeaderImg from "../assets/focusHeader.png"


const FocusHero = () =>
{
    return (
        <section className="overflow-hidden relative">
            <div className="image absolute top-0 right-0 left-0 bottom-0">
                <Image src={FocusHeaderImg} className="w-full h-full object-cover" width={500} height={500} />
            </div>
            <div className="relative main-hero-section w-full h-full ">
                <Nav />
                <section className="h-[80%] flex justify-center items-center py-[5rem]">
                    <div className="w-[90vw] md:w-[70vw] lg:w-[50vw] text-center flex flex-col gap-[1.5rem] lg:gap-[4rem]">
                        <header className="text-white font-bold text-[2rem] md:text-[2.7rem] lg:text-[4rem]">Our Regional Focus</header>
                        <p className="text-white text-xl">The American Language Fund is an NGO dedicated to preserving the cultural heritage of indigenous communities and the ecosystems they inhabit. The organization focuses its efforts on four distinct regions: the Amazon Basin, the Peruvian Amazon, the Metropolitan Area of Manaus, and the Bolivian Chaco. Each of these regions presents unique challenges and opportunities for The American Language Fund to make a positive impact.</p>
                        {/* <div className="cta flex items-center justify-center gap-2">
                            <Link href="">
                                <div className="btn border-b text-white border-slate-500 font-bold py-4 flex items-center gap-5">Learn More <BsArrowRight /></div>
                            </Link>
                        </div> */}
                    </div>
                </section>
            </div>
        </section>
    )
}

export default FocusHero

import React, { useState } from 'react';
import Nav from "./Nav";
import Image from "next/image";
import Link from "next/link";
import { BsFillPlayFill } from "react-icons/bs";
import ModalVideo from 'react-modal-video';
import People from "../assets/header.png";


const HeroSection = () =>
{

    const [ isOpen, setOpen ] = useState(false)

    return (
        <section className="overflow-hidden relative">
            <div className="image absolute top-0 right-0 left-0 bottom-0">
                <Image src={People} className="w-full h-full object-cover" width={500} height={500} />
            </div>
            <div className="relative main-hero-section w-full h-full ">
                <Nav top={"14%"} />
                <section className="h-[80%] flex justify-center items-center py-[3rem]">
                    <div className="w-[90vw] md:w-[70vw] lg:w-[50vw] text-center flex flex-col gap-[1.5rem] lg:gap-[4rem]">
                        <header className="text-white font-bold text-[2rem] md:text-[2.7rem] lg:text-[4rem]">A Defense of Language: Culture, Art, History, Imagination.</header>
                        <p className="text-white text-xl">“Of course, there are those who innocently ask: “Wouldn't the world be a better place if we all spoke the same language?” Wouldn't it be easier for us to get along? “My response is always to say, 'That's a fantastic idea. Let's make that universal language Yoruba, Lakota, or Cantonese. Suddenly, people have an idea of ​​what it would mean to not be able to speak their mother tongue.“ - Dr. Wade Davis, National Geographic Explorer-In-Residence</p>
                        <div className="cta flex items-center justify-center gap-2">
                            <Link href="">
                                <div className="btn border border-white text-black bg-white font-bold rounded-md py-4 px-5 md:px-12">Donate</div>
                            </Link>
                            <Link href="" onClick={() => setOpen(true)}>
                                <div className="btn text-white font-bold rounded-md py-4 px-4 md:px-10 flex items-center gap-4"><BsFillPlayFill /> Watch Video</div>
                            </Link>


                            <ModalVideo channel='vimeo' videoId='827794625' autoplay isOpen={isOpen} onClose={() => setOpen(false)} />
                        </div>
                    </div>
                </section>
            </div>
        </section>
    )
}

export default HeroSection

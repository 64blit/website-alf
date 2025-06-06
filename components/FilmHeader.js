import Nav from "./Nav";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

import GrantHeaderImg from "../assets/grantHeader.png";
import Utopians from "../assets/utopians.png";
import Territory from "../assets/territory.png";
import Specter from "../assets/specter.png";

const FilmHeader = () =>
{
    return (
        <section className="overflow-hidden relative">
            <div className="image absolute top-0 right-0 left-0 bottom-0">
                <Image src={GrantHeaderImg} className="w-full h-full object-cover" width={500} height={500} alt="Film production header background in Amazon rainforest" />
            </div>
            <div className="relative main-hero-section w-full h-full ">
                <Nav />
                <section className="h-[80%] w-[80%] mx-auto py-[4rem] flex flex-col md:grid md:grid-cols-[50%_38%] gap-[2rem] items-center">
                    <div className=" flex flex-col items-center text-center md:items-start md:text-left gap-[1.5rem] lg:gap-[4rem]">
                        <header className="text-white font-bold text-[2rem] md:text-[2.7rem] lg:text-[3rem]">Our Work in Films and Radio</header>
                        <p className="text-white text-xl">The American Language Fund, a non-profit organization that supports endangered languages and cultures, has made significant contributions to the world of film production. One of its most notable projects is its partnership with director Alex Pritz on the award-winning documentary, The Territory. The fund provided film production support for the movie and received three credits for its contributions, including two in the music department for field recordings of Gene Osagie and Milton Fernandez.</p>
                        <div className="cta flex gap-2">
                            <Link href="">
                                {/* <div className="btn border-b text-white border-slate-500 w-max py-4 font-bold flex items-center gap-5">Learn More <BsArrowRight /></div> */}

                            </Link>
                        </div>
                    </div>

                    <div className="relative h-full hidden lg:block">
                        <Image src={Utopians} className="absolute top-[60%] left-[10%] w-[25rem] z-10" width={250} height={250} alt="Utopians" />
                        <Image src={Territory} className="absolute w-[18rem] -top-[10%] right-0 z-20" width={250} height={250} alt="Territory" />
                        <Image src={Specter} className="absolute w-[20rem]" width={250} height={250} alt="Specter" />
                    </div>
                </section>
            </div>
        </section>
    )
}

export default FilmHeader

import Nav from "./Nav";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

import ContactHeaderImg from "../assets/contactHeader.png"

const ContactHeader = () =>
{
    return (
        <section className="overflow-hidden relative">
            <div className="image absolute top-0 right-0 left-0 bottom-0">
                <Image src={ContactHeaderImg} className="w-full h-full object-cover" width={500} height={500} />
            </div>
            <div className="relative main-hero-section w-full h-full ">
                <Nav />
                <section className="h-[80%] w-[80%] mx-auto py-[4rem] flex flex-col md:grid md:grid-cols-[50%_38%] gap-[2rem] items-center">
                    <div className=" flex flex-col items-center text-center md:items-start md:text-left gap-[1.5rem] lg:gap-[4rem]">
                        <header className="text-white font-bold text-[2rem] md:text-[2.7rem] lg:text-[3rem]">Connecting Globally, Rooted in the Amazon</header>
                        <p className="text-white text-xl">Although our work embaraces the whole of the Americas, we do not maintain permanent offices outside of the Amazon Rainforest, regarding it as the heart and center of the Americas. Nevertheless, we welcome inquiries from all over the world regarding our Fund, Grants, and other activities. If you have any questions, feel free to contact us. We would be more than happy to hear from you and to answer any questions you may have about our work.</p>
                        <div className="cta flex gap-2">
                            <Link href="">
                                {/* <div className="btn border-b text-white border-slate-500 w-max py-4 font-bold flex items-center gap-5">Learn More <BsArrowRight /></div> */}

                            </Link>
                        </div>
                    </div>
                    {/* contact */}
                    <div className="contact bg-white rounded-md p-[1.5rem] flex flex-col w-full gap-3">
                        <input type="text" className="w-full border border-slate-300 p-[1rem] rounded-md outline-none" placeholder="Name" />
                        <input type="email" className="w-full border border-slate-300 p-[1rem] rounded-md outline-none" placeholder="Email" />
                        <input type="tel" className="w-full border border-slate-300 p-[1rem] rounded-md outline-none" placeholder="Telphone" />
                        <textarea name="" className="w-full border border-slate-300 p-[1rem] rounded-md outline-none" rows="7"></textarea>
                        <Link href="">
                            <div className="btn bg-[#50A060] text-white text-center w-full rounded-md py-4 font-bold">Let's Talk</div>
                        </Link>
                    </div>
                </section>
            </div>
        </section>
    )
}

export default ContactHeader

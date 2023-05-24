import Link from "next/link";
import Image from "next/image";

import Gr1 from "../assets/gr1.jpg";
import Gr2 from "../assets/gr2.jpg";
import Vector from "../assets/VectorChart.png"
import { BsArrowRight } from "react-icons/bs";

const GrantMain = () =>
{
    return (
        <div>
            <section className="1">
                <div className="text w-[90%] md:w-[35%] mx-auto py-[3rem] text-center flex flex-col">
                    {/* <h2 className="font-bold text-3xl mb-[2rem]">Ultricies potenti velit aliquet</h2>
                    <p>Ac rhoncus sapien nec quis aliquam eget adipiscing a quam. Eget ultrices orci ultricies duis pharetra justo venenatis.</p> */}
                </div>
                <div className="container flex flex-wrap lg:grid lg:grid-cols-4 gap-4">
                    <div className="p-[2rem] border border-slate-300">
                        <h2 className="text-[#50A060] text-[3rem] font-bold">50%</h2>
                        <p>Over 50% of the approximately 1,900 indigenous languages spoken in the Americas are at risk of disappearing.</p>
                    </div>
                    <div className="p-[2rem] border border-slate-300">
                        <h2 className="text-[#50A060] text-[3rem] font-bold">25%</h2>
                        <p>of dying languages in the Americas are spoken by less than 1,000 people.</p>
                    </div>
                    <div className="p-[2rem] border border-slate-300">
                        <h2 className="text-[#50A060] text-[3rem] font-bold">70%</h2>
                        <p>of worlds indigenous languages are spoken in the Americas.</p>
                    </div>
                    <div className="p-[2rem] border border-slate-300">
                        <h2 className="text-[#50A060] text-[3rem] font-bold">90%</h2>
                        <p>of indigenous languages spoken in the Americas, according to estimates, may be lost by the end of the 20th century.</p>
                    </div>
                </div>
                {/* <div className="cta mt-[2rem] flex justify-center">
                    <Link href="">
                        <div className="btn text-white bg-[#50A060] w-max py-4 px-[2rem] font-bold flex items-center gap-5">Learn More</div>
                    </Link>
                </div> */}
            </section>
            {/* ------------------------------------------------------------------------------------------- */}
            <section className="2 container mission flex flex-col md:grid md:grid-cols-[48%_50%] gap-6 items-center py-[3rem]">
                <div className="img">
                    <Image src={Gr1} className="w-[20rem] md:w-[55rem]" width={300} height={300} />
                </div>
                <div className="text flex flex-col items-center md:items-start text-center md:text-left">
                    <h2 className='font-bold text-2xl mb-[3rem]'>Empowering Sustainable Projects with Community Focus</h2>
                    <p className='leading-[2rem]'>We offer grants to indigenous communities to finance projects between 2,000 and 30,000 USD.  We strongly encourage prospective applicants to engage with us through direct consultation with indigenous leadership in our geographic areas of focus, as well as members of vulnerable linguistic and cultural groups.
                        We believe this approach will ensure that the proposals we receive are in line with the needs and priorities of the communities we serve.</p>
                    <div className="cta mt-[2rem]">
                        <Link href="">
                            {/* <div className="btn border-b border-slate-500 w-max py-4 font-bold flex items-center gap-5">Learn More <BsArrowRight /></div> */}
                        </Link>
                    </div>
                </div>
            </section>
            {/* ----------------------------------------------------------------------------------------- */}
            <section className="3 bg-slate-200 py-[3rem]">
                <div className="text w-[90%] md:w-[35%] mx-auto py-[3rem] text-center flex flex-col">
                    <h2 className="font-bold text-3xl mb-[2rem]">Revitalizing Indigenous Languages: Empowering Cultural Resurgence</h2>
                    <p>We are dedicated to preserving and revitalizing indigenous languages, honoring the rich cultural heritage they represent. Through our support for language programs and initiatives, we strive to ensure the continued use and appreciation of these languages for generations to come.</p>
                </div>
                <div className="container flex flex-wrap md:grid md:grid-cols-3 gap-4">
                    <div className="border border-slate-300 bg-white flex flex-row items-center justify-items-stretch  gap-4 p-12 py-14">
                        <Image src={Vector} className="w-[4rem] h-[4rem]" alt="Vector chart" />
                        {/* <h2 className="text-2xl font-bold">Lorem Ipsum</h2> */}
                        <p className="mt-[2rem] text-center">The number of Native American Language speakers in North America has increase 17% due to language revitalization programs.</p>
                    </div>
                    <div className="border border-slate-300 bg-white flex flex-row items-center justify-items-stretch gap-4 p-12 py-14">
                        <Image src={Vector} className="w-[4rem] h-[4rem]" alt="Vector chart" />
                        {/* <h2 className="text-2xl font-bold">Lorem Ipsum</h2> */}
                        <p className="mt-[2rem] text-center">63% of indigenous languages are still in use despiste being endangered.</p>
                    </div>
                    <div className="border border-slate-300 bg-white flex flex-row items-center justify-items-stretch gap-4 p-12 py-14">
                        <Image src={Vector} className="w-[4rem] h-[4rem]" alt="Vector chart" />
                        {/* <h2 className="text-2xl font-bold">Lorem Ipsum</h2> */}
                        <p className="mt-[2rem] text-center">50% of all documented languages online have an online presence.</p>
                    </div>
                </div>
            </section>
            {/* -------------------------------------------------------------------------------------- */}
            <section className="4 container mission flex flex-col md:grid md:grid-cols-[48%_50%] gap-6 items-center py-[3rem]">
                <div className="text flex flex-col items-center md:items-start text-center md:text-left">
                    <h2 className='font-bold text-2xl mb-[3rem]'>Applying for Funds</h2>
                    <p className='leading-[2rem]'>In addition to the prerequisites mentioned above, we require that applicants have a proven track record of working with indigenous communities and/or have experience in managing similar projects. Our dedicated team of engineers and project managers will work together with indigenous communities whose solicitations are approved in order to help them create detailed budget, timeline, and implementation plans. This cooperation with indigenous communities is provided after solicitations are approved.</p>
                    <div className="cta mt-[2rem]">
                        <Link href="">
                            {/* <div className="btn border-b border-slate-500 w-max py-4 font-bold flex items-center gap-5">Learn More <BsArrowRight /></div> */}
                        </Link>
                    </div>
                </div>
                <div className="img">
                    <Image src={Gr2} className="w-[40rem] md:w-[55rem]" width={300} height={300} />
                </div>
            </section>
        </div>
    )
}

export default GrantMain

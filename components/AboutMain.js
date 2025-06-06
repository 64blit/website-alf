import Link from "next/link";
import Image from "next/image";

import AboutImg1 from "../assets/aboutImg1.png";
import AboutImg2 from "../assets/aboutImg2.png";
import { BsArrowRight } from "react-icons/bs";

const AboutMain = () =>
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
                        <h2 className="text-[#50A060] text-[3rem] font-bold">2.25%</h2>
                        <p>of dying languages in the Americas are spoken by less than 1,000 people.</p>
                    </div>
                    <div className="p-[2rem] border border-slate-300">
                        <h2 className="text-[#50A060] text-[3rem] font-bold">3.70%</h2>
                        <p>of worlds indigenous languages are spoken in the Americas.</p>
                    </div>
                    <div className="p-[2rem] border border-slate-300">
                        <h2 className="text-[#50A060] text-[3rem] font-bold">4.90%</h2>
                        <p>of indigenous languages spoken in the Americas, according to estimates, may be lost by the end of the 20th century.</p>
                    </div>
                </div>
                <div className="cta mt-[2rem] flex justify-center">
                    <Link href="">
                        <div className="btn text-white bg-[#50A060] w-max py-4 px-[2rem] font-bold flex items-center gap-5">Learn More</div>
                    </Link>
                </div>
            </section>
            {/* ------------------------------------------------------------------------------------------- */}
            <section className="2 container mission flex flex-col md:grid md:grid-cols-[48%_50%] gap-6 items-center py-[3rem]">
                <div className="img">
                    <Image src={AboutImg1} className="w-[20rem] md:w-[35rem]" width={300} height={300} alt="Indigenous community member engaged in grant consultation" />
                </div>
                <div className="text flex flex-col items-center md:items-start text-center md:text-left">
                    <h2 className='font-bold text-2xl mb-[3rem]'>Engaging Communities for Impactful Grants</h2>
                    <p className='leading-[2rem]'>To ensure that our grants have a meaningful and positive impact on the communities we serve, we do not accept unsolicited grant proposals. We strongly encourage prospective applicants to engage with us through direct consultation with indigenous leadership in our geographic areas of focus, as well as members of vulnerable linguistic and cultural groups. We believe that this approach will ensure that the proposals we receive are in line with the needs and priorities of the communities we serve.</p>
                    <div className="cta mt-[2rem]">
                        <Link href="">
                            {/* <div className="btn border-b border-slate-500 w-max py-4 font-bold flex items-center gap-5">Learn More <BsArrowRight /></div> */}
                        </Link>
                    </div>
                </div>
            </section>
            {/* -------------------------------------------------------------------------------------- */}
            <section className="4 container mission flex flex-col md:grid md:grid-cols-[48%_50%] gap-6 items-center py-[3rem]">
                <div className="text flex flex-col items-center md:items-start text-center md:text-left">
                    <h2 className='font-bold text-2xl mb-[3rem]'>Empowering Sustainable Projects with Community Focus</h2>
                    <p className='leading-[2rem]'>In addition to the prerequisites mentioned above, we require that applicants have a proven track record of working with indigenous communities and/or have experience in managing similar projects. We also require that proposals demonstrate a clear and measurable impact on the communities they aim to serve, with a focus on promoting sustainable development and environmental conservation. Proposals must include a detailed budget, timeline, and implementation plan. We will not consider proposals that do not meet these requirements.</p>
                    <div className="cta mt-[2rem]">
                        <Link href="">
                            {/* <div className="btn border-b border-slate-500 w-max py-4 font-bold flex items-center gap-5">Learn More <BsArrowRight /></div> */}
                        </Link>
                    </div>
                </div>
                <div className="img">
                    <Image src={AboutImg2} className="w-[20rem] md:w-[35rem]" width={300} height={300} alt="Community members working on sustainable development project" />
                </div>
            </section>
        </div>
    )
}

export default AboutMain;

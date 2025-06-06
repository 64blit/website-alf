import Link from "next/link";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";

import Territory from "../assets/territory.png";
import Specter from "../assets/specter.png";
import Utopians from "../assets/utopians.png";

const AboutMain = () =>
{
    return (
        <div>
            <section className="1 container py-[3rem]">
                <div className="text mb-[3rem] flex flex-col gap-5 md:grid md:grid-cols-[20%_77%]">
                    <h2 className="font-bold text-2xl mb-[3rem]">
                        The Utopíans
                    </h2>
                    <p className="leading-[2rem]">
                        In addition to The Territory, the American Language Fund
                        has also supported other films that highlight the
                        importance of preserving cultural diversity and
                        endangered languages. The fund is an executive producer
                        for The Utopians, a mini-series that explores the impact
                        of lithium extraction on the indigenous communities of
                        the Salar de Uyuni in Bolivia. The American Language
                        Fund&apos;s involvement in this project underscores its
                        commitment to advocating for marginalized communities
                        and cultures.
                    </p>
                </div>
                <div className="img">
                    <Image
                        src={Utopians}
                        className="w-full md:w-[70%] mx-auto"
                        width={300}
                        height={300}
                        alt="The Utopians film poster featuring lithium extraction impact on indigenous communities"
                    />
                </div>
            </section>
            {/* -------------------------------------------------------------------------------------- */}
            <section className="2 container mission flex flex-col md:grid md:grid-cols-[48%_50%] gap-6 items-center py-[3rem]">
                <div className="text flex flex-col items-center md:items-start text-center md:text-left">
                    <h2 className="font-bold text-2xl mb-[3rem]">
                        Broken Specter
                    </h2>
                    <p className="leading-[2rem]">
                        The American Language Fund&apos;s work in the film industry
                        extends beyond supporting individual productions. The
                        fund has also helped filmmakers like Irish artist
                        Richard Mosse to preserve and disseminate their work. In
                        Mosse&apos;s case, the fund supported the post-production
                        moving of film rolls from the Amazon Rainforest to his
                        studio in Queens, New York. This support ensures that
                        Mosse&apos;s art can be shared with a wider audience, helping
                        to raise awareness about the destruction of the Amazon
                        Rainforest and the importance of environmental
                        conservation.
                    </p>
                    {/* <div className="cta mt-[2rem]">
                        <Link href="">
                            <div className="btn border-b border-slate-500 w-max py-4 font-bold flex items-center gap-5">
                                Learn More <BsArrowRight />
                            </div>
                        </Link>
                    </div> */}
                </div>
                <div className="img">
                    <Image
                        src={Specter}
                        className="w-[20rem] md:w-[35rem]"
                        width={300}
                        height={300}
                        alt="Broken Specter artwork by Richard Mosse documenting Amazon destruction"
                    />
                </div>
            </section>
            {/* ------------------------------------------------------------------------------------------- */}
            <section className="2 container mission flex flex-col md:grid md:grid-cols-[48%_50%] gap-6 items-center py-[3rem]">
                <div className="img">
                    <Image
                        src={Territory}
                        className="w-[20rem] md:w-[35rem]"
                        width={300}
                        height={300}
                        alt="The Territory documentary film poster about indigenous land preservation"
                    />
                </div>
                <div className="text flex flex-col items-center md:items-start text-center md:text-left">
                    <h2 className="font-bold text-2xl mb-[3rem]">
                        The Territory
                    </h2>
                    <p className="leading-[2rem]">
                        Overall, the American Language Fund&apos;s involvement in
                        film production reflects its broader mission to promote
                        the preservation of endangered languages and cultures.
                        Through its work with filmmakers and other artists, the
                        fund has made significant contributions to the world of
                        cinema while also advancing its critical cause.
                    </p>
                    {/* <div className="cta mt-[2rem]">
                        <Link href="">
                            <div className="btn border-b border-slate-500 w-max py-4 font-bold flex items-center gap-5">
                                Learn More <BsArrowRight />
                            </div>
                        </Link>
                    </div> */}
                </div>
            </section>
        </div>
    );
};

export default AboutMain;

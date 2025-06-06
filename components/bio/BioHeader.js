import Nav from "../Nav";
import Image from "next/image";

import People from "../../assets/header.png";

const BioHeader = () =>
{
    return (
        <section className="overflow-hidden relative">
            <div className="image absolute top-0 right-0 left-0 bottom-0">
                <Image
                    src={People}
                    className="w-full h-full object-cover"
                    width={500}
                    height={500}
                    alt="Header background"
                />
            </div>
            <div className="relative main-hero-section w-full h-full ">
                <Nav />
                <section className="h-[80%] flex justify-center items-center py-[5rem]">
                    <div className="w-[90vw] md:w-[70vw] lg:w-[50vw] text-center flex flex-col gap-[1.5rem] lg:gap-[4rem]">
                        <header className="text-white font-bold text-[2rem] md:text-[2.7rem] lg:text-[4rem]">
                            Our Leadership
                        </header>
                        <p className="text-white text-xl">
                            Get to know the passionate individuals who drive our mission forward. Learn about the talented and diverse team behind our organization, each contributing their unique expertise and commitment to making a positive impact in our communities. Together, we strive to create meaningful change and foster a better future for all.
                        </p>
                    </div>
                </section>
            </div>
        </section>
    );
};

export default BioHeader;

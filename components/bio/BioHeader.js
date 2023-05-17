import Nav from "../Nav";
import Image from "next/image";

import People from "../../assets/header.png";

const BioHeader = () => {
    return (
        <section className="overflow-hidden relative">
            <div className="image absolute top-0 right-0 left-0 bottom-0">
                <Image
                    src={People}
                    className="w-full h-full object-cover"
                    width={500}
                    height={500}
                />
            </div>
            <div className="relative main-hero-section w-full h-full ">
                <Nav />
                <section className="h-[80%] flex justify-center items-center py-[5rem]">
                    <div className="w-[90vw] md:w-[70vw] lg:w-[50vw] text-center flex flex-col gap-[1.5rem] lg:gap-[4rem]">
                        <header className="text-white font-bold text-[2rem] md:text-[2.7rem] lg:text-[4rem]">
                            Nulla Ultrices feugiat nibh
                        </header>
                        <p className="text-white text-xl">
                        Pellentesque sit feugiat at nunc. Vestibulum enim libero tristique nibh interdum. Arcu cras nulla sit pellentesque non adipiscing imperdiet ut gravida. Facilisi purus dui amet orci vulputate adipiscing sed amet.
                        </p>
                    </div>
                </section>
            </div>
        </section>
    );
};

export default BioHeader;

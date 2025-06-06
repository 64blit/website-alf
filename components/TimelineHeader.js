import Nav from "./Nav";
import Image from "next/image";
import HeaderImg from "../assets/territory.png";

const TimelineHeader = () => {
    return (
        <section className="overflow-hidden relative">
            <div className="image absolute top-0 right-0 left-0 bottom-0">
                <Image src={HeaderImg} className="w-full h-full object-cover" width={500} height={500} alt="Timeline header background with territory landscape" />
            </div>
            <div className="relative main-hero-section w-full h-full">
                <Nav />
                <section className="h-[80%] w-[80%] mx-auto py-[4rem] flex flex-col gap-[2rem] items-center">
                    <div className="flex flex-col items-center text-center gap-[1.5rem] lg:gap-[2rem]">
                        <header className="text-white font-bold text-[2rem] md:text-[2.7rem] lg:text-[3rem]">Our Timeline</header>
                        <p className="text-white text-xl max-w-[60rem]">
                            Tracking our journey through the years as we work to preserve Indigenous languages, 
                            protect territories, and forge new pathways for regenerative diplomacy across the Americas.
                        </p>
                        <div className="flex items-center gap-4 text-white text-lg">
                            <span className="px-4 py-2 bg-white/20 rounded-full font-bold">2025</span>
                            <span className="text-white/70">Current Year</span>
                        </div>
                    </div>
                </section>
            </div>
        </section>
    )
}

export default TimelineHeader;
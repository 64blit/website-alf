import Image from 'next/image';
import Link from "next/link"
import Mission from "../assets/mission.png";
import { BsArrowRight } from 'react-icons/bs';

const MissionAndVission = () =>
{
    return (
        <section className='pt-[3rem]'>
            {/* mission */}
            <div className="container mission flex flex-col md:grid md:grid-cols-[50%_48%] gap-6 items-center">
                <div className="text flex flex-col items-center md:items-start text-center md:text-left">
                    <h2 className='font-bold text-2xl mb-[3rem]'>Mission Statement</h2>
                    <p className='leading-[2rem]'>Language dies when communities can&apos;t survive. We empower Indigenous communities to preserve their languages and cultures by addressing the basic infrastructure that language needs to survive—clean water, food security, electricity, and educational tools. We make the invisible visible, mobilizing support and action to ensure that the conditions for learning, dignity, and cultural continuity are in place.</p>
                    {/* We believe that linguistic and cultural diversity are essential to human flourishing, and that every language and culture has value and deserves to be preserved. Through our work, we aim to empower communities to preserve their heritage and inspire future generations to celebrate linguistic and cultural diversity. */}
                    <div className="cta mt-[2rem]">
                        <Link href="">
                            {/* <div className="btn border-b border-slate-500 w-max py-4 font-bold flex items-center gap-5">Learn More <BsArrowRight /></div> */}
                        </Link>
                    </div>
                </div>
                <div className="img">
                    <Image src={Mission} className="w-[20rem] md:w-[35rem]" width={300} height={300} alt="Mission statement illustration showing indigenous community empowerment" />
                </div>
            </div>
            {/* vision */}
            <div className="vision bg-gray-200 flex flex-col items-center mt-[4rem] py-[6rem]">
                <div className="w-[80%] md:w-[40%] flex flex-col items-center text-center">
                    <h2 className='font-bold text-2xl mb-[3rem]'>Vision Statement</h2>
                    <p className='leading-[2rem]'>A world where no language dies because of broken systems. We envision Indigenous communities across the Americas equipped with the resources, respect, and recognition they need—not only to survive, but to thrive as stewards of humanity&apos;s deepest legacies.</p>
                    {/* <p className='leading-[2rem]'>Our vision is a world where linguistic and cultural diversity is celebrated, and communities have the resources they need to preserve and pass on their unique languages and cultures. We believe that linguistic and cultural diversity are essential to human flourishing, and that every language and culture has value and deserves to be preserved. Through our work at American Language Fund, we aim to empower communities to preserve their heritage and inspire future generations to celebrate linguistic and cultural diversity.</p> */}
                    {/* <div className="cta mt-[1rem]">
                        <Link href="">
                            <div className="btn border-b border-slate-500 font-bold py-4 flex items-center gap-5">Learn More <BsArrowRight /></div>
                        </Link>
                    </div> */}
                </div>
            </div>
        </section>
    )
}

export default MissionAndVission
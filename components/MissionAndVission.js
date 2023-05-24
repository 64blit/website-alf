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
                    <p className='leading-[2rem]'>At American Language Fund, our mission is to promote linguistic and cultural diversity by investing in dying languages, film, and school infrastructure of communities and cultures on the brink of extinction. We believe that linguistic and cultural diversity are essential to the preservation of the biosphere and ethnosphere.</p>
                    {/* We believe that linguistic and cultural diversity are essential to human flourishing, and that every language and culture has value and deserves to be preserved. Through our work, we aim to empower communities to preserve their heritage and inspire future generations to celebrate linguistic and cultural diversity. */}
                    <div className="cta mt-[2rem]">
                        <Link href="">
                            {/* <div className="btn border-b border-slate-500 w-max py-4 font-bold flex items-center gap-5">Learn More <BsArrowRight /></div> */}
                        </Link>
                    </div>
                </div>
                <div className="img">
                    <Image src={Mission} className="w-[20rem] md:w-[35rem]" width={300} height={300} />
                </div>
            </div>
            {/* vision */}
            <div className="vision bg-gray-200 flex flex-col items-center mt-[4rem] py-[6rem]">
                <div className="w-[80%] md:w-[40%] flex flex-col items-center text-center">
                    <h2 className='font-bold text-2xl mb-[3rem]'>Vision Statement</h2>
                    <p className='leading-[2rem]'><b>OUR VISION</b> is a world where communities do not have to fight to survive and are free to choose their destinies. With this vision in mind, the American Language Fund regards as sacred the protection of the social, cultural, visual and intellectual heritage of the indigenous and diasporic communities of the Americas.</p>
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

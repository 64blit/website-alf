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
                    <p className='leading-[2rem]'>The staff of the American Language Fund, a 501c3 headquartered in Santa Cruz de la Sierra, operate at the interseccion of diverse discipline. Our team comprises 60 dedicated professionals with expertise ranging from civil engineering and indigenous leadership to archaeology, linguistics, law, topography, architecture, culinary arts, and economics. Guided by a commitment to innovation, we approach challenges with a fresh perspective, posing unconventional questions that transcend traditional disciplinary boundaries. Embracing the power of collective wisdom, we foster a community-driven environment that encourages collaboration, enabling us to redefine the frontiers of knowledge and discover transformative solutions.</p>
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
                    <p className='leading-[2rem]'><b>OUR VISION</b>  encompasses a global landscape where communities no longer endure the burdensome struggle for mere survival, but instead thrive and possess the agency to shape their own destinies. Guided by this profound vision, the American Language Fund holds in utmost reverence the safeguarding of the invaluable social, cultural, visual, and intellectual legacies inherent within the indigenous and diasporic communities of the Americas.

                        By recognizing the significance of these communities' collective experiences and contributions, we strive to cultivate an environment where their heritage remains intact, cherished, and respected. We firmly believe that the preservation of their rich tapestry of traditions, languages, artistic expressions, and wisdom is not only a moral imperative but also a catalyst for fostering inclusive and sustainable societies.

                        Through the lens of cultural preservation, we aspire to facilitate meaningful dialogue, encourage intercultural exchange, and empower these communities to reclaim their narratives. By amplifying their voices and acknowledging their histories, we aim to challenge existing power structures, rectify historical injustices, and forge pathways towards a more equitable and harmonious coexistence.

                        In our pursuit of these noble objectives, we are driven by the conviction that cultural diversity is an invaluable asset, enriching the fabric of humanity. By embracing the vibrant mosaic of indigenous and diasporic cultures, we not only honor the past but also shape a future where all communities are free to express their identities and contribute to the collective progress of humanity.</p>
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

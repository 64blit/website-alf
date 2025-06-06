import Link from "next/link";
import Image from "next/image";

import GrantImg1 from "../assets/1river_amazon.jpg"
import GrantImg2 from "../assets/1river.jpg"
import GrantImg3 from "../assets/1jungle.jpg"
import { BsArrowRight } from "react-icons/bs";

const FocusMain = () =>
{
    return (
        <section className="my-[4rem]">
            <div className="container flex flex-col md:grid md:grid-cols-[50%_48%] gap-6 items-center">
                <div className="text flex flex-col items-center md:items-start text-center md:text-left">
                    <h2 className='font-bold text-2xl mb-[3rem]'>Where we work</h2>
                    <p className='leading-[2rem]'>Our offices are located in strategic border cities of South America. In Cobija, we are located at Avenida 9 de Febrero, near the triple border with Peru and Brazil. The Riberalta Office is located near the Uru Eu Wau Wau reserve in Rondonia, Brazil, north of the Mamoré River. Additionally, we have an office on the banks of the Black River in Manaus, Brazil, Dez de Julho, Centro.</p>
                    <div className="cta mt-[2rem]">
                        <Link href="">
                            {/* <div className="btn border-b border-slate-500 w-max py-4 font-bold flex items-center gap-5">Learn More <BsArrowRight /></div> */}
                        </Link>
                    </div>
                </div>
                <div className="img">
                    <Image src={GrantImg1} className="w-[40rem] md:w-[70rem]" width={300} height={300} alt="Amazon river landscape showing our work region" />
                </div>
            </div>
            {/*  */}
            <div className="container flex flex-col md:grid md:grid-cols-[50%_48%] gap-6 items-center pt-[3rem]">
                <div className="text flex flex-col items-center md:items-start text-center md:text-left">
                    {/* <h2 className='font-bold text-2xl mb-[3rem]'>Ultricies potenti velit aliquet</h2> */}
                    <p className='leading-[2rem]'>The Peruvian Amazon is one of the most biologically diverse areas of the Amazon rainforest, home to over 90 distinct indigenous languages. This region covers over 60% of Peru&apos;s land area and contains over 14,000 plant species, 1,800 bird species, and 900 fish species. Many of these languages are closely linked to the ecosystems in which they are spoken, reflecting the deep relationship that indigenous communities have with the natural world. The American Language Fund invests in language revitalization and cultural preservation efforts in the Peruvian Amazon, helping to ensure that traditional ecological knowledge is passed down from generation to generation, promoting sustainable land management practices and preserving the biodiversity of this unique ecosystem.</p>
                    <div className="cta mt-[2rem]">
                        <Link href="">
                            {/* <div className="btn border-b border-slate-500 w-max py-4 font-bold flex items-center gap-5">Learn More <BsArrowRight /></div> */}
                        </Link>
                    </div>
                </div>
                <div className="img">
                    <Image src={GrantImg2} className="w-[50rem] md:w-[55rem]" width={300} height={300} alt="River waterway in the Peruvian Amazon region" />
                </div>
            </div>
            {/*  */}
            <div className="vision bg-gray-200 flex flex-col items-center mt-[4rem] py-[6rem]">
                <div className="w-[80%] md:w-[40%] flex flex-col items-center text-center">
                    <h2 className='font-bold text-2xl mb-[2rem]'>Empowering Communities in the Heart of the Amazon</h2>
                    <p className='leading-[2rem]'>The Metropolitan Area of Manaus is located in the heart of the Amazon rainforest and is home to over 2 million people, including many indigenous communities that rely on the forest for their livelihoods. The region faces many challenges, including poverty, discrimination, and lack of access to education. The American Language Fund recognizes the importance of providing educational opportunities to these communities, not only for preserving their cultural heritage but also for promoting sustainable land use practices that protect the fragile ecosystem in which they live.</p>
                    {/* <div className="cta mt-[1rem]">
                        <Link href="">
                            <div className="btn bg-[#50A060] text-white font-bold rounded-md py-4 px-5 md:px-12">Learn More</div>
                        </Link>
                    </div> */}
                </div>
            </div>
            {/*  */}
            <div className="container flex flex-col md:grid md:grid-cols-[50%_48%] gap-6 items-center pt-[3rem]">
                <div className="img">
                    <Image src={GrantImg3} className="w-[20rem] md:w-[35rem]" width={300} height={300} alt="Dense Amazon jungle representing biodiversity and linguistic diversity" />
                </div>
                <div className="text flex flex-col items-center md:items-start text-center md:text-left">
                    <h2 className='font-bold text-2xl mb-[3rem]'>Language & The Enviroment</h2>
                    <p className='leading-[2rem]'>The diverse and ecologically rich regions of the Bolivian Amazon Basin, the Peruvian Madre de Dios Province, the Bolivian Chaco, and the metropolitan area of Manaus are facing significant environmental linguistic challenges. These challenges are rooted in the complex relationships between language, culture, and the natural environment. With the loss of indigenous languages, valuable knowledge about traditional environmental practices is also disappearing. Additionally, language barriers hinder communication and collaboration between different stakeholders, limiting efforts to protect and conserve these vital ecosystems. To address these challenges, it is essential to support linguistic diversity and foster intercultural dialogue that respects the cultural and ecological heritage of these regions</p>
                    <div className="cta mt-[2rem]">
                        <Link href="">
                            {/* <div className="btn border-b border-slate-500 w-max py-4 font-bold flex items-center gap-5">Learn More <BsArrowRight /></div> */}
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FocusMain

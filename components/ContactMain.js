import Link from "next/link";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";

import ContactImg1 from "../assets/contact1.png";
import ContactImg2 from "../assets/contact2.png";

const ContactMain = () =>
{
    return (
        <div className="my-[4rem]">
            <div className="container mission flex flex-col md:grid md:grid-cols-[50%_48%] gap-6 items-center">
                <div className="text flex flex-col items-center md:items-start text-center md:text-left">
                    <h2 className='font-bold text-2xl mb-[3rem]'>Our Strategic Office Locations</h2>
                    <p className='leading-[2rem]'>Our offices are located in strategic border cities of South America. In Cobija, we are located at Avenida 9 de Febrero, near the triple border with Peru and Brazil. The Riberalta Office is located near the Uru Eu Wau Wau reserve in Rondonia, Brazil, north of the Mamoré River. Additionally, we have an office on the banks of the Black River in Manaus, Brazil, Dez de Julho, Centro.</p>
                    <div className="cta mt-[2rem]">
                        <Link href="">
                            {/* <div className="btn border-b border-slate-500 w-max py-4 font-bold flex items-center gap-5">Learn More <BsArrowRight /></div> */}
                        </Link>
                    </div>
                </div>
                <div className="img">
                    <Image src={ContactImg1} className="w-[20rem] md:w-[35rem]" width={300} height={300} />
                </div>
            </div>
            {/*  */}
            <div className="container mission flex flex-col md:grid md:grid-cols-[48%_50%] gap-6 items-center pt-[6rem]">
                <div className="img">
                    <Image src={ContactImg2} className="w-[20rem] md:w-[35rem]" width={300} height={300} />
                </div>
                <div className="text flex flex-col items-center md:items-start text-center md:text-left">
                    <h2 className='font-bold text-2xl mb-[3rem]'>Fostering Meaningful Connections and Cultural Preservation</h2>
                    <p className='leading-[2rem]'>As an environmental NGO dedicated to preserving and protecting the cultural and linguistic heritage of indigenous communities, we are committed to maintaining daily conversations with the communities where we work."Our leadership is also based 90% in South America and the vast majority represent cultural, diasporic, and language groups on the brink of disappearing.

                        {/* Our leadership is also based 100% in South América and made up entirely of members of endangered and marginalized linguistic, cultural, and immigrant groups in the Americas. Although our board members are in duverse regiones of the world, our direct leadership is based in South América, ensuring that we remain as close as possible to the intricacies and often overlooked issues in the lives of the remote communities that we serve. */}
                    </p>
                    <div className="cta mt-[2rem]">
                        <Link href="">
                            {/* <div className="btn border-b border-slate-500 w-max py-4 font-bold flex items-center gap-5">Learn More <BsArrowRight /></div> */}
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactMain

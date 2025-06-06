import Link from "next/link";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";

import ContactImg1 from "../assets/new/office_manaus.jpg";
import ContactImg2 from "../assets/new/office_manaus2.jpg";

const ContactMain = () =>
{
    return (
        <div className="my-[4rem]">
            <div className="container mission flex flex-col md:grid md:grid-cols-[50%_48%] gap-6 items-center">
                <div className="text flex flex-col items-center md:items-start text-center md:text-left">
                    <h2 className='font-bold text-2xl mb-[3rem]'>Our Strategic Office Locations</h2>
                    <p className='leading-[2rem]'>
                        Our organization has deliberately established its primary operational bases in two distinct and significant locations: Santa Cruz de la Sierra and Manaus, Brazil. These carefully selected sites embody the essence of our work and reflect our commitment to making a tangible impact.
                        <br />
                        <br />
                        In Santa Cruz de la Sierra, our office at 3065 Avenida Japon, Tercer Anillo Externo, serves as a dynamic center where ideas converge and initiatives take shape. This bustling city, known for its economic significance and cultural diversity, provides a vibrant backdrop for our endeavors.

                        <br />
                        <br />

                        Meanwhile, in Manaus, Brazil, our presence at Av. Djalma Batista, 1719, Ed. Atlantic Tower, signifies our engagement with the unique challenges and opportunities presented by this remarkable region. Manaus, nestled amidst the lush Amazon rainforest, is a gateway to environmental conservation and holds immense potential for sustainable development.

                    </p>
                    <div className="cta mt-[2rem]">
                        <Link href="">
                            {/* <div className="btn border-b border-slate-500 w-max py-4 font-bold flex items-center gap-5">Learn More <BsArrowRight /></div> */}
                        </Link>
                    </div>
                </div>
                <div className="img">
                    <Image src={ContactImg1} className="w-[20rem] md:w-[35rem]" width={300} height={300} alt="American Language Fund office in Manaus, Brazil" />
                </div>
            </div>
            {/*  */}
            <div className="container mission flex flex-col md:grid md:grid-cols-[48%_50%] gap-6 items-center pt-[6rem]">
                <div className="img">
                    <Image src={ContactImg2} className="w-[20rem] md:w-[35rem]" width={300} height={300} alt="Interior view of Manaus office with team members" />
                </div>
                <div className="text flex flex-col items-center md:items-start text-center md:text-left">
                    <h2 className='font-bold text-2xl mb-[3rem]'>Fostering Meaningful Connections and Cultural Preservation</h2>
                    <p className='leading-[2rem]'>As an environmental NGO dedicated to preserving and protecting the cultural and linguistic heritage of indigenous communities, we are committed to maintaining daily conversations with the communities where we work.&quot;Our leadership is also based 90% in South America and the vast majority represent cultural, diasporic, and language groups on the brink of disappearing.

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

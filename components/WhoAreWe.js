import Link from "next/link";
import Image from "next/image";
import WhoWe from "../assets/whoweare.png";
import { BsArrowRight } from "react-icons/bs";

const WhoAreWe = () =>
{
    return (
        <div className="my-[4rem]">
            <div className="container mission flex flex-col md:grid md:grid-cols-[48%_50%] gap-6 items-center">
                <div className="img">
                    <Image src={WhoWe} className="w-[20rem] md:w-[35rem]" width={300} height={300} />
                </div>
                <div className="text flex flex-col items-center md:items-start text-center md:text-left">
                    <h2 className='font-bold text-2xl mb-[3rem]'>Who We Are Statement</h2>
                    <p className='leading-[2rem]'>American Language Fund is a non-governmental organization (NGO) founded at Columbia University. Our team of 60 staff members includes civil engineers, indigenous leadership, archeologists, linguists, lawyers, topographers, architects, chefs, and economist experts. We work closely with communities in the Basin of the Bolivian, Peruvian, and Brazilian Amazon in the States of Acre, Rondonia, Amazonas, El Beni, Pando, and Madre de Dios to identify their unique needs and create sustainable solutions that empower them to preserve their languages and cultures.</p>
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

export default WhoAreWe

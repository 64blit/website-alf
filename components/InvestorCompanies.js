import Image from "next/image";
import Link from "next/link"
import Investor from "../assets/investor.png";
import { BsArrowRight } from "react-icons/bs";

const InvestorCompanies = () => {
    return (
        <div className="relative w-full ">
            <div className="image absolute top-0 right-0 left-0 bottom-0">
                <Image src={Investor} className="w-full h-full object-cover" width={500} height={500} />
            </div>
            <div className="relative content flex flex-col items-center py-[3rem]">
                <div className="w-[90%] md:w-[30%] flex flex-col items-center text-center">
                    {/* <h2 className="font-bold text-2xl mb-[2rem] text-white">Investor Companies</h2> */}
                    <p className="leading-[2rem] text-white text-base md:text-2xl italic">"Every time a language dies, it takes with it a unique way of looking at the world, a unique way of understanding and interacting with the environment, and a unique way of being human."</p>
                    {/* <div className="cta mt-[2rem]">
                        <Link href="">
                            <div className="btn bg-white font-bold rounded-md py-4 px-8 flex items-center gap-5">Meet the fellows <BsArrowRight /></div>
                        </Link>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default InvestorCompanies
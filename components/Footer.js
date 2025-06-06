import Link from 'next/link';
import { FaFacebookF } from "react-icons/fa";
import { RiInstagramFill, RiLinkedinFill } from "react-icons/ri";

const Footer = () => {
    return (
        <div className="pt-[2rem] bg-gray-200 flex flex-col items-center pb-[2rem]">
            <div className="title text-[#50A060] flex flex-col text-2xl md:text-4xl font-bold text-center">
                <span className="uppercase">the american</span>
                <span className="uppercase">language fund</span>
            </div>

            <div className="bottom-links my-[3rem] md:my-[5rem]">
                <div className="nav-links flex gap-[2rem] md:gap-[6rem] text-slate-600">
                    <Link href="/">
                        <span className="text-[.7rem] md:text-xl">Home</span>
                    </Link>
                    <Link href="/focus">
                        <span className="text-[.7rem] md:text-xl">About</span>
                    </Link>
                    <Link href="/contactUs">
                        <span className="text-[.7rem] md:text-xl">Contact us</span>
                    </Link>
                    <Link href="/">
                        <span className="text-[.7rem] md:text-xl">Partners</span>
                    </Link>
                    {/* <Link href="/">
                        <span className="text-[.7rem] md:text-xl">Investors</span>
                    </Link>
                    <Link href="/">
                        <span className="text-[.7rem] md:text-xl">Students</span>
                    </Link> */}
                </div>
            </div>

            <div className="end w-[90%] grid grid-cols-3 items-center">
                <span className='text-[.6rem] md:text-xl text-slate-600'>&copy; 2023, Columbia Venture Fellows. All Rights Reserved.</span>
                <div className="flex justify-center gap-2 md:gap-4 text-base md:text-xl">
                    <Link href=""><FaFacebookF /></Link>
                    <Link href=""><RiInstagramFill /></Link>
                    <Link href=""><RiLinkedinFill /></Link>
                </div>
                <div className="flex gap-4 justify-end text-base md:text-xl text-slate-600">
                    <Link href=""><span>Privacy</span></Link>
                    <Link href=""><span>Terms</span></Link>
                </div>
            </div>
        </div>
    )
}

export default Footer

import { useState } from "react";
import Link from "next/link";
import { HiMenuAlt1 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

const Nav = () =>
{
    const [ menuIsOpen, setMenuIsOpen ] = useState(false);

    const toggleMenu = () =>
    {
        setMenuIsOpen(!menuIsOpen);
    }

    return (
        <nav className="flex justify-center sm:justify-between  items-center min-w-[100vw] pt-[1rem] md:pt-[3rem] ">
            <Link href="/" className="transition duration-200 hover:scale-125 center ">
                <div className="logo flex flex-col uppercase text-center min-w-[14rem]">
                    <span className="text-[1rem] md:text-xl font-bold text-white">The American</span>
                    <span className="text-[1rem] md:text-xl font-bold text-white">Language Fund</span>
                </div>
            </Link>

            {/* navLinks */}
            <div className="nav-links hidden md:flex justify-between w-full sm:gap-3 max-w-[50rem]">
                <Link href="/" className="transition text-center min-w-[4rem] duration-200 hover:scale-125 text-white text-xl">
                    Home
                </Link>
                <Link href="/focus" className="transition text-center min-w-[4rem] duration-200 hover:scale-125 text-white text-xl">
                    Focus
                </Link>
                <Link href="/grant" className="transition text-center min-w-[4rem] duration-200 hover:scale-125 text-white text-xl">
                    Grant
                </Link>
                <Link href="/film" className="transition text-center min-w-[4rem] duration-200 hover:scale-125 text-white text-xl">
                    Film
                </Link>
                <Link href="/timeline" className="transition text-center min-w-[4rem] duration-200 hover:scale-125 text-white text-xl">
                    Timeline
                </Link>
                <Link href="/bio" className="transition text-center min-w-[4rem] duration-200 hover:scale-125 text-white text-xl">
                    Bio
                </Link>
                <Link href="/contactUs" className="transition text-center min-w-[4rem] duration-200 hover:scale-125 text-white text-xl">
                    Contact
                </Link>
            </div >

            {/* cta */}
            < div className="cta flex items-center min-w-[14rem]  md:mx-[2rem] sm:max-w-[1rem] scale-75 sm:scale-100" >
                <Link target="_blank" href="https://ko-fi.com/americanlanguagefund" className="transition duration-200 hover:scale-125">
                    <div className="btn border border-white text-white font-bold rounded-md py-2 px-5 lg:py-4 lg:px-12">Get Involved</div>
                </Link>
                <div className={`ham block md:hidden relative`}>
                    <HiMenuAlt1 className="text-white text-[3rem] cursor-pointer" onClick={toggleMenu} />
                </div>
            </div >

            {/* mobie nav */}
            < div className={`bg-white w-[100vw] h-screen fixed z-50 top-0 bottom-0  ${menuIsOpen ? "right-0" : "-right-[500%]"} flex flex-col p-3 transition-all duration-500 ease-in-out`}>
                <div className={`close-btn md:hidden relative px-7 mb-[3rem]`}>
                    <AiOutlineClose className="text-black text-[2rem] cursor-pointer" onClick={toggleMenu} />
                </div>
                <Link href="/" className="transition duration-200 hover:scale-125">
                    <span className="text-xl font-medium block p-5 px-8 hover:bg-slate-200" onClick={toggleMenu}>Home</span>
                </Link>
                <Link href="/focus" className="transition duration-200 hover:scale-125">
                    <span className="text-xl font-medium block p-5 px-8 hover:bg-slate-200" onClick={toggleMenu}>Focus</span>
                </Link>
                <Link href="/grant" className="transition duration-200 hover:scale-125">
                    <span className="text-xl font-medium block p-5 px-8 hover:bg-slate-200" onClick={toggleMenu}>Grant</span>
                </Link>
                <Link href="/film" className="transition duration-200 hover:scale-125">
                    <span className="text-xl font-medium block p-5 px-8 hover:bg-slate-200" onClick={toggleMenu}>Film</span>
                </Link>
                <Link href="/timeline" className="transition duration-200 hover:scale-125">
                    <span className="text-xl font-medium block p-5 px-8 hover:bg-slate-200" onClick={toggleMenu}>Timeline</span>
                </Link>
                <Link href="/bio" className="transition duration-200 hover:scale-125">
                    <span className="text-xl font-medium block p-5 px-8 hover:bg-slate-200" onClick={toggleMenu}>Bio</span>
                </Link>
                <Link href="/contactUs" className="transition duration-200 hover:scale-125">
                    <span className="text-xl font-medium block p-5 px-8 hover:bg-slate-200" onClick={toggleMenu}>Contact</span>
                </Link>
            </div >
        </nav >
    )
}

export default Nav

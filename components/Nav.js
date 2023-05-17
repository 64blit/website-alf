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
        <nav className="flex justify-between items-center pt-[1rem] md:pt-[3rem] px-[1rem] md:px-[1rem] lg:px-[6rem] xl:px-[12rem]">
            <Link href="/">
                <div className="logo flex flex-col uppercase text-center">
                    <span className="text-[1rem] md:text-xl font-bold text-white">The american</span>
                    <span className="text-[1rem] md:text-xl font-bold text-white">Language fund</span>
                </div>
            </Link>
            {/* navLinks */}
            <div className="nav-links hidden md:gap-[2rem] xl:gap-[6rem] md:flex">
                <Link href="/">
                    <span className="text-white text-xl">Home</span>
                </Link>
                <Link href="/about">
                    <span className="text-white text-xl">About</span>
                </Link>
                <Link href="/focus">
                    <span className="text-white text-xl">Focus</span>
                </Link>
                <Link href="/contactUs">
                    <span className="text-white text-xl">Contact Us</span>
                </Link>
                <Link href="/grant">
                    <span className="text-white text-xl">Grant</span>
                </Link>
                <Link href="/film">
                    <span className="text-white text-xl">Film</span>
                </Link>
                <Link href="/bio">
                    <span className="text-white text-xl">Bio</span>
                </Link>
            </div>

            {/* cta */}
            <div className="cta flex gap-3 items-center">
                <Link href="">
                    <div className="btn border border-white text-white font-bold rounded-md py-2 px-5 lg:py-4 lg:px-12">Donate</div>
                </Link>
                <div className={`ham block md:hidden relative`}>
                    <HiMenuAlt1 className="text-white text-[3rem] cursor-pointer" onClick={toggleMenu} />
                </div>
            </div>

            {/* mobie nav */}
            <div className={`bg-white w-[100vw] h-screen fixed z-50 top-0 bottom-0  ${menuIsOpen ? "right-0" : "-right-[500%]"} flex flex-col p-3 transition-all duration-500 ease-in-out`}>
                <div className={`close-btn md:hidden relative px-7 mb-[3rem]`}>
                    <AiOutlineClose className="text-black text-[2rem] cursor-pointer" onClick={toggleMenu} />
                </div>
                <Link href="/">
                    <span className="text-xl font-medium block p-5 px-8 hover:bg-slate-200" onClick={toggleMenu}>Home</span>
                </Link>
                <Link href="/about">
                    <span className="text-xl font-medium block p-5 px-8 hover:bg-slate-200" onClick={toggleMenu}>About</span>
                </Link>
                <Link href="/focus">
                    <span className="text-xl font-medium block p-5 px-8 hover:bg-slate-200" onClick={toggleMenu}>Focus</span>
                </Link>
                <Link href="/contactUs">
                    <span className="text-xl font-medium block p-5 px-8 hover:bg-slate-200" onClick={toggleMenu}>Contact Us</span>
                </Link>
                <Link href="/grant">
                    <span className="text-xl font-medium block p-5 px-8 hover:bg-slate-200" onClick={toggleMenu}>Grant</span>
                </Link>
                <Link href="/film">
                    <span className="text-xl font-medium block p-5 px-8 hover:bg-slate-200" onClick={toggleMenu}>Film</span>
                </Link>
                <Link href="/bio">
                    <span className="text-xl font-medium block p-5 px-8 hover:bg-slate-200" onClick={toggleMenu}>Bio</span>
                </Link>
            </div>
        </nav>
    )
}

export default Nav

import Link from "next/link"
import { BsArrowRight } from "react-icons/bs"

const Meet = () => {
    return (
        <div className='bg-gray-200 p-[3rem]'>
            <div className="con w-[90%] md:w-[70%] mx-auto rounded-[1rem] bg-[#50A060] p-[2rem] flex flex-col md:flex-row gap-4 items-start justify-between md:items-center">
                <div className="text w-full md:w-[70%]">
                    <h2 className="font-bold text-white text-xl md:text-4xl mb-[1rem]">Tellus aliquet ullamcorper</h2>
                    <p className="text-white">Egestas congue vitae adipiscing pretium sodales sagittis purus egestas fringilla. In nec at nulla odio ac. Diam non ut enim odio mollis. Et velit eu libero tempus vitae quam.</p>
                </div>
                <div className="cta">
                    <Link href="">
                        <div className="btn bg-white font-bold rounded-md py-4 px-8 flex items-center gap-5">Meet the fellows <BsArrowRight /></div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Meet
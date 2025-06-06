import Nav from "./Nav";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import axios from 'axios';
import { BsArrowRight } from "react-icons/bs";
import ContactHeaderImg from "../assets/contactHeader.png"


const sendEmail = async (name, email, tel, message) =>
{
    return axios({
        method: 'post',
        url: '/api/send-mail',
        data: {
            email: email,
            name: name,
            phone: tel,
            message: message,
        },
    });
};


const ContactHeader = () =>
{

    const [ formStatus, setFormStatus ] = React.useState('Send')
    const onSubmit = async (e) =>
    {
        e.preventDefault()
        setFormStatus('Submitting...')
        const { name, email, tel, message } = e.target.elements
        let formData = {
            name: name.value,
            email: email.value,
            phone: tel.value,
            message: message.value,
        }
        console.log(formData)

        try
        {
            const req = await sendEmail(formData.name, formData.email, formData.phone, formData.message);

            if (req.status === 250)
            {
                setFormStatus('Submited!')
            }
        } catch (e)
        {
            console.log(e);

            setFormStatus('Failed to send.')
        }

    }


    return (
        <section className="overflow-hidden relative">
            <div className="image absolute top-0 right-0 left-0 bottom-0">
                <Image src={ContactHeaderImg} className="w-full h-full object-cover" width={500} height={500} alt="Contact page header background with Amazon landscape" />
            </div>
            <div className="relative main-hero-section w-full h-full ">
                <Nav />
                <section className="h-[80%] w-[80%] mx-auto py-[4rem] flex flex-col md:grid md:grid-cols-[50%_38%] gap-[2rem] items-center">
                    <div className=" flex flex-col items-center text-center md:items-start md:text-left gap-[1.5rem] lg:gap-[4rem]">
                        <header className="text-white font-bold text-[2rem] md:text-[2.7rem] lg:text-[3rem]">Connecting Globally, Rooted in the Amazon</header>
                        <p className="text-white text-xl">While our efforts span across the entire American continent, we refrain from establishing fixed branches beyond the confines of the Amazon Rainforest, considering it to be the core of our work in the Americas. Nonetheless, we extend an open invitation to individuals worldwide who wish to inquire about our Fund, Grants, and various initiatives. Don&apos;t hesitate to reach out to us if you have any inquiries; we are eager to receive your messages and provide comprehensive responses addressing any queries related to our endeavors.</p>
                        <div className="cta flex gap-2">
                            <Link href="">
                                {/* <div className="btn border-b text-white border-slate-500 w-max py-4 font-bold flex items-center gap-5">Learn More <BsArrowRight /></div> */}

                            </Link>
                        </div>
                    </div>
                    {/* contact */}
                    <form className="contact bg-white rounded-md p-[1.5rem] flex flex-col w-full gap-3" onSubmit={onSubmit}>

                        <input required type="text" id='name' className="w-full border border-slate-300 p-[1rem] rounded-md outline-none" placeholder="Name" />

                        <input required type="email" id='email' className="w-full border border-slate-300 p-[1rem] rounded-md outline-none" placeholder="Email" />


                        <input type="tel" id='tel' className="w-full border border-slate-300 p-[1rem] rounded-md outline-none" placeholder="Telphone" />


                        <textarea required id='message' name="" className="w-full border border-slate-300 p-[1rem] rounded-md outline-none" rows="7"></textarea>


                        <button href="" type="submit">
                            <div className="btn bg-[#50A060] text-white text-center w-full rounded-md py-4 font-bold">{formStatus}</div>
                        </button>
                    </form>
                </section>
            </div>
        </section>
    )
}

export default ContactHeader

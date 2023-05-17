import Image from "next/image";

import Person1 from "../assets/person1.png"
import Person2 from "../assets/person2.png"
import Person3 from "../assets/person3.png"
import Person4 from "../assets/person4.png"

const Team = () => {
    return (
        <div className="my-[3rem]">
            <h2 className="text-center font-bold text-[2rem] text-[#28435A]">Our Team</h2>
            <p className="text-center mb-[1.5rem] w-[70%] md:max-w-[30%] mx-auto">Urna sit adipiscing donec egestas nisl libero. Orci penatibus magna sed sit lacinia eget diam.</p>
            <div className="team-pic container grid-cols-2 grid md:grid-cols-4 gap-6">
                <div className="">
                    <Image src={Person1} alt="Team person 1"/>
                </div>
                <div className="">
                    <Image src={Person2} alt="Team person 1"/>
                </div>
                <div className="">
                    <Image src={Person3} alt="Team person 1"/>
                </div>
                <div className="">
                    <Image src={Person4} alt="Team person 1"/>
                </div>
            </div>
        </div>
    );
};

export default Team;

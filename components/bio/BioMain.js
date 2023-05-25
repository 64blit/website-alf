import Image from "next/image";
import BioEntry from "./BioEntry";
import ROMER_IMG from '../../assets/bio images/b2.png';
import MOISES_IMG from '../../assets/bio images/b3.png';
import DAYANA_IMG from '../../assets/bio images/b4.png';
import B5 from '../../assets/bio images/b5.png';
import B6 from '../../assets/bio images/b6.png';
import B7 from '../../assets/bio images/b7.png';
import B8 from '../../assets/bio images/b8.png';
import ANEEL_IMG from '../../assets/bio images/b9.png';
import B10 from '../../assets/bio images/b10.png';
import B11 from '../../assets/bio images/b11.png';
import EDMUND_IMG from '../../assets/bio images/b12.png';
import GENE_IMG from '../../assets/bio images/b13.jpg';
import RUEBEN_IMG from '../../assets/bio images/b14.jpg';
import WILLIAM_IMG from '../../assets/bio images/b15.jpg';


const BioMain = () =>
{
    return (
        <main className="container py-[4rem]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 gap-y-[4rem]">

                {/* -------------------------------------------------------------- */}
                <div className="single-bio">
                    <Image src={GENE_IMG} className="w-[20rem]" width={100} height={100} alt="Bio" />
                    <div className="name py-[1rem]">
                        <h2 className="text-[#28435A] text-xl font-bold">Gene Osagie</h2>
                    </div>
                    <div className="desc max-w-[20rem]">
                        <p>CEO and Founder of the American Language Fund, with extensive management experience in both the private and public sectors, as well as major international development agencies such as Catholic Charities, Plan International, and the United Nations. With an MA in International Educational Development from Columbia University, Gene is also a field linguist and speaks French, Spanish, Portuguese, and English.</p>
                    </div>
                </div>
                {/* -------------------------------------------------------------- */}
                <div className="single-bio">
                    <Image src={B11} className="w-[20rem]" width={100} height={100} alt="Bio" />
                    <div className="name py-[1rem]">
                        <h2 className="text-[#28435A] text-xl font-bold">Ana Suelly Cabral</h2>
                    </div>
                    <div className="desc max-w-[20rem]">
                        <p>Director of Linguistics with a distinguished career in the field and one of the most celebrated linguists in the world. Ana specializes in the Tupi-Guarani language family and is the Director of the Linguistics Department at the University of Brasilia.</p>
                    </div>
                </div>
                {/* -------------------------------------------------------------- */}
                <div className="single-bio">
                    <Image src={ROMER_IMG} className="w-[20rem]" width={100} height={100} alt="Bio" />
                    <div className="name py-[1rem]">
                        <h2 className="text-[#28435A] text-xl font-bold">Romer Toledo Guzman</h2>
                    </div>
                    <div className="desc max-w-[20rem]">
                        <p>Chief Legal Officer and Chief of Staff with 15 years of experience in the Amazon Basin as well as the region of Santa Cruz de la Sierra. With an MBA in Business Administration from the University of Gabriel Renee Moreno, Romer is the official legal representative of the NGO in Bolivia.</p>
                    </div>
                </div>
                {/* -------------------------------------------------------------- */}
                <div className="single-bio">
                    <Image src={RUEBEN_IMG} className="w-[20rem]" width={100} height={100} alt="Bio" />
                    <div className="name py-[1rem]">
                        <h2 className="text-[#28435A] text-xl font-bold">Rubén </h2>
                    </div>
                    <div className="desc max-w-[20rem]">
                        <p>Head of Transportation and Project Management, overseeing logistics and coordination for our initiatives in the Amazon region. His expertise ensures efficient movement of resources, personnel, and equipment, supporting our mission to protect indigenous communities' cultural and linguistic heritage.</p>
                    </div>
                </div>
                {/* -------------------------------------------------------------- */}
                <div className="single-bio">
                    <Image src={MOISES_IMG} className="w-[20rem]" width={100} height={100} alt="Bio" />
                    <div className="name py-[1rem]">
                        <h2 className="text-[#28435A] text-xl font-bold">Moises Cavinas Roman</h2>
                    </div>
                    <div className="desc max-w-[20rem]">
                        <p>Logistics Coordinator responsible for coordinating logistics and transport of engineers primarily for water projects in the Bolivian and Brazilian Amazon.</p>
                    </div>
                </div>
                {/* -------------------------------------------------------------- */}
                <div className="single-bio">
                    <Image src={DAYANA_IMG} className="w-[20rem]" width={100} height={100} alt="Bio" />
                    <div className="name py-[1rem]">
                        <h2 className="text-[#28435A] text-xl font-bold">Dayana Jimenez</h2>
                    </div>
                    <div className="desc max-w-[20rem]">
                        <p>Chief Communications Officer with 8 years of experience in education project management in the Amazon Basin. With a background in pedagogy, Dayana oversees and manages internal communications to assure the quality of the execution of projects in remote regions of the Amazon Rainforest in Peru, Bolivia, and Brazil.</p>
                    </div>
                </div>
                {/* -------------------------------------------------------------- */}
                <div className="single-bio">
                    <Image src={EDMUND_IMG} className="w-[20rem]" width={100} height={100} alt="Bio" />
                    <div className="name py-[1rem]">
                        <h2 className="text-[#28435A] text-xl font-bold">Edmund Dao</h2>
                    </div>
                    <div className="desc max-w-[20rem]">
                        <p>Chief Technology Officer and Co-Founder with a strong background in relevant field or industry and years of experience. Edmund's specific area of expertise is in software engineering, and he has held previous job titles such as Lead Software Engineer and Software Development Manager.</p>

                    </div>
                </div>
                {/* -------------------------------------------------------------- */}
                <div className="single-bio">
                    <Image src={WILLIAM_IMG} className="w-[20rem]" width={100} height={100} alt="Bio" />
                    <div className="name py-[1rem]">
                        <h2 className="text-[#28435A] text-xl font-bold">William Cuellars</h2>
                    </div>
                    <div className="desc max-w-[20rem]">
                        <p>Director of Indigenous Relations with 20 years of experience as a politician for the state government of El Beni, as leader of the Siriono tribe, and professor of the Siriono Language. Willan's focus is on building relationships and creating opportunities for indigenous popuplations in the Amazon Basin.</p>

                    </div>
                </div>
                {/* -------------------------------------------------------------- */}
                <div className="single-bio">
                    <Image src={B5} className="w-[20rem]" width={100} height={100} alt="Bio" />
                    <div className="name py-[1rem]">
                        <h2 className="text-[#28435A] text-xl font-bold">Apolo Jimenez</h2>
                    </div>
                    <div className="desc max-w-[20rem]">
                        <p>Director of Engineering with 15 years of experience in civil engineering, specifically in school infrastructure. Apolo oversees a team of 20 contracted engineers and assistants, ensuring the successful completion of various school infrastructure projects.</p>
                    </div>
                </div>
                {/* -------------------------------------------------------------- */}
                <div className="single-bio">
                    <Image src={B6} className="w-[20rem]" width={100} height={100} alt="Bio" />
                    <div className="name py-[1rem]">
                        <h2 className="text-[#28435A] text-xl font-bold">Milton Fernandez</h2>
                    </div>
                    <div className="desc max-w-[20rem]">
                        <p>Project Manager with 25 years of experience working in tourism and indigenous advocacy on behalf of the Tatuyo and Dessana populations in the region of Manaus Brazil. Milton speaks French, Portuguese, Spanish, and English.</p>
                    </div>
                </div>

                {/* -------------------------------------------------------------- */}
                <div className="single-bio">
                    <Image src={B8} className="w-[20rem]" width={100} height={100} alt="Bio" />
                    <div className="name py-[1rem]">
                        <h2 className="text-[#28435A] text-xl font-bold">Gindel Delgado</h2>
                    </div>
                    <div className="desc max-w-[20rem]">
                        <p>Chief Audiovisual Officer with 10 years of experience in documentary film and photojournalism with NBC, FRANCE 24, DW, CNN, and the BBC. Gindel's specific area of expertise is cinematography, and he has been nominated for an Emmy Award for his documentary film work with Vice Media on HBO.</p>
                    </div>
                </div>
                {/* -------------------------------------------------------------- */}
                <div className="single-bio">
                    <Image src={B10} className="w-[20rem]" width={100} height={100} alt="Bio" />
                    <div className="name py-[1rem]">
                        <h2 className="text-[#28435A] text-xl font-bold">Daniel Tomelic</h2>
                    </div>
                    <div className="desc max-w-[20rem]">
                        <p>Director of Donor Relations with years of experience in the field and expertise in fundraising and relationship management.</p>
                    </div>
                </div>
                {/* -------------------------------------------------------------- */}
            </div>
            {/* -------------------------------------------------------------- */}
            {/* A header that reads board members and has a list of names after it. */}
            <div className="flex flex-col items-center justify-center py-[4rem]">
                <h1 className="text-[#28435A] text-4xl font-bold">Board Members</h1>
                <h2 className="text-[#28435A] text-center">Our board comprises accomplished professionals who bring a wealth of experience and expertise to our organization. With their strategic guidance and unwavering commitment, we are able to make a tangible impact on education and cultural preservation in the region. Get to know the exceptional individuals driving our mission and shaping a brighter future in the Amazon Basin.</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 gap-y-[4rem]">

                <BioEntry name={"Frederick Bernas"} desc={"Freelance journalist for the BBC, CNN, AP. London, England. "} />
                <BioEntry name={"Chris Sciotti"} desc={"Attorney, Sciotti Law PC. Detroit, Michigan. Board Chair. "} />
                <BioEntry name={"Scott Man"} desc={"Former engineer at Tesla Motors, active member of Chickasaw Nation. Baltimore, Maryland."} />
                <BioEntry name={"Michael Gerber"} desc={"Investor, former staff of Embassy of Switzerland to Bolivia. Santa Cruz, Bolivia."} />

                <BioEntry name={"Dr. Thomas Woods"} desc={"Retired Surgeon. Point Baker, Alaska."} />

                <BioEntry name={"Dr. Alex Yee"} desc={"Dental Surgeon, Fundraiser and Investor in Amazon Basin Projects. Boston, Massachusettes. Vice Chair."} />

                <BioEntry name={"Edward Smith"} desc={"Head of Counsel, T-Mobile. Miami, Florida."} />
                <BioEntry name={"Dr. Ana Suelly Cabral"} desc={"Head of Linguistics Department, University of Brasilia. Brasilia, Brazil."} />
                <BioEntry name={"Gage Ardag"} desc={"Manager of Federal and Capital Grants, SafeHaven. Wasihngton, DC."} />

            </div>
        </main>
    );
};

export default BioMain;

import Image from "next/image";

import B1 from '../../assets/bio images/b1.png';
import B2 from '../../assets/bio images/b2.png';
import B3 from '../../assets/bio images/b3.png';
import B4 from '../../assets/bio images/b4.png';
import B5 from '../../assets/bio images/b5.png';
import B6 from '../../assets/bio images/b6.png';
import B7 from '../../assets/bio images/b7.png';
import B8 from '../../assets/bio images/b8.png';
import B9 from '../../assets/bio images/b9.png';
import B10 from '../../assets/bio images/b10.png';
import B11 from '../../assets/bio images/b11.png';
import B12 from '../../assets/bio images/b12.png';
// import B12B from '../../assets/bio images/b12b.jpg';

const BioMain = () => {
    return (
        <main className="container py-[4rem]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 gap-y-[4rem]">
                {/* <div className="single-bio">
                    <Image src={B1} className="w-[20rem]" width={100} height={100} alt="Bio" />
                    <div className="name py-[1rem]">
                        <h2 className="text-[#28435A] text-xl font-bold">Juan Pablo Gumiel</h2>
                    </div>
                    <div className="desc">
                        <p>Director of Culinary Research and founder of Project Nativa. With a focus on preserving dying gastronomic cultures in forgotten regions of the Amazon, Andes, Chaco and other ecosystems in the region, Juan Pablo has dedicated his career to promoting traditional indigenous cuisine.</p>
                    </div>
                </div> */}
                {/* -------------------------------------------------------------- */}
                <div className="single-bio">
                    <Image src={B2} className="w-[20rem]" width={100} height={100} alt="Bio" />
                    <div className="name py-[1rem]">
                        <h2 className="text-[#28435A] text-xl font-bold">Roma Toledo Guzman</h2>
                    </div>
                    <div className="desc">
                        <p>CEO and Founder of the American Language Fund, with extensive management experience in both the private and public sectors, as well as major international development agencies such as Catholic Charities, Plan International, and the United States. With an MA in International Educational Development from Columbia University, Gene is also a field linguist and speaks French, Spanish, Portuguese, and English.</p>
                    </div>
                </div>
                {/* -------------------------------------------------------------- */}
                <div className="single-bio">
                    <Image src={B3} className="w-[20rem]" width={100} height={100} alt="Bio" />
                    <div className="name py-[1rem]">
                        <h2 className="text-[#28435A] text-xl font-bold">Moises Cavinas Roman</h2>
                    </div>
                    <div className="desc">
                        <p>Chief Communications Officer with 8 years of experience in education project management in the Amazon Basin. With a background in pedagogy, Dayana oversees and manages internal communications to assure the quality of the execution of projects in remote regions of the Amazon Rainforest in Peru, Bolivia, and Brazil.</p>
                    </div>
                </div>
                {/* -------------------------------------------------------------- */}
                <div className="single-bio">
                    <Image src={B4} className="w-[20rem]" width={100} height={100} alt="Bio" />
                    <div className="name py-[1rem]">
                        <h2 className="text-[#28435A] text-xl font-bold">Dayana Jimenez</h2>
                    </div>
                    <div className="desc">
                        <p>Director of Engineering with 15 years of experience in civil engineering, specifically in school infrastructure. Apolo oversees a team of 20 contracted engineers and assistants, ensuring the successful completion of various school infrastructure projects.</p>
                    </div>
                </div>
                {/* -------------------------------------------------------------- */}
                <div className="single-bio">
                    <Image src={B5} className="w-[20rem]" width={100} height={100} alt="Bio" />
                    <div className="name py-[1rem]">
                        <h2 className="text-[#28435A] text-xl font-bold">Apolo Jimenez</h2>
                    </div>
                    <div className="desc">
                        <p>Chief Audiovisual Officer with 10 years of experience in documentary film and photojournalism with NBC, FRANCE 24, DW, CNN, and the BBC. Gindel's specific area of expertise is cinematography, and he has been nominated for an Emmy Award for his documentary film work with Vice Media on HBO.</p>
                    </div>
                </div>
                {/* -------------------------------------------------------------- */}
                <div className="single-bio">
                    <Image src={B6} className="w-[20rem]" width={100} height={100} alt="Bio" />
                    <div className="name py-[1rem]">
                        <h2 className="text-[#28435A] text-xl font-bold">Milton Fernandez</h2>
                    </div>
                    <div className="desc">
                        <p>Chief Financial Officer specializing in the financing of hydraulic and sanitation systems projects in remote areas of the Amazon Basin at the Bolivian-Brazilian border, as well as in the Bolivian Chaco. Ruben has held this position with the fund since its genesis.</p>
                    </div>
                </div>
                {/* -------------------------------------------------------------- */}
                <div className="single-bio">
                    <Image src={B7} className="w-[20rem]" width={100} height={100} alt="Bio" />
                    <div className="name py-[1rem]">
                        <h2 className="text-[#28435A] text-xl font-bold">Romer Toledo Guzman</h2>
                    </div>
                    <div className="desc">
                        <p>Chief Legal Officer and Co-Founder with 15 years of experience in the Amazon Basin as well as the region of Santa Cruz de la Sierra. With an MBA in Business Administration from the University of Gabriel Renee Moreno, Romer is the official legal representative of the NGO in Bolivia.</p>
                    </div>
                </div>
                {/* -------------------------------------------------------------- */}
                <div className="single-bio">
                    <Image src={B8} className="w-[20rem]" width={100} height={100} alt="Bio" />
                    <div className="name py-[1rem]">
                        <h2 className="text-[#28435A] text-xl font-bold">Gindel Delgado</h2>
                    </div>
                    <div className="desc">
                        {/* <p>Job title, relevant field or industry, years of experience, specific area of expertise, previous job titles or experiences, related responsibilities or skills.</p> */}
                    </div>
                </div>
                {/* -------------------------------------------------------------- */}
                <div className="single-bio">
                    <Image src={B9} className="w-[20rem]" width={100} height={100} alt="Bio" />
                    <div className="name py-[1rem]">
                        <h2 className="text-[#28435A] text-xl font-bold">Aneel</h2>
                    </div>
                    <div className="desc">
                    <p>Director of Indigenous Relations with 20 years of experience as a politician for the state government of El Beni, as leader of the Siriono tribe, and professor of the Siriono Language. Willan's focus is on building relationships and creating opportunities for indigenous populations in the Amazon Basin.</p>
                    </div>
                </div>
                {/* -------------------------------------------------------------- */}
                <div className="single-bio">
                    <Image src={B10} className="w-[20rem]" width={100} height={100} alt="Bio" />
                    <div className="name py-[1rem]">
                        <h2 className="text-[#28435A] text-xl font-bold">Daniel Tomelic</h2>
                    </div>
                    <div className="desc">
                        <p>Director of Donor Relations with years of experience in the field and expertise in fundraising and relationship management.</p>
                    </div>
                </div>
                {/* -------------------------------------------------------------- */}
                <div className="single-bio">
                    <Image src={B11} className="w-[20rem]" width={100} height={100} alt="Bio" />
                    <div className="name py-[1rem]">
                        <h2 className="text-[#28435A] text-xl font-bold">Dr. Ana Suelly Cabral</h2>
                    </div>
                    <div className="desc">
                        <p>Director of Linguistics with a distinguished career in the field and one of the most celebrated linguists in the world. Ana specializes in the Tupi-Guarani language family and is the Director of the Linguistics Department at the University of Brasilia.</p>
                    </div>
                </div>
                {/* -------------------------------------------------------------- */}
                <div className="single-bio">
                    <Image src={B12} className="w-[20rem]" width={100} height={100} alt="Bio" />
                    <div className="name py-[1rem]">
                        <h2 className="text-[#28435A] text-xl font-bold">Edmund Dao</h2>
                    </div>
                    <div className="desc">
                    <p>Chief Technology Officer and Co-Founder with a strong background in relevant field or industry and years of experience. Edmund's specific area of expertise is in software engineering, and he has held previous job titles such as Lead Software Engineer and Software Development Manager.</p>

                    </div>
                </div>
                {/* -------------------------------------------------------------- */}
            </div>
        </main>
    );
};

export default BioMain;
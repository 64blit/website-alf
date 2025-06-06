import { FaHandshake, FaFilm, FaTooth, FaSchool, FaIndustry, FaGlobeAmericas, FaAppleAlt, FaWater, FaCat, FaLanguage, FaTree, FaShip } from "react-icons/fa";

const TimelineMain = () => {
    const projects2025 = [
        {
            id: 1,
            icon: <FaHandshake />,
            title: "Chickasaw–Guaraní Inter-Nation Visit (U.S.–Bolivia)",
            description: "Facilitating a formal visit between the Chickasaw Nation and the Guaraní Nation — forging sovereign ties between North and South to share governance models, strengthen cultural exchange, and begin building a new intercontinental Indigenous alliance."
        },
        {
            id: 2,
            icon: <FaFilm />,
            title: "New Feature-Length Film (Post Emmy-Winning The Territory) – Mamoré River, Brazil",
            description: "In collaboration with El Mano (Buenos Aires), the production company led by journalist Nico, and backed by FUNAI and the Brazilian government, we're producing our first full-length film since winning a Primetime Emmy and two Sundance awards. This documentary will spotlight the riverine Indigenous communities of the Mamoré — amplifying their stories before extractive forces silence them."
        },
        {
            id: 3,
            icon: <FaTooth />,
            title: "Dental Equipment for Guaraní Hospitals – Chaco Region (Jaguar Forest)",
            description: "We're equipping two Guaraní-run hospitals with complete dental infrastructure as part of a larger effort to secure basic health rights before launching tourism and language programs. These same communities are the official stewards of the Chaco — the largest dry forest on the planet, home to the jaguar and to some of the oldest Indigenous lineages in South America."
        },
        {
            id: 4,
            icon: <FaSchool />,
            title: "Construction of the Pacahuara Bilingual Institute – Amazon Triangle",
            description: "More than a school, the Institute is a frontline defense post for endangered languages, wildlife, and forest intelligence in one of Bolivia's most fragile ecological zones. The Pacahuara community lives at the intersection of environmental, linguistic, and political vulnerability."
        },
        {
            id: 5,
            icon: <FaIndustry />,
            title: "Rehabilitation of Tacana Açaí Processing Plant – Nor Yungas (FAO Partnership)",
            description: "In partnership with the Food and Agriculture Organization (FAO) of the United Nations, we're restoring a key processing plant that will allow the Tacana to compete in the global açaí market, channeling profits into local education, conservation, and community sovereignty."
        },
        {
            id: 6,
            icon: <FaGlobeAmericas />,
            title: "International Export of Açaí and Amazonian Products",
            description: "Following trade missions to the U.S., Europe, and the Middle East, we're scaling up exports of Bolivian açaí and wild-harvested Amazonian goods through a joint initiative with BioFoods, Oxfam, and WWF. Revenue flows directly into reforestation, school infrastructure, and language programming."
        },
        {
            id: 7,
            icon: <FaAppleAlt />,
            title: "Nutrition Program Equipment – Esse Ejja & Tacana (Pando)",
            description: "This completes a two-year commitment to riverside nations on the Madre de Dios. By delivering nutritional infrastructure, we're reinforcing health, food security, and the cultural stability needed for long-term resilience."
        },
        {
            id: 8,
            icon: <FaLanguage />,
            title: "Sirionó Language Revitalization – Ibiato, Beni",
            description: "We're partnering with Brazilian conservationists near Guayaramerín to document and revive the Sirionó language — inspired in part by this BBC investigation, which exposed the fragile existence of this community and the looming danger of cultural erasure."
        },
        {
            id: 9,
            icon: <FaWater />,
            title: "Water and Sanitation Systems – Cavineño Nation, Baqueti (Amazon Basin)",
            description: "The Cavineños — among the most geographically isolated peoples in the Americas — live on a river they cannot safely drink from. We're building a clean water and sanitation system to restore dignity, health, and permanence to their community in the heart of the Amazon."
        },
        {
            id: 10,
            icon: <FaCat />,
            title: "Jaguar Route – Ecotourism in the Chaco Forest",
            description: "With the Guaraní Nation, we're developing a regenerative travel corridor through the Chaco dry forest, where tourism directly funds reforestation, language revival, and community-led wildlife protection — all within a biome the world cannot afford to lose."
        },
        {
            id: 11,
            icon: <FaLanguage />,
            title: "Preservation of the Sirionó Language – Pre-Contact Readiness",
            description: "The Sirionó people are linguistically and biologically linked to an uncontacted branch in Brazil. We're working with the Bolivian government to document their language in advance of any potential contact — preparing for ethical preservation, not extractive intrusion."
        },
        {
            id: 12,
            icon: <FaShip />,
            title: "Regenerative Expeditions – Alto Río Negro, Brazil",
            description: "Partnering with six Indigenous nations of the Upper Rio Negro, we're co-creating private, ethical expeditions that sustain forest protection, fund education, and expose travelers to the deep interconnection between language, territory, and survival."
        }
    ];

    return (
        <section className="py-[4rem] md:py-[6rem] bg-gray-50">
            <div className="container mx-auto px-4 md:px-8">
                <div className="text-center mb-[3rem]">
                    <h2 className="text-[2rem] md:text-[2.5rem] font-bold text-gray-800 mb-4">2025 Projects</h2>
                    <p className="text-lg text-gray-600 max-w-[50rem] mx-auto">
                        The American Language Fund is launching a series of urgent, high-impact projects across Bolivia and Brazil — 
                        each rooted in our commitment to language preservation, Indigenous dignity, environmental defense, and regenerative diplomacy.
                    </p>
                    <p className="text-xl font-semibold text-gray-700 mt-4">
                        These projects are more than interventions. They are acts of restoration.
                    </p>
                </div>

                <div className="timeline relative">
                    {/* Vertical line */}
                    <div className="hidden md:block absolute left-[50%] transform -translate-x-1/2 w-[2px] h-full bg-gray-300"></div>

                    <div className="space-y-8 md:space-y-12">
                        {projects2025.map((project, index) => (
                            <div key={project.id} className={`timeline-item flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                                {/* Content */}
                                <div className="md:w-[45%] bg-white rounded-lg shadow-lg p-6 md:p-8">
                                    <div className="flex items-start gap-4">
                                        <div className="text-3xl text-blue-600 mt-1">
                                            {project.icon}
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-xl font-bold text-gray-800 mb-3">
                                                {project.title}
                                            </h3>
                                            <p className="text-gray-600 leading-relaxed">
                                                {project.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Center dot */}
                                <div className="hidden md:flex absolute left-[50%] transform -translate-x-1/2 items-center justify-center">
                                    <div className="w-6 h-6 bg-blue-600 rounded-full border-4 border-white shadow-md"></div>
                                </div>

                                {/* Spacer for alternating layout */}
                                <div className="hidden md:block md:w-[45%]"></div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-[4rem] text-center">
                    <p className="text-lg text-gray-600">
                        Each project represents a critical step in our mission to preserve Indigenous languages 
                        and cultures while protecting the territories they call home.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default TimelineMain;
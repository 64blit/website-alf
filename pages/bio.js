import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Meet from "@/components/Meet";
import BioHeader from "@/components/bio/BioHeader";
import BioMain from "@/components/bio/BioMain";

const Bio = () => {
    return (
        <main className="overflow-hidden">
            <BioHeader />
            <BioMain />

            <Gallery />
            {/* <Meet /> */}

            {/* Footer */}
            <Footer />
        </main>
    );
};

export default Bio;

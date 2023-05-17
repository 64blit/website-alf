import FilmHeader from "@/components/FilmHeader";
import FilmMain from "@/components/FilmMain";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Meet from "@/components/Meet";

const film = () =>
{
    return (
        <main className="overflow-hidden">
            <FilmHeader />
            <FilmMain />

            <Gallery />
            {/* <Meet /> */}

            {/* Footer */}
            <Footer />
        </main>
    );
};

export default film;

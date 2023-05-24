
const BioEntry = (props) =>
{
    return (
        <div className="single-bio">
            <div className="name py-[1rem]">
                <h2 className="text-[#28435A] text-xl font-bold">{props.name}</h2>
            </div>
            <div className="desc w-[20rem]">
                <p>{props.desc}</p>
            </div>
        </div>
    );
};

export default BioEntry;

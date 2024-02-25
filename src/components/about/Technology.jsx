import "../../css/technology.css";

const Technology = ({ technologyData }) => {
    return (
        <a
        href={technologyData.link}
        target="_blank"
        rel="noreferrer"
        id="technology__"
        >
            <figure className="technology__item">
                <img
                src={`/src/assets/stack-logos/${technologyData.logo}`}
                alt={`${technologyData.name}`}
                className="technology__logo"
                />
                <p
                className="technology__text"
                >
                    {`${technologyData.name}`}
                </p>
            </figure>
        </a>
    );
};

export default Technology;

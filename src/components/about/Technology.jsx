import "../../css/technology.css";

const Technology = ({ technologyData, darkMode }) => {
    return (
        <a
        href={technologyData.link}
        target="_blank"
        rel="noreferrer"
        className="technology__"
        >
            <figure className="technology__item">
                <img
                src={`/src/assets/stack-logos/${technologyData.logo}`}
                alt={`${technologyData.name}`}
                className="technology__logo"
                />
                <p
                className={darkMode ? "technology__text darkMode" : "technology__text"}
                >
                    {`${technologyData.name}`}
                </p>
            </figure>
        </a>
    );
};

export default Technology;

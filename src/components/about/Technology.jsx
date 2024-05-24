import "../../css/technology.css";

const Technology = ({ technologyData, darkMode }) => {
    return (
        <div
            className={darkMode ? "technology__ darkMode" : "technology__"}
        >
            <figure className="technology__item">
                <img
                src={`/img/stack-logos/${technologyData.logo}`}
                alt={`${technologyData.name}`}
                className="technology__logo"
                loading="lazy"
                />
                <a
                className={darkMode ? "technology__text darkMode" : "technology__text"}
                href={technologyData.link}
                target="_blank"
                rel="noreferrer"
                >
                    {`${technologyData.name}`}
                </a>
            </figure>
        </div>
    );
};

export default Technology;

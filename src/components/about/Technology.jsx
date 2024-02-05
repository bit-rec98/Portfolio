import '../../css/technology.css'

const Technology = ({imgSource, technologyName = 'React'}) => {
    return (
        <figure className="technology-item">
            <img src={`${imgSource}`} alt={`${technologyName}`} />
            <h2>{`${technologyName}`}</h2>
            <figcaption>Description</figcaption>
        </figure>
    );
};

export default Technology;

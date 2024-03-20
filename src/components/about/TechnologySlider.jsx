import Slider from "react-slick";
import Technology from "./Technology";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TechnologySlider = ({ technologiesData, darkMode, technologyType}) => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 700,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        draggable: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    arrows: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: false,
                    arrows: false
                }
            },
            
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                    arrows: false
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                    arrows: false
                }
            }
        ]
    };


    return (
        <div className="slider-container">
            <Slider {...settings}>
                {technologiesData &&
                    technologiesData.map((technology) => {
                    if (technology.type === technologyType) {
                        return (
                        <Technology
                            key={technology.id}
                            technologyData={technology}
                            darkMode={darkMode}
                        />
                        );
                    }
                    })}
            </Slider>
        </div>
    );
};

export default TechnologySlider;

import Slider from "react-slick";
import Technology from "./Technology";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { VscArrowLeft, VscArrowRight, VscDebugBreakpointData } from "react-icons/vsc";

const TechnologySlider = ({ technologiesData, darkMode, technologyType}) => {

    function PrevArrow(props) {
        const { className, style, onClick } = props;
        
        return (
            <>
                {
                    darkMode ? 
                    <VscArrowLeft 
                        className={className} 
                        onClick={onClick} 
                        style={{ ...style, display: "block", color: "#f5f5f5" }}
                    /> 
                    : 
                    <VscArrowLeft 
                    className={className} 
                    onClick={onClick} 
                    style={{ ...style, display: "block", color: "#121212" }}
                    />
                }
            </>
        );
    }
    function NextArrow(props) {
        const { className, style, onClick } = props;

        return (
            <>
                {
                    darkMode ? 
                    <VscArrowRight 
                        className={className} 
                        onClick={onClick} 
                        style={{ ...style, display: "block", color: "#f5f5f5" }} 
                    />
                    : 
                    <VscArrowRight 
                        className={className} 
                        onClick={onClick} 
                        style={{ ...style, display: "block", color: "#121212" }}
                    />
                }
            </>
        );
    }

    const settings = {
        customPaging: function() {
            return (
            <a>
                {
                    darkMode ? <VscDebugBreakpointData style={{color: "#f5f5f5"}} /> : <VscDebugBreakpointData style={{color: "#121212"}} />
                }
            </a>
            );
        },
        lazyLoad: false,
        dots: true,
        arrows: false,
        infinite: false,
        draggable: true,
        speed: 700,
        slidesToShow: 3,
        slidesToScroll: 1.5,
        initialSlide: 0,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        responsive: [
            {
                breakpoint: 1176,
                settings: {
                    slidesToShow: 2.5,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: true,
                    arrows: false
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: true,
                    arrows: false
                }
            },
            /* {
                breakpoint: 820,
                settings: {
                    slidesToShow: 1.5,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: true,
                    arrows: false
                }
            }, */
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: true,
                    arrows: false,
                    draggable: true,
                    infinite: true
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1.5,
                    slidesToScroll: 1,
                    infinite: false,
                    draggable: true,
                    dots: false,
                    arrows: false
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: false,
                    arrows: false,
                    draggable: true
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

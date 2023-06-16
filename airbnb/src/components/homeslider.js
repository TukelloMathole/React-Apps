import image from '../images/capetown.jpeg'
const HomeSlider =()=>{
    return(
        <div className="Home-Slider">
            <div className="innerBox">
                <img src={image}/>
            </div>
            <div className="innerBox"></div>
            <div className="innerBox"></div>
            <div className="innerBox"></div>
            <div className="innerBox"></div>
            <div className="innerBox"></div>
        </div>
    );
};

export default HomeSlider;
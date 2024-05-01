import { useEffect, useState } from "react";
import arrow from '../assets/arrow.svg'

/**
 * @param {Array} pictures
 * @returns {JSX.Element}
 */
export function Slideshow ({pictures}) {

    const imagesSlider = []
    const totalPictures = pictures.length
    const [position, setPosition] = useState(1)

    const increment = () => {
        if(position >= totalPictures) {
            setPosition(1)
        } else {
            setPosition(position + 1)
        }     
    }

    const decrement = () => {
        if(position <= 1) {
            setPosition(totalPictures)
        } else {
            setPosition(position - 1)
        }     
    }
       
    function showSlides(slideIndex) {
        slideIndex = slideIndex -1
        const offset = -slideIndex * 100;
        document.querySelector('.slide-content').style.left = `${offset}%`; 
    }

    pictures.forEach((picture, index) => {
        imagesSlider.push(<img key={index} src={picture} alt="slider image" />);
    });

    useEffect(() => {
        showSlides(position)
    }, [position])
    
    return <div className="slideshow">
        <div className="slide-container">
            {totalPictures > 1 && <div className="prev-btn" onClick={decrement}><img src={arrow} alt="fleche" /></div>}
            {totalPictures > 1 && <div className="next-btn" onClick={increment}><img src={arrow} alt="fleche" /></div>}
            <div className="slide-content">
                {imagesSlider}
            </div> 
            {totalPictures > 1 && <div className="nb-slide">{position}/{totalPictures}</div>}
        </div>
    </div>
}
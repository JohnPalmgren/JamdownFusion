import { useState, useEffect } from "react";

import classes from "./Carousel.module.css";

import image1 from "../images/food1.jpg"
import image2 from "../images/food2.jpg"
import image3 from "../images/food3.jpg"
import image4 from "../images/food4.jpg"
import image5 from "../images/food5.jpg"
import left from "../images/left.png"
import right from "../images/right.png"


const Carousel = () => {
    
    const [currentImg, setCurrentImg] = useState(1)

    useEffect(() => {
      const timer = setInterval(() => {
        shiftRight()
      }, 4000)
      return () => clearInterval(timer)
    })

    const shiftRight = () => {
        if (currentImg < 5) {
            setCurrentImg(prevState => prevState +1)
        } else {
            setCurrentImg(1)
        }
    }

    const shiftLeft = () => {
        if (currentImg > 1) {
            setCurrentImg(prevState => prevState - 1)
        } else {
            setCurrentImg(5)
        }
    }
    
    return (
      <div className={classes.background}>
        <h1>Order by text or whatsapp on 07306 353836</h1>
        <div className={classes.carousel}>
          {/* <button className={classes.navigateLeft} onClick={shiftLeft}>
            <img src={left} alt="display item to left" />
          </button>
          <button className={classes.navigateRight} onClick={shiftRight}>
            <img src={right} alt="display item to right" />
          </button> */}

          <img
            src={image1}
            alt="food"
            className={currentImg === 1 ? classes.foodImg : classes.hidden}
          />
          <img
            src={image2}
            alt="food"
            className={currentImg === 2 ? classes.foodImg : classes.hidden}
          />
          <img
            src={image3}
            alt="food"
            className={currentImg === 3 ? classes.foodImg : classes.hidden}
          />
          <img
            src={image4}
            alt="food"
            className={currentImg === 4 ? classes.foodImg : classes.hidden}
          />
          <img
            src={image5}
            alt="food"
            className={currentImg === 5 ? classes.foodImg : classes.hidden}
          />
        </div>
      </div>
    );
}

export default Carousel
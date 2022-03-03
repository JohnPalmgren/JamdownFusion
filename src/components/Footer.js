
import classes from "./Footer.module.css"
import star from "../images/star.png"

const Footer = () => {
    return (
      <div className={classes.footer}>
        <div className={classes.row1}>
          <p>Registered with Swindon Borough Council as a food business.</p>
        </div>
        <div className={classes.rating}>
          <p>Food Hygiene Rating</p>
          <img src={star} alt="star" className={classes.star} />
          <img src={star} alt="star" className={classes.star} />
          <img src={star} alt="star" className={classes.star} />
          <img src={star} alt="star" className={classes.star} />
          <img src={star} alt="star" className={classes.star} />
        </div>
      </div>
    );
}

export default Footer
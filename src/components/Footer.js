
import classes from "./Footer.module.css"
import star from "../images/star.png"

const Footer = () => {
    return (
      <div className={classes.footer}>
        <p>
          Registered with Swindon Borough Council as a food
          business.
        </p>
        <div className={classes.rating}>
          <p>Food Hygiene Rating</p>
          <img src={star} alt="star" className={classes.star} />
          <img src={star} alt="star" className={classes.star} />
          <img src={star} alt="star" className={classes.star} />
          <img src={star} alt="star" className={classes.star} />
          <img src={star} alt="star" className={classes.star} />
        </div>
        <div className={classes.admin}>Admin</div>
      </div>
    );
}

export default Footer
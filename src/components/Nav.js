import classes from "./Nav.module.css";
import star from "../images/pattiesStar.png";
import Patties from "./Patties";

const Nav = (props) => {

  return (
    <nav className={classes.navbar}>
      <div className={classes.links}>
        <input
          type="checkbox"
          id="hamburger"
          className={classes.hamburger}
        />
        <label htmlFor="hamburger" className={classes.label}><div className={classes.buttonBars}></div></label>
        <ul className={classes.navList}>
          <li>
            <button className={classes.button} onClick={props.menuScroll}>
              Menu
            </button>
          </li>
          <li>
            <button className={classes.button} onClick={props.orderScroll}>
              Order
            </button>
          </li>
          <li>
            <button className={classes.button} onClick={props.aboutScroll}>
              About
            </button>
          </li>
        </ul>
        <button className={classes.button} onClick={props.pattiesScroll}>
          <img src={star} alt="patties link" className={classes.img} />
        </button>
      </div>
      <button className={classes.allergensBtn} onClick={props.openModal}>
        <div>Allergens</div>
      </button>
    </nav>
  );
};

export default Nav;

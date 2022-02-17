import classes from "./Nav.module.css"

const Nav = (props) => {
  return (
    <nav className={classes.navbar}>
      <ul>
        <li>
          <button className={classes.button} onClick={props.menuScroll}>Menu</button>
        </li>
        <li>
          <button className={classes.button} onClick={props.orderScroll}>Order</button>
        </li>
        <li>
          <button className={classes.button} onClick={props.aboutScroll}>About</button>
        </li>
      </ul>
      <button className={classes.allergensBtn} onClick={props.openModal}>
        <div>Allergens</div>
      </button>
    </nav>
  );
};

export default Nav;

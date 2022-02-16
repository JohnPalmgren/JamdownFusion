import classes from "./Nav.module.css"

const Nav = () => {
  return (
    <nav className={classes.navbar}>
      <ul>
        <li>
          <a>Menu</a>
        </li>
        <li>
          <a>Order</a>
        </li>
        <li>
          <a>About</a>
        </li>
      </ul>
      <button className={classes.allergensBtn}>
        <div>Allergens</div>
      </button>
    </nav>
  );
};

export default Nav;

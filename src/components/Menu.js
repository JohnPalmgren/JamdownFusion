import { Fragment } from "react";
import menu from "../images/menu.jpg";
import classes from "./Menu.module.css";

const Menu = () => {
  return (
    <Fragment>
        <div className={classes.background}></div>
        {/* <h1>MENU</h1> */}
      <div className={classes.wrapper}>
        <img src={menu} alt="menu..." className={classes.menuImg} />
      </div>
    </Fragment>
  );
};

export default Menu;

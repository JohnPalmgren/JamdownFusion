import { Fragment, useState } from "react";
import menu from "../images/menu.jpg";
import classes from "./Menu.module.css";

const Menu = () => {
  const [zoomed, setZoomed] = useState(false);

  const zoomHandler = () => {
    setZoomed((currentState) => !currentState);
  };

  return (
    <Fragment>
      <div className={classes.background}></div>
      <div className={classes.wrapper}>
        <img
          src={menu}
          alt="menu..."
          onClick={zoomHandler}
          className={zoomed ? classes.menuZoom : classes.menuImg}
        />
      </div>
    </Fragment>
  );
};

export default Menu;

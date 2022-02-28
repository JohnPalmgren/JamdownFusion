import { Fragment, useState, useEffect } from "react";
// import menu from "../images/menu.jpg";
import classes from "./Menu.module.css";
import { client } from "../client"

const Menu = () => {
  
  const [zoomed, setZoomed] = useState(false);
  const zoomHandler = () => {
    setZoomed((currentState) => !currentState);
  };

  const [img, setImg] = useState()

  useEffect(() => {
    client.getEntries()
      .then((response) => {
        setImg(response.items[1].fields.menuImage.fields.file.url);
      })
      .catch(console.error)
  },[])

  return (
    <Fragment>
      <div className={classes.background}></div>
      <div className={classes.wrapper}>
        <img
          src={img}
          alt="menu"
          onClick={zoomHandler}
          className={zoomed ? classes.menuZoom : classes.menuImg}
        />
      </div>
    </Fragment>
  );
};

export default Menu;

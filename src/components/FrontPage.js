import { Fragment } from "react"
import classes from "./FrontPage.module.css"

const FrontPage = (props) => {
    return (
      <Fragment>
        <div className={classes.flex}>
          <div className={classes.overlay}>
            <h1 className={classes.text}>Jamdown Fusion</h1>
          </div>
          <div className={classes.overlay}>
            <h2 className={classes.text}>Traditional Jamaican  food delivered to you</h2>
          </div>
          <div className={classes.buttons}>
              <button onClick={props.menuScroll}>VIEW MENU</button>
              <button onClick={props.orderScroll}>ORDER NOW</button>
          </div>
        </div>
        <div className={classes.background}></div>
      </Fragment>
    );
}

export default FrontPage
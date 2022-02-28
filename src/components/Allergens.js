import { Fragment, useState, useEffect } from "react";
import classes from "./Allergens.module.css";
import { client } from "../client";


const Allergens = (props) => {

  const [allergens, setAllergens] = useState([])

  useEffect(() => {
    client
      .getEntries()
      .then((response) => {
        setAllergens(response.items[0].fields.allergens);
      })
      .catch(console.error);
    }, []);

    const allergenListItems = allergens.map((item, index) => {
      return (<li key={index}>{item}</li>)
    })

      return (
        <Fragment>
          <div
            className={props.view ? classes.backdrop : classes.hidden}
            onClick={props.closeModal}
          ></div>
          <div className={props.view ? classes.modal : classes.hidden}>
            {/* add as button */}
            <span className={classes.close} onClick={props.closeModal}></span>
            <h2>Allergens</h2>
            <p>
              The food from Jamdown Fusion may contain the following Allergens
            </p>
            <ul>
              {allergenListItems}
              {/* <li>Celery</li>
              <li>Gluten</li>
              <li>Eggs</li>
              <li>Fish</li>
              <li>Lupin</li>
              <li>Milk</li>
              <li>Molluscs</li>
              <li>Mustard</li>
              <li>Peanuts</li>
              <li>Sesame</li>
              <li>Soybeans</li>
              <li>Sulphites</li>
              <li>Tree Nuts</li> */}
            </ul>
          </div>
        </Fragment>
      );
};

export default Allergens;

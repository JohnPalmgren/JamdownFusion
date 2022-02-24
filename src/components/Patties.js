import classes from "./Patties.module.css";
import patties from "../images/patty.jpg";

const Patties = () => {
  return (
    <section className={classes.background}>
      <h1>Patties by “Patty Queen”!</h1>
      <div className={classes.flex}>
        <img
          src={patties}
          alt="patties on display"
          className={classes.pattiesImg}
        />
        <div className={classes.text}>
          <p>
            “Elaine has deservedly earned the title of “Patty Queen”! Her
            patties are delicious! Her friends have given her 10 out of 10 for
            her patties! The crust is buttery and flaky with flavoursome and
            substantial fillings. The choices of flavours on offer are lamb,
            mutton, beef, curry chicken, jerk chicken, saltfish and callaloo,
            vegetarian and vegan, cornbeef and cheese and ackee and saltfish.
            Patties are sold for £2 each.
          </p>
          <h2 className={classes.bulk}>Bulk Sale of Patties</h2>
          <p>
            Bulk sale is available but the minimum order is 10 patties for
            delivery unless the order is included within a food delivery order
            including other cooked foods. The patties sold in bulk will usually
            be sold frozen and unbaked with instructions on how to oven bake
            them but baked patties can be ordered in bulk for an additional
            price to be agreed. Deliveries are currently restricted to the
            Swindon area and surrounding villages. Deliveries of patties by hand
            will be an additional £3
          </p>
          <br></br>
          <p>
            Elaine's patties are also available from{" "}
            <a href="https://www.thburroughs.co.uk/">T.H. Burroughs</a> A local
            family butchers, delicatessen and farmshop
          </p>
        </div>
      </div>
    </section>
  );
};

export default Patties;

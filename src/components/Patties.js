import classes from "./Patties.module.css";
import patties from "../images/patty.jpg";

const Patties = () => {
  return (
    <section className={classes.background}>
      <h1>Try our famous patties</h1>
      <div className={classes.flex}>
        <img src={patties} alt="patties on display" className={classes.pattiesImg} />
        <div className={classes.text}>
          <p>
            Dummy text... Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum.
          </p>
          <p>
            You can also pick them up from{" "}
            <a href="https://www.thburroughs.co.uk/">T.H. Burroughs</a> A local
            family butchers, delicatessen and farmshop
          </p>
        </div>
      </div>
    </section>
  );
};

export default Patties;

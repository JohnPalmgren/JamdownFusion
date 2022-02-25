import classes from "./About.module.css";
import aboutImg from "../images/elaine-yellow.png";
import rating from "../images/rating.jpg"

const About = () => {
  return (
    <div className={classes.background}>
      <h1>About</h1>
      <div className={classes.flex}>
        <div className={classes.paraWrap}>
          <p className={classes.aboutPara}>
            Elaine decided during the Covid lockdown that there is more to life
            than paying a huge mortgage and commuting into the City to work as a
            lawyer. She downsized, moved to Swindon (her childhood home) and
            decided to start a business selling freshly made, cooked Caribbean
            food from home. Caribbean food is Elaine's passion. She wants her
            food to taste like "the real deal". Elaine was born in Jamaica and
            came to Swindon with her parents when she was 5 years old. Jamaica
            is in her blood and she thinks Jamaican food is some of the most
            flavoursome food around. Having spent many years feeding her many
            friends from London and Luton, Elaine now wants to branch out and
            feed Swindon!
          </p>
          <img src={rating} alt="5 star food raiting" className={classes.ratingImg} />
        </div>
        <div className={classes.profileWrap}>
          <img src={aboutImg} alt="Elaine" className={classes.profileImg} />
          <p className={classes.quote}>
            "I believe in quality food at affordable prices."
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

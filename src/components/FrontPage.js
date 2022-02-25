import { Fragment, useState, useEffect } from "react";
import classes from "./FrontPage.module.css";

const FrontPage = (props) => {
  const [currentQuote, setCurrentQuote] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      shiftQuote();
    }, 5000);
    return () => clearInterval(timer);
  });

  const shiftQuote = () => {
    if (currentQuote < 16) {
      setCurrentQuote((prevState) => prevState + 1);
    } else {
      setCurrentQuote(1);
    }
  };

  const classSwitcher = (num) => {
    if (currentQuote === num) {
      return classes.fadeIn;
    }
    // else if (currentQuote === num - 1) {
      //   console.log("slideout");
    //   return classes.slideOut;
    // }
    else {
      console.log("hidden");
      return classes.hidden;
    }
  };

  return (
    <Fragment>
      <div className={classes.background}>
        <div className={classes.flex}>
          <div className={classes.overlay}>
            <h1 className={classes.text}>Jamdown Fusion</h1>
          </div>
          <div className={classes.overlay}>
            <h2 className={classes.text}>
              Traditional Jamaican food delivered to you
            </h2>
          </div>
          <div className={classes.buttons}>
            <button onClick={props.menuScroll}>VIEW MENU</button>
            <button onClick={props.orderScroll}>ORDER NOW</button>
          </div>
          <div className={classes.testimonials}>
            <div className={classSwitcher(1)}>
              <p className={classes.testimonials__para}>
                "Elaine's food is delicious 😋" - Dorota (Swindon)
              </p>
            </div>
            <div className={classSwitcher(2)}>
              <p className={classes.testimonials__para}>
                "Elaine's home cooked food is one of the finest Jamaican cuisine
                around. Made with love and tastes absolutely delicious. Yum Yum"
                - Yvonne (London)
              </p>
            </div>
            <div className={classSwitcher(3)}>
              <p className={classes.testimonials__para}>
                "This food is amazing - full of flavour and tastes good too. my
                favourite is the cakes." - Amanda (London)
              </p>
            </div>
            <div className={classSwitcher(4)}>
              <p className={classes.testimonials__para}>
                "Never disappointed by a meal or cake prepared by Elaine.
                Looking forward to that oxtail again😋" -Gayle (London)
              </p>
            </div>
            <div className={classSwitcher(5)}>
              <p className={classes.testimonials__para}>
                "One of the best cooks I know. Her cakes is amazing .You only
                have to order once i promise you will be hooked." - Maud (Luton)
              </p>
            </div>
            <div className={classSwitcher(6)}>
              <p className={classes.testimonials__para}>
                "From somebody that likes their food I could say Elaine's
                cooking is absolutely spot-on full of flavour and I've never had
                a pattie that tasted as good as that, I'm not someone that
                naturally has a sweet tooth but even I was drawn to the cakes
                bang on 👍" - Finley (Luton)
              </p>
            </div>
            <div className={classSwitcher(7)}>
              <p className={classes.testimonials__para}>
                "Yummy fantastic food love it" - Christine (London)
              </p>
            </div>
            <div className={classSwitcher(8)}>
              <p className={classes.testimonials__para}>
                "Totally recommend Elaine Allen and am gutted I no longer live
                close enough to come and be fed!! In fact I might just drive
                down 😁 Swindon you are lucky people ☀️🙌🏼❤️" - Helena (Luton)
              </p>
            </div>
            <div className={classSwitcher(9)}>
              <p className={classes.testimonials__para}>
                "Elaine's food is some of the best I've ever eaten.. I'd say her
                cakes are the best I've had." - Harley (London)
              </p>
            </div>
            <div className={classSwitcher(10)}>
              <p className={classes.testimonials__para}>
                "Your food is always amazing. Delicious and tasty both savory
                and sweet. So yummy 😋😋🥰" -Antoinette (Luton)
              </p>
            </div>
            <div className={classSwitcher(11)}>
              <p className={classes.testimonials__para}>
                "Take your tastebuds on a Caribbean journey with Elaine’s food,
                it's absolutely delicious!" - Yvonne (London)
              </p>
            </div>
            <div className={classSwitcher(12)}>
              <p className={classes.testimonials__para}>
                "Jeez i been waiting long for this Ms E cooking is amazing
                delicious outstanding lickylicious love your food dam i will be
                ordering🔥🔥👏👏❤️❤️" - Debbie (London)
              </p>
            </div>
            <div className={classSwitcher(13)}>
              <p className={classes.testimonials__para}>
                "Tried your carrot cake at new year and Wow! Just had a slice of
                your home made black cake because when I'm having a stressful
                day it always helps. Elaine I have no need to go elsewhere you
                are my main cake maker" - Debra (London)
              </p>
            </div>
            <div className={classSwitcher(14)}>
              <p className={classes.testimonials__para}>
                "The best delivery jamaican in town!! I was seriously impressed
                with the flavours, presentation, and portion size. And a lovely
                lady too with husband delivering 😊" - Lucy (Swindon)
              </p>
            </div>
            <div className={classSwitcher(15)}>
              <p className={classes.testimonials__para}>
                "Food was absolutely lovely never had food with so much
                flavour😋 portion sizes were huge deffo filled us all up and
                spare so thank you very much, xx" - Cindy (Swindon)
              </p>
            </div>
            <div className={classSwitcher(16)}>
              <p className={classes.testimonials__para}>
                "Spankingly good, said hubby, and fantastic from me. The mutton
                was best ever tasted. We hope you continue and we will be
                regulars." - Laura (Swindon)
              </p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default FrontPage;

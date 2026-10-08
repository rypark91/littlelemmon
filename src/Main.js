import classes from "./Main.module.css";
const Main = () => {
  return (
    <div className={classes.mainContainer}>
      <section className={classes.about}>
        <h1>Specials</h1>
        <button>On the Menu</button>
        <div className={classes.aboutFlex}>
          <div className={classes.specialCard}>
            <img src="greek salad.jpg" alt="food1" />
            <div className={classes.specialDescription}>
              <h2>Greek Salad</h2>
              <h4>$12.99</h4>
              <p>jdkla;fsjdf</p>
              <h3>Order a delivery</h3>
            </div>
          </div>
          <div className={classes.specialCard}>
            <img src="dish2.jpg" alt="food2" />
            <div className={classes.specialDescription}>
              <h2>Bruchecta</h2>
              <h4>$5.99</h4>
              <p>jdkla;fsjdf</p>
              <h3>Order a delivery</h3>
            </div>
          </div>
          <div className={classes.specialCard}>
            <img src="lemon dessert.jpg" alt="food3" />
            <div className={classes.specialDescription}>
              <h2>Lemon Dessert</h2>
              <h4>$5.99</h4>
              <p>jdkla;fsjdf</p>
              <h3>Order a delivery</h3>
            </div>
          </div>
        </div>
      </section>
      <section className={classes.testimonial}>
        <h1>Testimonial</h1>
        <div className={classes.testFlex}>
          <div className={classes.testimonialCard}>
            <h6>Ratings</h6>
            {/* <img src="" alt="pic" /> */}
            <div className={classes.background}></div>
            <p className={classes.name}>Name</p>
            <p>Review</p>
          </div>
          <div className={classes.testimonialCard}>
            <h6>Ratings</h6>
            {/* <img src="" alt="pic" /> */}
            <div className={classes.background}></div>
            <p className={classes.name}>Name</p>
            <p>Review</p>
          </div>
          <div className={classes.testimonialCard}>
            <h6>Ratings</h6>
            {/* <img src="" alt="pic" /> */}
            <div className={classes.background}></div>
            <p className={classes.name}>Name</p>
            <p>Review</p>
          </div>
        </div>
      </section>
      <section className={classes.hero}>
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>This here is a place holder description text</p>
        <img className={classes.img1} src="Mario and Adrian A.jpg" alt="pic1" />
        <img className={classes.img2} src="restaurant chef B.jpg" alt="pic2" />
      </section>
    </div>
  );
};

export default Main;

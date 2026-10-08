import classes from "./Header.module.css";
const Header = () => {
  return (
    <div className={classes.headerContainer}>
      <h1>Little Lemon</h1>
      <h2>Chicago</h2>
      <p>This here is a place holder description text</p>
      <button>Reserve a Table</button>
      <img src="restauranfood.jpg" alt="food" />
    </div>
  );
};

export default Header;

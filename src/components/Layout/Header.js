import React, { Fragment } from 'react';
import HeaderCartButton from './HeaderCartButton';
import mealsImage from '../../assets/meals.jpeg';
import classes from './Header.module.css';

const Header = (props) => {
  return (
        <Fragment>
            <header className={classes.header}>
                <h1>Meals</h1>
                <HeaderCartButton onClick={props.onShowCart}/>
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImage} alt="a table full of delicious food"></img>
            </div>

        </Fragment>
  );
};
export default Header;

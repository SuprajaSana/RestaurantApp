import { Fragment } from "react";

import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

const Header=props=>
{
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>MEALS</h1>
                <HeaderCartButton onClick={props.onShow}></HeaderCartButton>
            </header>
            <div className={classes['main-image']}>
                <img src="https://raw.githubusercontent.com/academind/react-complete-guide-code/11-practice-food-order-app/extra-files/meals.jpg" alt="A table full of delicious food" />
            </div>
        </Fragment>
    );
}

export default Header;

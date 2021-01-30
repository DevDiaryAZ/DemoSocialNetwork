import logo from '../../assets/images/logo.png';
import React from 'react';
import classes from './Header.module.css';
import {NavLink} from 'react-router-dom';

const Header = (props) => {
    return <header className={classes.header}>
        <img src={logo}/>
        <div className={classes.loginBlock}>
            {props.isAuth ?
                <div>{props.login}
                <div><button onClick={props.logout}>Log out</button></div>
                </div>
                : <NavLink to={'/login'}>Log in</NavLink>}
        </div>
    </header>
}

export default Header;
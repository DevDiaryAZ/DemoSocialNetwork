import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Navbar.module.css'
import DialogItem from "../Dialogs/DialogItem/DialogItem";


const Navbar = () => {

    return <nav className=
        {classes.nav}>
        <div className={classes.item}>
            <NavLink to="/Profile" activeClassName={classes.activeLink}>PROFILE</NavLink>
        </div>
        <div className={classes.item}>
            <NavLink to="/Dialogs" activeClassName={classes.activeLink}>MESSAGES</NavLink>
        </div>
        <div className={classes.item}>
            <NavLink to="/Users" activeClassName={classes.activeLink}>USERS</NavLink>
        </div>
        <div className={classes.item}>
            <NavLink to="/News" activeClassName={classes.activeLink}>NEWS</NavLink>
        </div>
        <div className={classes.item}>
            <NavLink to="/Music" activeClassName={classes.activeLink}>MUSIC</NavLink>
        </div>
        <div className={`${classes.item} ${classes.settings}`}>
            <NavLink to="/Settings" activeClassName={classes.activeLink}>SETTINGS</NavLink>
        </div>
    </nav>
}

export default Navbar;
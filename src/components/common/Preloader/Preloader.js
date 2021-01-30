import preloader from '../../../assets/images/preloader.svg';
import React from 'react';
import classes from "./Preloader.module.css"

let Preloader = (props) => {
    return <div className={classes.preloader}>
        <img src={preloader} />
    </div>
}

export default Preloader;
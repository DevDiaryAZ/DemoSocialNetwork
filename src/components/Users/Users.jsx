import React from 'react';
import classes from './Users.module.css';
import userPhoto from '../../assets/images/user.png';
import {NavLink} from 'react-router-dom';
import Paginator from "../common/Paginator/Paginator.jsx";


let Users = ({currentPage, onPageChanged, totalUsersCount, pageSize, ...props}) => {

    return <div className={classes.body}>
        <Paginator currentPage={currentPage}
                   onPageChanged={onPageChanged}
                   totalUsersCount={totalUsersCount}
                   pageSize={pageSize}/>
        {props.users.map(u => <div key={u.id}><span>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} className={classes.usersPhoto}/>
                        </NavLink>
                    </div></span>
            <div className={classes.descriptionBlock}>
                                    <b>{u.name}</b>
                                    <div>{u.status}</div>

                    <div >
                        {u.followed
                            ? <button
                                      disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                props.unfollow(u.id)
                            }}>Unfollow</button>
                            : <button
                                      disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                props.follow(u.id)
                            }}>Follow</button>}

                    </div>

            <span>
                                    <span>

                                    </span>
                                    <span>
                                    {/*<div>{"u.location.country"}</div>*/}
                                        {/*<div>{"u.location.city"}</div>*/}
                                    </span>
                                    </span>
            </div>
        </div>)
        }
    </div>
}
export default Users
import React from "react";
import classes from './Profile.module.css';
import avatar from './image/avatar.jpg';

export const Profile = () => {
    return (
        <div className={classes.content}>
            <div className={classes.content__bg}>
                <img src="https://upload.wikimedia.org/wikipedia/ru/9/9f/Twitter_bird_logo_2012.svg" alt=""/>
            </div>
            <div className={classes.info}>
                <div className={classes.info__icon}>
                    <img src={avatar} alt="sss"/>
                </div>
                <div className={classes.info__text}>
                    <div>Username: <span>CIDBerlin</span></div>
                    <div>Name: <span>Tony</span></div>
                    <div>Surname: <span>Montana</span></div>
                    <div>Location: <span>Russia</span></div>
                    <div>Sex: <span>Male</span></div>
                    <div>Posts: <span>228</span></div>
                </div>
            </div>
            <div>My posts</div>
            <div>New post</div>
            <div className={classes.item}>Йо чел, это мой первый пост!</div>
            <div className={classes.item}>Post 2</div>
        </div>
    )
}
import React from 'react';
import { Link } from 'react-router-dom';

import classes from './VideoCard.module.css';

const VideoCard = (props) => {
  return (
    <Link className={classes.VideoCard} to={'/'}>
      <div
        className={`${classes.VideoWrap} ${
          props.id == props.nowPlaying ? classes.Active : null
        }`}
        onClick={() => {
          window.scrollTo(0, 0);
          props.changeVideoId(props.id);
        }}
      >
        <img
          className={classes.Thumbnail}
          src={props.thumbnail}
          alt='Video Thumbnail'
        />
        <h3 className={classes.Title}>{props.title}</h3>
      </div>
    </Link>
  );
};

export default VideoCard;

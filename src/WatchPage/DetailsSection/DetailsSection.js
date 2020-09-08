import React, { Component } from 'react';
import classes from './DetailsSection.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHeart,
  faCommentAlt,
  faBookmark,
} from '@fortawesome/free-regular-svg-icons';
export default class DetailsSection extends Component {
  render() {
    console.log(this.props.videoData);
    return (
      <div className={classes.DetailsSection}>
        <iframe
          title='video container'
          src={`https://player.vimeo.com/video/${this.props.videoData.vimeoId}`}
          frameBorder='0'
          className={classes.Video}
        ></iframe>
        <div className={classes.VideoData}>
          <p className={classes.Views}>{this.props.videoData.views} views</p>
          <div className={classes.MetaData}>
            <FontAwesomeIcon
              icon={faHeart}
              className={`${classes.Icon} ${
                this.props.videoData.isLiked === true ||
                this.props.videoData.isLiked === 'true'
                  ? classes.Yellow
                  : null
              }`}
            />
            <FontAwesomeIcon icon={faCommentAlt} className={classes.Icon} />
            <FontAwesomeIcon
              icon={faBookmark}
              className={`${classes.Icon} ${
                this.props.videoData.isSaved === true ||
                this.props.videoData.isSaved === 'true'
                  ? classes.Yellow
                  : null
              }`}
            />
          </div>
        </div>
        <h1 className={classes.Title}>{this.props.videoData.title}</h1>
        <p className={classes.Description}>
          {this.props.videoData.description}
        </p>
      </div>
    );
  }
}

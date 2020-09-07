import React, { Component } from 'react';
import classes from './WatchPage.module.css';
import DetailsSection from './DetailsSection/DetailsSection';
import PlaylistSection from './PlaylistSection/PlaylistSection';
import axios from 'axios';
export default class WatchPage extends Component {
  state = {
    videoData: {
      id: '1',
      title: 'Croissants | Flour and Stone',
      description:
        'There is no other way but to commit wholeheartedly to a relationship with a croissant. We have all found ourselves at the mercy of its allure. Here, in another epic film by the uber talented Nathan Rodger, our Erin divulges her personal romance with The Croissant.',
      views: 22500,
      vimeoId: 190062231,
      isLiked: 'true',
      isSaved: 'true',
    },
  };
  changeVideoId = (id) => {
    axios
      .get(`https://5f564c7b32f56200168bd3af.mockapi.io/Video/${id}`)
      .then((res) => {
        this.setState({
          videoData: res.data,
        });
      })
      .catch((err) => console.log('Data fetching from vimeo failed'));
  };
  render() {
    return (
      <div className={classes.WatchPage}>
        <div className={classes.DetailsSection}>
          <DetailsSection videoData={this.state.videoData} />
        </div>
        <div className={classes.PlaylistSection}>
          <PlaylistSection
            changeVideoId={this.changeVideoId}
            videoId={this.state.videoData.id}
          />
        </div>
      </div>
    );
  }
}

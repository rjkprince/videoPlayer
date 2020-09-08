import React, { Component } from 'react';
import classes from './PlaylistSection.module.css';
import axios from 'axios';
import VideoCard from '../../VideoCard/VideoCard';
export default class PlaylistSection extends Component {
  state = {
    playlist: [],
  };
  componentDidMount() {
    axios
      .get('https://5f564c7b32f56200168bd3af.mockapi.io/Playlist')
      .then((res) => {
        this.setState({
          playlist: res.data,
        });
      })
      .catch((err) => {
        console.log('API call to get Playlist failed');
      });
  }
  render() {
    const videoArr = this.state.playlist.map((item) => {
      return (
        <VideoCard key={item.id} nowPlaying={this.props.videoId} {...item} />
      );
    });

    return <div className={classes.Playlist}>{videoArr}</div>;
  }
}

import React, { Component } from 'react';

export default class DetailsSection extends Component {
  render() {
    return (
      <div>
        <iframe
          src={`https://player.vimeo.com/video/${this.props.videoData.vimeoId}`}
          frameBorder='0'
        ></iframe>
      </div>
    );
  }
}

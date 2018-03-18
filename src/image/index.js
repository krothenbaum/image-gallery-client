import React, { Component } from 'react';
import './image.css';

class Image extends Component {

  render() {

    return (
      <img src={'https://jar-image-store.s3.us-west-2.amazonaws.com/' + this.props.fileName} alt=""/>
    );
  }
}

export default Image;
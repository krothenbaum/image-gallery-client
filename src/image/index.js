import React, { Component } from 'react';
import './image.css';

class Image extends Component {

  render() {


    return (
      <a href={'https://jar-image-store.s3.us-west-2.amazonaws.com/' + this.props.fileName}>
        <img src={'https://jar-image-store.s3.us-west-2.amazonaws.com/' + this.props.thumbName} alt="" />
      </a>
    );
  }
}

export default Image;
import React, { Component } from 'react';

class Image extends Component {

  render() {

    return (
      <img src={'/images/' + this.props.fileName} alt=""/>
    );
  }
}

export default Image;
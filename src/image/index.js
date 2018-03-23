import React, { Component } from "react";
import "./image.css";

class Image extends Component {
  render() {
    return (
      <div className="image-container">
        <a
          href={`https://jar-image-store.s3.us-west-2.amazonaws.com/${
            this.props.fileName
          }`}
        >
          <img
            src={`https://jar-image-store.s3.us-west-2.amazonaws.com/${
              this.props.thumbName
            }`}
            alt=""
          />
        </a>
        <p>comments</p>
        <p>like</p>
      </div>
    );
  }
}

export default Image;

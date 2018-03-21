import React, { Component } from 'react';
import Image from '../image/';
import './gallery.css';

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: []
    }
  }

  componentDidMount() {
    this.getImages()
      .then(res => {
        res.forEach(item => {
          this.setState({
            images: [...this.state.images, item]
          })
        })
      })
      .catch(err => console.error(err));
  };

  getImages = async () => {
    const response = await fetch('/gallery');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  randomSpan = () => {
    return Math.floor(Math.random() * 3) + 1;
  }

  render() {
    const images = this.state.images;
    return (
      <div className="gallery">
        {images.map(image =>
          <div key={image._id} className={`item vh${this.randomSpan()}`}>
            <Image fileName={image.fileName} thumbName={image.thumbName}/>
          </div>
        )}
      </div>
    );
  }
}

export default Gallery;
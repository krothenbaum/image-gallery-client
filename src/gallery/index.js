import React, { Component } from 'react';

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

  render() {
    console.log(this.state.images);
    const images = this.state.images;
    return (
      <div className="Gallery">
        {images.map(image =>
          <div key={image._id}>
            <p>{image.fileName}</p>
          </div>
        )}
        <p>Gallery</p>
      </div>
    );
  }
}

export default Gallery;
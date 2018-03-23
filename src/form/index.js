import React, { Component } from "react";

class UploadForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null
    };
  }

  fileUpload = async file => {
    console.log("UPLOADING!");
    // console.log(file);
    const url = "/upload";
    const formData = new FormData();
    formData.append("image", file);
    const config = {
      method: "POST",
      body: formData
    };
    return await fetch(url, config);
  };

  onFormSubmit = async e => {
    e.preventDefault();
    await this.fileUpload(this.state.file);
  };

  onChange = e => {
    this.setState({ file: e.target.files[0] });
  };

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <h1>File Upload</h1>
        <input type="file" onChange={this.onChange} />
        <button type="submit">Upload</button>
      </form>
    );
  }
}

export default UploadForm;

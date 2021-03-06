import React from 'react';

export default React.createClass({
 
 goHome() {
    this.props.onHomeClick();
  },

  goToUploads() {
    this.props.onUploadClick();
  },

      render() {
    return (
      <div className="header">
      <div className="logo" onClick={this.goHome}>
        <span className="insta">insta</span>
        <span className="react">react</span>
      </div>
      <div className="search">
        <input placeholder="search..."></input>
      </div>
      <div className="links">
        <div className="button-home" onClick={this.goHome}>Home</div>
        <div className="uploadView-button" onClick={this.goToUploads}>Upload</div>
      </div>
      </div>
    );
  }
}); 
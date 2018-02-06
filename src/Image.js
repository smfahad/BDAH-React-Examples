import React, { Component } from 'react';

class Image extends Component {
  description = () => {
	alert(this.props.children);
  }

  render() {
    return (
	<div className='imgdiv'>
	 <img onClick={this.description} src={this.props.file} className='gallery' />
	    <h2>{this.props.title}</h2>
	    <h4>{this.props.postyear}</h4>
	</div>
    );
  }
}

export default Image;

import React from 'react';

class Dropdown extends React.Component {
  constructor(props) {
	super(props);
	this.state = { color: 'Yellow' };
  }

  setColor = (event) => {
	this.setState({color: event.target.value});
  }

  render() {
   var selectedColor = this.state.color;
    return (
	<div>
	 	<select onChange={this.setColor} value={selectedColor}>
			<option>Red</option>
			<option>Green</option>
			<option>Yellow</option>
			<option>Blue</option>
		</select>
		<br/>
		<h2  className={selectedColor}>
			Selected color is : {selectedColor}
		</h2>
	</div>
    );
  }
}

export default Dropdown;

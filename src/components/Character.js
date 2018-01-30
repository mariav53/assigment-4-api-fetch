import React from 'react';

class Character extends React.Component{
render(){
		return(
			<div className="character_item">
				<h2 className="character_name">{this.props.name}</h2>
				<img src={this.props.image} className="character_img" />
				<h3 className="character_house"> Casa: {this.props.house} </h3>
				<h3 className="character_alive"> {this.props.alive} </h3>
			</div>
		);
	}
}
export default Character;

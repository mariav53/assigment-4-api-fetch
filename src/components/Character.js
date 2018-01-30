import React from 'react';

class Character extends React.Component{

render(){
	return(
			<div className="character_item">
				<h2 className="character_name">{this.props.name}</h2>
				<img src={this.props.image} className="character_img" alt="harrypotter character" />
				<h4 className="character_house"> <span className="nTitle">CASA:</span>  {this.props.house.toUpperCase()} </h4>
				<h4 className="character_alive"> {this.props.alive.toUpperCase()} </h4>
			</div>
		);
	}
}

Character.defaulProps={
	name:'N/A',
	house: 'N/A'
}
export default Character;

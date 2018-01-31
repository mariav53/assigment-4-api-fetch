import React from 'react';
import gryff from '../images/Gryffindor.png';
import huff from '../images/Hufflepuff.png';
import rave from '../images/Ravenclaw.png';
import sly from '../images/Slytherin.png';


class Character extends React.Component{

render(){
	return(
			<div className="character_item">
				<h2 className="character_name">{this.props.name}</h2>
				<div className="character_img_container" style={{background:`url(${this.props.image})`}}>
					<img src={this.props.image} className="character_img" alt={this.props.name} />
				</div>
				<div className={`house img--${this.props.house}`}>
					<h4 className="character_house"> <span className="nTitle">CASA:</span> {this.props.house.toUpperCase()} </h4>
				</div>
				<h4 className="character_alive"> {this.props.alive.toUpperCase()} </h4>
			</div>
		);
	}
}

export default Character;

import React from 'react';
import Header from './Header';
import Search from './Search';
import Character from './Character';
import lupa from './loupe.png'


class App2 extends React.Component {
	constructor(props) {
		super(props);
		this.filterCharacters = this.filterCharacters.bind(this);
		this.state = {
			characters: []
		};
	};

	componentWillMount() {
		fetch('http://hp-api.herokuapp.com/api/characters')
		.then(response => response.json())
		.then(json => {
			const myArray = json
			this.setState({
				characters: myArray
			});
		console.log(this.state.characters);
		});
	}

	filterCharacters(e){
		this.setState({
			myFilterCharacters: e.target.value
		})
		console.log(e);
	}

  	render() {
		let characters = this.state.characters;
		if(this.state.myFilterCharacters){
			characters = characters.filter( character => character.name.toLowerCase().includes(this.state.myFilterCharacters.toLowerCase()))
		}
    return (
			<div>
				<Header />
				<div className="search_container">
					<h4>Encuentra a tu personaje favorito</h4>
					<input type="text" name="search" placeholder="Tu personaje" id="search"  onChange={this.filterCharacters} />
					<img src={lupa} />
				</div>
				<div className="characters_container">
					{characters.map(character => <Character
						name = {character.name}
						image = {character.image}
						house = {character.house}
						alive ={character.alive ? '' : 'Muerto'} />
					)}
				</div>
		  </div>
    );
  }
}

export default App2;

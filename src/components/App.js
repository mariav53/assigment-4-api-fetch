import React from 'react';
import Header from './Header';
import Search from './Search';
import Character from './Character';
import lupa from '../images/loupe.png';


class App extends React.Component {
	constructor(props) {
		super(props);

		this.filterCharacters = this.filterCharacters.bind(this);
			this.state = {
			characters: [],
			myFilterCharacters:'',
			casas: ''
		};
	};

	componentDidMount() {
		fetch('https://hp-api.herokuapp.com/api/characters')
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
		console.log(e.target.value);
	}

  render() {
		let characters = this.state.characters;
			characters = characters.filter( character => character.name.toLowerCase().includes(this.state.myFilterCharacters.toLowerCase()))
			.filter(character => character.house.toLowerCase().includes(this.state.casas.toLowerCase()))

    return (
			<div>
				<Header />
				<div className="search_container">
					<Search onChangeSearch ={this.filterCharacters}/>
				</div>
				<div className="characters_container">
					{characters.map(character => <Character
						name = {character.name}
						image = {character.image}
						house = {character.house ? character.house : 'N/A'}
						alive ={character.alive ? '' : '\u271d'} />
					)}
				</div>
		  </div>
    );
  }
}

export default App;

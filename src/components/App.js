import React from 'react';
import Character from './Character';


class App extends React.Component {
	constructor(props){
		super(props);

		this.filterCharacters = this.filterCharacters.bind(this);
		this.state = {
      characters: []
    };
	}

componentDidMount(){
	fetch('http://hp-api.herokuapp.com/api/characters')
		.then(response => response.json())
		.then(json => {
			const arrayList = json
				this.setState({
				characters: arrayList
			});
	});
}


paintCharacters(){
	const list =[];
	for(const listOfCharacters of this.state.characters ){
	list.push(
		<li>
			<Character
				name = {listOfCharacters.name}
				image = {listOfCharacters.image}
				house = {listOfCharacters.house}
				alive ={listOfCharacters.alive ? 'Vivo' : 'Muerto'}
			/>
		</li>
		);
	}
	return list;
	}

	filterCharacters(e){
		const mytarget= this.e.target.value;
		console.log(mytarget);

}
render() {
	return (
		<div>
			<header>
				<h2 className="header_title">Harry Potter Characters</h2>
				<input type="text" id="search" className="search" onChange ={this.filterCharacters} />
			</header>
			<main>
					<ul className="characters_container">{this.paintCharacters()}</ul>
			</main>
		</div>
		);
	}
}
export default App;

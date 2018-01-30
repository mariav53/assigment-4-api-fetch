import React from 'react';
import Character from './Character';


class App extends React.Component {
	constructor(props){
		super(props);
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
	// 
	// filterCharacters(e){
	//  const searchInput = document.querySelector ('search');
	//  const mytarget= e.target.value;
	//  if(search.includes("cebolla")){
	//
	//  }
	//
	// };


render() {
	return (
		<div>
		<h2>Harry Potter Characters</h2>
		<input type="text" className="search" />
		<button>buscar</button>
  		<div>
				<ul className="characters_container">{this.paintCharacters()}</ul>
			</div>
		</div>
		);
	}
}
export default App;

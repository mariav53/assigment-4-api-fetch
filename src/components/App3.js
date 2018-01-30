import React from 'react';
import Header from './Header';
import Search from './Search';
import Character from './Character';


class App extends React.Component {
	constructor(props){
		super(props);

		// this.filterCharacters = this.filterCharacters.bind(this);
		this.state = {
      characters: [],
			listOfCharacters: []
    };
	}

	componentWillMount(){
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
		let list =[];
		for(let listOfCharacters of this.state.characters ){
		list.push(
			<li>
				<Character
					name = {listOfCharacters.name}
					image = {listOfCharacters.image}
					house = {listOfCharacters.house}
					alive ={listOfCharacters.alive ? '' : 'Muerto'}
				/>
			</li>
			);
		}
		return list;
		}




	// paintCharacters(){
	// 	let list =[];
	// 	for(let listOfCharacters of this.state.characters ){
	// 	list.push(
	// 		<li>
	// 			<Character
	// 				name = {listOfCharacters.name}
	// 				image = {listOfCharacters.image}
	// 				house = {listOfCharacters.house}
	// 				alive ={listOfCharacters.alive ? '' : 'Muerto'}
	// 			/>
	// 		</li>
	// 		);
	// 	}
	// 	return list;
	// 	}

	// 	filterCharacters(e){
  // 		let listOfCharacters = this.state.listOfCharacters.filter((character) => {
  //   	let enteredText = e.target.value.toLowerCase();
  //   	let name = character.name.toLowerCase();
	// 		console.log(name);
  //   	if (!enteredText.length) {
  //     	return false;
  //   	}
  //   	return name.includes(enteredText);
  // 	});
	// 	this.setState({
	// 		listOfCharacters
	// 	});
	// }
  //


		// filterCharacters(e) {
		// 	let list = this.state.characters;
		// 	let val = e.target.value.toLowerCase();
		// 	let filterCharacters = list.filter(v => v.name.toLowerCase().includes(val));
		// 	return list.name.includes(val);
		//       //
		// 	 this.setState({
		// 	 	filterCharacters
		// 	 });
		// }
		filterCharacters(e){
		this.setState({
			filter: e.target.value
		})
		console.log(e);
	}
	// }


	render() {
		let listOfFilterCharacters = this.state.characters;
		if(this.state.filter){
			listOfFilterCharacters = listOfFilterCharacters.filter( listOfFilterCharacters => listOfFilterCharacters.name.toLowerCase().includes(this.state.filter.toLowerCase()))
		}
		return (
			<div>
				<Header />
				<Search />
				<section>
					<ul className="characters_container">{this.paintCharacters()}</ul>
				</section>
			</div>
		);
	}
}
export default App;

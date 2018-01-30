// <div className="character_item">
// 	<img src="" />
// 	<h3 className="character_name">Character name</h3>
// </div>
// <div className="character_item">
// 	<img src="" />
// 	<h3 className="character_name">Character name</h3>
// </div>
// <div className="character_item">
// 	<img src="" />
// 	<h3 className="character_name">Character name</h3>
// </div>
// <div className="character_item">
// 	<img src="" />
// 	<h3 className="character_name">Character name</h3>
// </div>
// <div className="character_item">
// 	<img src="" />
// 	<h3 className="character_name">Character name</h3>
// </div>



// 	const list = json;
// 	for( const lista of list){
// 	 lista.name;
//  }




	componentWillMount() {
	fetch('http://hp-api.herokuapp.com/api/characters')
       .then((response) => {
         return response.json()
       })
       .then((characters) => { //characters = json
         this.setState({
					 characters: characters
				  })
       })
   }





paintCharacters(){
	const list =[];
	for(const listOfCharacters of this.state.characters ){
		list.push(
			<div>{listOfCharacters.name}</div>
		);
	}
	return(
		<div>
 			{
	 			list
 			}
		</div>);
	}

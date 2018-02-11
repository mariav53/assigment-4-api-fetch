import React from 'react';

class Search extends React.Component{
render(){
	return(
		<div className="search_container">
			<h4>Encuentra a tu personaje favorito</h4>
			<input type="text" name="search" placeholder="Tu personaje" id="search" onChange={this.props.onChangeSearch} />
		</div>
		);
	}
}
export default Search;

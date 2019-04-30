import React from 'react';
import logo from './logo.png';
import './search.scss'

class SearchBar extends React.Component {
constructor(props){
    super(props);
    this.state={
        search: "",
        searchData: props.searchData
    }
}

handleChanges = event => {
    this.setState({
        ...this.state.searchData,
        [event.target.name]: event.target.value
    })
}

formSearch = event => {
    event.preventDefault();
    this.setState({
        ...this.state.searchData,
        search: ""
    })
}


render(){
    return (
        <div className="search-bar">
            <div className="logo-img">
            <i className="fab fa-instagram"></i><p> | Instagram</p>
            </div>
            <form onSubmit={this.state.formSearch} className="search-form">
            <input
            placeholder="&#xF002; Search"
            value={this.state.search}
            onChange={this.handleChanges}
            name="search"
            required
            />
            </form>
            <div className="search-icons">
            <i className="far fa-compass"></i>
            <i className="far fa-heart"></i>
            <i className="far fa-user"></i>
            </div>
        </div>
    )
    }
}


export default SearchBar;
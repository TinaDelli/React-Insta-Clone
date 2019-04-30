import React from 'react';
import camera from './camera.png';
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
            <i class="fab fa-instagram"></i> | <img src={logo} />
            </div>
            <form onSubmit={this.state.formSearch}>
            <input
            placeholder="Search"
            value={this.state.search}
            onChange={this.state.handleChanges}
            name="search"
            required
            />
            </form>
            <div className="search-icons">
            <i class="far fa-compass"></i>
            <i class="far fa-heart"></i>
            <i class="far fa-user"></i>
            </div>
        </div>
    )
    }
}


export default SearchBar;
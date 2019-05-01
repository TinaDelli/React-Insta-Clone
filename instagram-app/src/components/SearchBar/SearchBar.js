import React from 'react';
import logo from './logo.png';
import './search.scss'

class SearchBar extends React.Component {

    state={
        // search:"",
        searchData: [],
        searchDisplay: []
    }


componentDidMount(){
    this.setState({
        searchData: this.props.searchData,
        searchDisplay: this.props.searchDisplay
    })
}

componentDidUpdate(prevState){
    if(this.state.searchDisplay !== prevState.searchDisplay){
        console.log('hey I has update')
    }

}


// formSearch = event => {
//     event.preventDefault();
//   console.log('Success!')
  
// }

// formSearch = (event) => {
//     event.preventDefault();
//     this.setState({
//       searchData: this.state.searchData.map(post => 
//        { if (post.username === event){return {...post }}}
//         ) 
//       })
// }


render(){
    console.log(this.state)
    return (
        <div className="search-bar">
            <div className="logo-img">
            <i className="fab fa-instagram"></i><p> | Instagram</p>
            </div>
            <form onSubmit={event => this.props.formSearch(event, this.state.search)} className="search-form">
            <input
            placeholder="&#xF002; Search"
            value={this.props.search}
            onChange={this.props.handleChanges}
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
import React from 'react';
import './search.scss'
import styled from 'styled-components';


const SearchBarDiv = styled.div`
margin: 0 auto;
padding: 0 7rem;
display:flex;
justify-content: space-between;
align-items:baseline;
border-bottom: 1px solid  #e6e6e6;

input {
    font-family: "FontAwesome", sans-serif;
    font-size:0.7rem;
    text-align:center;
    padding: 0.5rem 3rem;
    background: #F8F8F8;
    border: 1px solid #b3b3b3;
    border-radius:0.2rem;
}

`;

const LogoDiv = styled.div`
display:flex;
max-height:6rem;
padding-left:2.5rem;
font-size: 2rem;
font-weight: lighter;
align-items:baseline;

i{
    padding-top:1rem;
    padding-right:1rem;
}    

p{
    font-family: 'Grand Hotel',cursive;
    font-weight: bold;
    letter-spacing: 1px;
    color: #262626;

    span{
        font-family:Ariel;
        font-weight:lighter;
        font-size:2.4rem;
    }
}
`;

const SearchIcons = styled.div`
    padding-right:3rem;

    i{
        padding: 0 1rem;
        font-size:1.5rem;
        font-weight:100;
    }
`


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
        <SearchBarDiv>
            <LogoDiv>
            <i className="fab fa-instagram"></i><p> <span>|</span> Instagram</p>
            </LogoDiv>
            <form onSubmit={event => this.props.formSearch(event, this.state.search)} className="search-form">
            <input
            placeholder="&#xF002; Search"
            value={this.props.search}
            onChange={this.props.handleChanges}
            name="search"
            required
            />
            </form>
            <SearchIcons>
            <i className="far fa-compass"></i>
            <i className="far fa-heart"></i>
            <i className="far fa-user"></i>
            </SearchIcons>
        </SearchBarDiv>
    )
    }
}


export default SearchBar;
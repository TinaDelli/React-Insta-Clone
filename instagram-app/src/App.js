import React from 'react';
import './App.scss';
import {dummyData} from '../src/dummy-data';
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      display: [],
      search: ''
      
    };
  }

  componentDidMount(){
    this.setState({
      data: dummyData,
      display: dummyData
    })
  
  }

  handleChanges = event => {
    event.preventDefault();
    this.setState({
      search: event.target.value,
      display: this.state.data.filter(data =>
      data.username.includes(event.target.value)
      )
    });
  }

//   formSearch = (event, search) => {
//     event.preventDefault();
//   console.log('Success!')
//   this.setState({
//     display: this.state.data.filter(data => data.username.includes(search))
//   })

  
// }

  render() {
  return (
    <div className="App">
    <div>
    <SearchBar 
      search={this.state.search} 
      searchData ={this.state.data} 
      // formSearch={this.formSearch} 
      searchDisplay ={this.state.display} 
      handleChanges={this.handleChanges}
    />

     <PostContainer posts={this.state.display} addNewLikes={this.addNewLikes} key={this.state.data.id}/>
     </div>
    </div>
  );
}
}
export default App;

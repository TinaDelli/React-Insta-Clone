import React from 'react';
import './App.scss';
import {dummyData} from '../src/dummy-data';
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: dummyData,
    };
  }

  render() {
  return (
    <div className="App">
    <div>
    <SearchBar searchData ={this.state.data} />
     <PostContainer posts={this.state.data} />
     </div>
    </div>
  );
}
}

export default App;

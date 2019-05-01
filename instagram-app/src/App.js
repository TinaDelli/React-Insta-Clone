import React from 'react';
import './App.scss';
import PostPage from './components/PostContainer/PostPage';
import Login from './components/Login/Login';
import withAuthenticate from './authentication/withAuthenticate';

const ComponentFromWithAuthenticate = withAuthenticate(PostPage)(Login);

const App = () => {
 
  return (
    <div className="App">
    <ComponentFromWithAuthenticate  />
    </div>
  );
}

export default App;

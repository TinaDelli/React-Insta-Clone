import React from 'react';

class Login extends React.Component{
    constructor(){
        super();
        this.state = {
            isLoggedIn: false
        }
    }

    logIn = event => {
        event.preventDefault();
        if(localStorage.getItem('username')){
            localStorage.removeItem('username');
            this.setState({isLoggedIn: false});
        } else {
            window.location.reload(
            localStorage.setItem('username', 'Bob123'),
            this.setState({isLoggedIn: true})
            )
        }
    }

    render(){
    return <div>
                <h1>Please Login Below</h1>
                <form>
                    <input placeholder="username"></input>
                    <input placeholder="password"></input>
                    <button onClick={this.logIn}>Login</button>
                </form>
            </div>
    }
}

export default Login;
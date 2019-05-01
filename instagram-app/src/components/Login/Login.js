import React from 'react';

class Login extends React.Component{
    constructor(){
        super();
        this.state = {
            username: "",
            password: ""
        }
    }

    handleInput = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    logIn = event => {
        event.preventDefault();
        const user= this.state.username
        localStorage.setItem('username', user)
        window.location.reload();
    }

    render(){
    return <div>
                <h1>Please Login Below</h1>
                <form onChange={this.handleInput}>
                    <input placeholder="username" value={this.state.username} type='text' name='username'  ></input>
                    <input placeholder="password" value={this.state.password} type='text' name='password'></input>
                    <button onClick={this.logIn}>Login</button>
                </form>
            </div>
    }
}

export default Login;
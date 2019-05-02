import React from 'react';
import logo from './logo.png';
import styled from 'styled-components';

const WrappedDiv = styled.div`
    margin:10rem 32rem 5rem;
    padding-bottom:12rem;
    `

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
    return <WrappedDiv>
                <img src={logo} alt="Instagram logo" />
                <h1>Sign up to see photos and videos from your friends.</h1>
                <button>Log in with Facebook</button>
                <p>Or</p>
                <form onChange={this.handleInput}>
                    <input placeholder="username" value={this.state.username} type='text' name='username'  ></input>
                    <input placeholder="password" value={this.state.password} type='text' name='password'></input>
                    <button onClick={this.logIn}>Login</button>
                </form>
                <form>Don't have an account? <span>Sign up</span> </form>
            </WrappedDiv>
    }
}

export default Login;
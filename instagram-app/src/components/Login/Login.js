import React from 'react';
import logo from './logo.png';
import phone from './Phone.jpg';
import styled from 'styled-components';

const PageDiv = styled.div `
    margin: 0 auto;
    display: flex;
`
const WrappedDiv = styled.div`
    margin:10rem 32rem 5rem;
    padding: 0 1rem 8rem 1rem;
    background: white;
    border: 1px solid #b3b3b3
    color: #bfbfbf

    img{
        padding-top:1.5rem;
        max-width:12rem;
    }

    input{
        margin-bottom:0.5rem;
        padding: 0.5rem 3rem;
        background: #F8F8F8;
        border: 1px solid #e6e6e6;
        border-radius:0.2rem;
        color:#b3b3b3;
    }
    `;

    const Button = styled.button`
    font-size: 1.5em;
    margin: 1em;
    padding: 0.25em 2em;
    border: 2px solid #4d94ff;
    background: #4d94ff;
    border-radius: 3px;
    color:white;
    cursor: pointer;
    `;

    const Phone = styled.div` 
    margin: 0 auto;
    background:#F0F0F0;

    img{
        align-selft:left;
    }
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
        return (
                <PageDiv>
                <Phone>
                    {/* <img src={phone} alt="phone" /> */}
                <WrappedDiv>
                    <img src={logo} alt="Instagram logo" />
                    <h1>Sign up to see photos and videos from your friends.</h1>
                    <Button>Log in with Facebook</Button>
                    <p>Or</p>
                    <form onChange={this.handleInput}>
                        <input placeholder="username" value={this.state.username} type='text' name='username'  ></input>
                        <input placeholder="password" value={this.state.password} type='text' name='password'></input>
                        <Button onClick={this.logIn}>Login</Button>
                    </form>
                    <form>Don't have an account? <span>Sign up</span> </form>
                </WrappedDiv>
                </Phone>
                </PageDiv>
        )
    }
}
export default Login;
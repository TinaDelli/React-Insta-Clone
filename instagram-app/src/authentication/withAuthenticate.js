import React from 'react';

const withAuthenticate = Component => LoginPage =>
class extends React.Component {
    constructor(){
        super();
        this.state ={
            isLoggedIn: false
        }
    }

    componentDidMount(){
        if (!localStorage.getItem('username')){
            this.setState({
                logIn:false
                
            })
        } else {
            this.setState({
                logIn:true
            })
        }
    }

    render(){ 
        if (localStorage.getItem('username')){
       return <Component  />
        } else {
            return <LoginPage />
        }
    }
}


export default withAuthenticate;
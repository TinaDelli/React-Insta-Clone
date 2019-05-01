import React from 'react';

const withAuthenticate = Component => LoginPage =>
class extends React.Component {

    render(){ 
        if (localStorage.getItem('username')){
       return <Component  />
        } else {
            return <LoginPage />
        }
    }
}


export default withAuthenticate;
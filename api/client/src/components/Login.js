import React, { Component } from 'react';

class Login extends Component {
    render(){
        return(
            <div>

                <form>
                   
                    <input placeholder="Email"></input>
                    
                    <input placeholder="Mot de passe"></input>
                    
                    <button type="submit">Submit</button>
                </form>
            </div>
        );

        
    };
};
 export default Login;
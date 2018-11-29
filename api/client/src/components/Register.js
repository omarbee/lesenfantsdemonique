import React, { Component } from 'react';


class Register extends Component {
    render(){
        return(
            <div>

                <form>
                    <input placeholder="Nom"></input>
                    <input placeholder="Prenom"></input>
                    <input placeholder="Email"></input>
                    <input placeholder="Rue"></input>
                    <input placeholder="Ville"></input>
                    <input placeholder="Code postal"></input>
                    <input placeholder="Mot de passe"></input>
                    <input placeholder="confirmer mot de passe"></input>
                    <button type="submit" formAction="addUser">Submit</button>
                </form>
            </div>
        );

        
    };
};
 export default Register;
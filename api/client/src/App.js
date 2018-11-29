import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Register from './components/Register'
import Login from './components/Login'

const API_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YmU5ODIwYjFlY2MzMzVhMWViNTkxYmYiLCJlbWFpbCI6ImxvaWNrNjlAZ21haWwuY29tIiwiaWF0IjoxNTQyMDMwMDk4fQ.lziNTy51UZ5-gey3Gu0M4J8rqN9KmyPdXzc-RMK46ZM";
var myHeaders = new Headers();
myHeaders.append("x-access-token", API_TOKEN);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {users: []};
  }
  componentWillMount(){
    fetch('/user', {headers: myHeaders})
    .then(response => response.json())
    .then(users => this.setState({ users }));
  }
  render() {
    return (
      <div className="App">
        <h1>Users</h1>
          <ul>
            {this.state.users.map(user =>
              <li key={user._id}>{user.firstname} {user.lastname}</li>
            )}

            
          </ul>
        <BrowserRouter>
          <div>
            
            <Route exact path="/Register" component={Register} />
            <Route exact path="/Login" component={Login} />
            
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

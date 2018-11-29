import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Register from './components/Register'
import Login from './components/Login'

class App extends Component {
  state = {users: [] }
  componentWillMount(){
    fetch('/user')
    .then(res => res.user())
    .then(users =>this.setState({ users }));
  }
  render() {
    return (
      <div className="App">
        <h1>Users</h1>
          <ul>
            {this.state.users.map(user =>
              <li key={user.id}>{user.username}</li>
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

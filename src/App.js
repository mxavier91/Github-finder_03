import React, { Component } from 'react';
import Navbar from './Components/layout/Navbar';
import Users from './Components/Users/Users'
import Search from './Components/Users/Search'
import axios from 'axios'
import './App.css';

class App extends Component {
  state = {
    users: [],
    loading: false
  }

  async componentDidMount() {
    this.setState({ loading: true })

    const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)

    this.setState({ users: res.data, loading: false })
    console.log(this.state.users)
  }

  render() {
    return (
      <div className="App">
          <Navbar icon="fab fa-github" title="Github Finder" />
      <div className="container">
        <Search />
        <Users loading={this.state.loading} users={this.state.users} />
       </div>
      </div>
    );
  }
}

export default App;

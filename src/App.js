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

  // Get Users
  // async componentDidMount() {
  //   this.setState({ loading: true })

  //   const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)

  //   this.setState({ users: res.data, loading: false })
  // }

  // Search Github Users
  searchUsers = async text => {
    this.setState({ loading: true })

    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)

    this.setState({ users: res.data.items, loading: false })
  }

  // Clear Users from state
  clearUsers = () => this.setState({ users: [], loading: false })

  render() {
    const { users, loading } = this.state;
    return (
      <div className="App">
          <Navbar icon="fab fa-github" title="Github Finder" />
      <div className="container">
        <Search searchUsers={this.searchUsers} clearUsers={this.clearUsers} showClear={users.length > 0 ? true : false} />
        <Users loading={loading} users={users} />
       </div>
      </div>
    );
  }
}

export default App;

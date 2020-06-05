import React, { Component } from 'react';

const UserContext = React.createContext();
// Provider, Consumer

export class UserProvider extends Component {
  state = {
    user: {},
    dispatch: action => {
      this.reducer(action)
    }
  }
  componentWillMount() {
    fetch('https://randomuser.me/api/')
      .then(response => response.json())
      .then(data => this.setState({ user: data }))
      .catch(err => alert('Opps!'))
  }

  reducer = (action) => {
    switch (action.type) {
      case "CHANCE_USER":
        fetch('https://randomuser.me/api/')
          .then(response => response.json())
          .then(data => this.setState({ user: data }))
          .catch(err => alert('Opps!'))
        break;
      default:
        break;
    }
  }

  render() {
    return (
      <UserContext.Provider value={this.state}>
        {this.props.children}
      </UserContext.Provider>
    )
  }
}
const UserConsumer = UserContext.Consumer;

export default UserConsumer;
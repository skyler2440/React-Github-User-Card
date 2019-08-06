import React from "react";
import UserCard from './components/UserCard'
import "./App.css";
class App extends React.Component {
  constructor() {
    super();
    // we would not have access to `this` w/out you super!
    this.state = {
      userCard:[],
      followerCard:[],
    };
  }
  // state = {}
  
  componentDidMount() {
    this.fetchUser();
  }
 
  
  fetchUser = () => {
    fetch(`https://api.github.com/users/skyler2440`)
    .then(response => {
      // first promise resolution is used to format the data.
        return response.json();
      })
      .then(users => this.setState({ userCard: users }))
      .catch(err => {
        console.log(err);
        // HANDLE THIS ERROR
      });
    };
    
  render() {
console.log(this.state.userCard
  )
    return (
      <div>
        <h1>GitHub Stats</h1>
        <UserCard user={this.state.userCard} />
      </div>
    );
  }
}
export default App;

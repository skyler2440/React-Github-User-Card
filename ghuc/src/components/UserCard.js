import React from 'react';

class UserCard extends React.Component {
  constructor(props){
      super(props)
      this.state={
        followersCard: []
      }
  }
  componentDidMount() {
      this.fectchFollowers()
  }
  fectchFollowers = () =>{
      fetch(`https://api.github.com/users/skyler2440/followers`)
      .then(res => {
          return res.json();
      })
      .then(followers => this.setState({ followersCard: followers}))
      .catch(err => {
          console.log(err)
      })
  }
    render() {
    console.log(this.state.followersCard)
    return(
        <>
        <div className='card'>
        <h2>Username: {this.props.user.login || 'N/A'}</h2>
        <img src={this.props.user.avatar_url } alt='avatar'/>
        <h3>Location: {this.props.user.location || 'N/A'}</h3>
        <h3><a href={this.props.user.html_url || 'N/A'}>Checkout Profile Here</a></h3>
        <h3>Following {this.props.user.following || 'N/A'} users</h3>
        <h3>Has {this.props.user.followers || 'N/A'} followers</h3>
        <h3>Bio: {this.props.user.bio || 'N/A'}</h3>
        <h1>User's GitHub Followers</h1>
        </div>
        {this.state.followersCard.map(mres => {
            return (
                <>
            <h2 key={mres.login}>Username: {mres.login}</h2>
            <img key={mres.avatar_url} src={mres.avatar_url} alt='avatar'/>
        <h3><a href={mres.html_url || 'N/A'}>Checkout Profile Here</a></h3>

            </>
            )
        })}
        </>
    )
}}

export default UserCard;
import React from 'react';

const UserCard = props => {
    
    console.log(props)
    return(
        <>
        <h1>{props.user.login}</h1>
        <img src={props.user.avatar_url} alt='avatar'/>
        </>
    )
}

export default UserCard;
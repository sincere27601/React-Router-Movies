import React from 'react';

const SavedList = props => (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map(movie => (
      <span className="saved-movie">{movie.title}</span>
    ))}

    //Add functionality so the `Home` button on the `SavedList` component navigates back to home.
   <div className="home-button" onClick={() => props.history.push("/")}>Home</div>
      
  </div>
);

export default SavedList;

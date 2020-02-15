import React, { useState } from 'react';

import SavedList from './Movies/SavedList';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    //Make it so that the card in `MovieList` is a link
    <div>
      <div className="movie-link">
        <Link to={`/movies/${key}`}>MovieList</Link>
      </div>
      <SavedList list={savedList} />
       //Wrap your app with the router.
       //Inside your App file add two routes.
        - [ ] one route for `/` that loads the `MovieList` component.
      - [ ] one route that will take an `id` parameter after`/movies/` 
      <Route path="/" component={MovieList} />
      <Route path="/movies/: id" component={Movies} />
    </div>

  );
}
  


export default App;

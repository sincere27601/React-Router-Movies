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
    // Although there are no bugs, I have not had the ability to see the finished product.
    // since my first build week I've had trouble with accessing my terminal via Visual Studio Code.
    // The partner I had put a code or something into the system that disabled my access. I have not been able to get on since. 
    // I tried starting yarn in the root of the directory, which I assumed was under package.json start, and I hit start. this opened up my terminal but there is still no active page with localhost:3000.
    //I also used the laptop terminal to activate Yarn start. This worked and watched for errors, but still no live localhost:300.
  );
}
  


export default App;

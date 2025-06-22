import React from 'react';
import ProfileView from './ProfileView';
import { dogs } from '../data/dogs';

function HomeView() {
  return (
    <div className="App" style = {{padding: '2rem 1rem'}}>
      {dogs.map((dog) => (
        <ProfileView key={dog.id} dog={dog} />
      ))}
    </div>
  );
}

export default HomeView;

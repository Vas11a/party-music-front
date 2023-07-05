import React from 'react'
import Main from './modules/MainSong/Main';
import SongList from './modules/SongList/SongList';
import FindSong from './modules/FindSongs/FindSong';

function App() {
  return (
    <div className='wrapper'>
      <Main/>
      <SongList/>
      <FindSong/>
    </div>
  );
}

export default App;

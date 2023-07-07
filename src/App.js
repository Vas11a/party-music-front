import React from 'react'
import Main from './modules/MainSong/Main';
import SongList from './modules/SongList/SongList';
import FindSong from './modules/FindSongs/FindSong';
import openMenu from './imgs/openMenu.png'

function App() {
  const [isMenuOpen, setMenuOpen] = React.useState(false);
  return (
    <div className='wrapper'>
      <Main/>
      <SongList/>
      <div onClick={() => setMenuOpen(!isMenuOpen)} className='block-menu-opener'>
          <img alt='+' src={openMenu} className='img-menu-opener' />
      </div>
      {
        isMenuOpen && <FindSong/>
      }
      
    </div>
  );
}

export default App;

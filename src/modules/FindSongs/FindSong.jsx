import React from 'react'
import plus from '../../imgs/plus.png'
import download from '../../imgs/download.png'
import arr from '../../imgs/arr.png'

export default function FindSong() {
  return (
    <div className='find-songs-block'>
        <div className="find-song-title">Fond Song</div>

        <input type="text" className='input-text' />
        <div className="ans-block scrollbar">
            <div className="found-song">
                <div className="found-song-name">Song Name</div>
                <img src={download} alt="Download" className='img-found-song' />
            </div>
            <div className="found-song">
                <div className="found-song-name">Song Name</div>
                <img src={download} alt="Download" className='img-found-song' />
            </div>
            <div className="found-song">
                <div className="found-song-name">Song Name</div>
                <div className="block-add-song">
                  <img src={arr} alt="^" className='img-add-song img-add-song-start' />
                  <img src={arr} alt="v" className='img-add-song img-add-song-end' />
                </div>
                
            </div>
            <div className="found-song">
                <div className="found-song-name">Song Name</div>
                <img src={download} alt="Download" className='img-found-song' />
            </div>

            <div className="found-song">
                <div className="found-song-name">Song Name</div>
                <img src={plus} alt="+" className='img-found-song' />
            </div>
            <div className="found-song">
                <div className="found-song-name">Song Name</div>
                <img src={plus} alt="+" className='img-found-song' />
            </div>
            <div className="found-song">
                <div className="found-song-name">Song Name</div>
                <img src={plus} alt="+" className='img-found-song' />
            </div>
        </div>
    </div>
  )
}

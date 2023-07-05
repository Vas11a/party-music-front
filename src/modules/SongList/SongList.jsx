import React from 'react'
import Song from './Song'


export default function SongList() {
  return (
    <div className='songlist-block scrollbar'>
        <Song/>
        <Song/>
        <Song/>
        <Song/>
        <Song/>
        <Song/>
    </div>
  )
}

import React from 'react'
import arr from '../../imgs/arr.png'
import remove from '../../imgs/remove.png'

export default function Song() {
    return (
        <div className="song">
            <div className="song-name">Song Name</div>
            <div className="buttons">
                <img src={arr} alt="" className='up' />
                <img src={arr} alt="" className='down' />
                <img src={remove} alt="" className='remove' />
            </div>
        </div>

    )
}

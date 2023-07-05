import React from 'react'

export default function Slider({val, fc}) {


    return (
        <div className="slider">
            <input type="range" onChange={fc} min="0" max="50" value={val} id="range2" />
        </div>
    )
}

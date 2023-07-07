import React from 'react'
import next from '../../imgs/next.png'
import restart from '../../imgs/reload.png'
import Slider from '../../components/Slider'
import play from '../../imgs/play.png'
import pause from '../../imgs/pause.png'

export default function MainSong() {

    let [sliderValue, setSliderValue] = React.useState(0);
    const onChangeValue = (event) => {
        setSliderValue(+event.target.value)
    }


    return (
        <div className="main-song-block">
            <div className="name-time">
                <div className="name">Song name</div>
                <div className="time">3.25</div>
            </div>
            <img src={play} className='play-pause' alt=">" />
            <div className="controll-main">
                <div className="restart">
                    <img src={restart} className='restart-img' alt="R" />
                </div>
                <Slider val={sliderValue} fc={onChangeValue} />
                <div className="next">
                    <img src={next} className='next-img' alt=">>" />
                </div>
            </div>
        </div>
    )
}

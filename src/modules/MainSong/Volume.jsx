import React from 'react'
import Slider from '../../components/Slider'
import minus from '../../imgs/minuse.png'
import plus from '../../imgs/plus.png'

export default function Volume() {

    let [sliderValue, setSliderValue] = React.useState(0);
    const onChangeValue = (event) => {
        setSliderValue(+event.target.value)
    }

    const minusValue = () => {
        if (sliderValue > 0) {
            setSliderValue(sliderValue -= 1)
        }
    }


    const plusValue = () => {
        if (sliderValue < 50) {
            setSliderValue(sliderValue += 1)
        }
    }

    return (
        <div className="volume-block">
            <div className="volume-text">Volume</div>
            <div className="change-vol-block">
                <img src={minus} alt="-" onClick={minusValue} />
                <Slider val={sliderValue} fc={onChangeValue} />
                <img src={plus} alt="+" onClick={plusValue} />
            </div>
        </div>
    )
}

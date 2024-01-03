import React, { useState, useEffect } from 'react';
import './SortingComponent.css';

import { PRIMARY_COLOR, randomNumberFrom } from "../../Utilities/utils";

import { bubbleSort } from '../../algorithms/bubbleSort';
import { mergeSort } from "../../algorithms/mergeSort";

function SortingComponent() {
    const [arr, setArr] = useState([]);
    const [arrSize, setArrSize] = useState(50);
    const [wid, setWid] = useState(9);

    function resetArr() {
        let i;
        const arr = [];
        for (i = 0; i < arrSize; i++) {
            arr.push(randomNumberFrom(8, 650));
        }
        setArr(arr);
        const elem = document.querySelectorAll('.element-bar');
        for (i = 0; i < elem.length; i++) {
            elem[i].style.background = PRIMARY_COLOR
        }
    }


    useEffect(() => {
        resetArr();
    }, [])


    function setArrSizeHelper(val) {
        console.log(val);
        if (val > 100) {
            setWid(2)
        }
        else if (val > 80) {
            setWid(5);
        }
        else if (val > 70) {
            setWid(7);
        }
        else if (val > 60) {
            setWid(10);
        }
        else if (val > 50) {
            setWid(15);
        }
        else if (val > 40) {
            setWid(19);
        }
        else if (val > 30) {
            setWid(25);
        }
        else if (val > 20) {
            setWid(33);
        }
        else if (val > 10) {
            setWid(40);
        }
        else {
            setWid(60);
        }

        setArrSize(val);
        resetArr();
    }

    return (
        <div>
            <div className='array'>

                {arr.map((val, idx) => (
                    <div
                        className='element-bar'
                        key={idx}
                        style={{
                            height: `${val}px`,
                            width: `${wid}px`,
                            backgroundColor: PRIMARY_COLOR,
                        }} >
                    </div>
                ))}

            </div>

            <label className='sliderLabel'>
                Array Size
                <br />
                <input id='rangeSlider' type='range' min='5' max='200' value={arrSize} onChange={(e) => setArrSizeHelper(e.target.value)} />
            </label>

            <button onClick={resetArr}>Generate array</button>
            <button onClick={mergeSort}>mergeSort Sort</button>
            <button onClick={bubbleSort}>Bubble Sort</button>

        </div>
    )
}

export default SortingComponent;
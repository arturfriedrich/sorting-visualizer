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
        const widthLookup = [
            { limit: 100, width: 2 },
            { limit: 80, width: 5 },
            { limit: 70, width: 7 },
            { limit: 60, width: 10 },
            { limit: 50, width: 15 },
            { limit: 40, width: 19 },
            { limit: 30, width: 25 },
            { limit: 20, width: 33 },
            { limit: 10, width: 40 },
            { limit: 0, width: 60 },
        ];

        const width = widthLookup.find(item => val > item.limit).width;
        setWid(width);

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
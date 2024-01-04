import React, { useState, useEffect } from 'react';
import './SortingComponent.css';

import { PRIMARY_COLOR, randomNumberFrom } from "../../Utilities/utils";

import { bubbleSort } from '../../algorithms/bubbleSort';
import { mergeSort } from "../../algorithms/mergeSort";
import { quickSort } from "../../algorithms/quickSort";
import { insertionSort } from "../../algorithms/insertionSort";
import { selectionSort } from "../../algorithms/selectionSort";
import { heapSort } from "../../algorithms/heapSort";

import { Modal } from "../Modal/modal";

import { FaInfo } from "react-icons/fa";

function SortingComponent() {
    const [arr, setArr] = useState([]);
    const [arrSize, setArrSize] = useState(50);
    const [wid, setWid] = useState(9);

    const [mergeSortModal, setMergeSortModal] = useState(false);
    const [bubbleSortModal, setBubbleSortModal] = useState(false);
    const [quickSortModal, setQuickSortModal] = useState(false);
    const [insertionSortModal, setInsertionSortModal] = useState(false);
    const [selectionSortModal, setSelectionSortModal] = useState(false);
    const [heapSortModal, setHeapSortModal] = useState(false);

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
            <div className='sidebar'>
                <div className='functions'>
                    <h1>Sorting Visualizer</h1>

                    <label className='sliderLabel'>
                        Array Size
                        <br />
                        <input id='rangeSlider' type='range' min='5' max='200' value={arrSize} onChange={(e) => setArrSizeHelper(e.target.value)} />
                    </label>

                    <button onClick={resetArr}>Generate array</button>

                    <div className="button-section">
                        <button className="sort-button" onClick={mergeSort}>Merge Sort</button>
                        <Modal show={mergeSortModal} handleClose={() => setMergeSortModal(false)}>
                            <h3 className="modal-title">Merge Sort</h3>
                            <p className="modal-text">
                                Merge Sort is a popular and efficient sorting algorithm that follows the divide-and-conquer paradigm.
                                The algorithm works by recursively dividing the input array into smaller halves until each subarray
                                consists of a single element. Then, it merges these sorted subarrays back together, combining them
                                in a way that ensures the final array is sorted. Merge Sort guarantees a time complexity of O(n log n),
                                making it suitable for large datasets. Its stability and predictable performance make Merge Sort a
                                preferred choice for various applications, including sorting linked lists and external storage.
                            </p>
                        </Modal>
                        <button className="info-button" type="button" onClick={() => setMergeSortModal(true)}>
                            <FaInfo />
                        </button>
                    </div>

                    <div className="button-section">
                        <button className="sort-button" onClick={bubbleSort}>Bubble Sort</button>
                        <Modal show={bubbleSortModal} handleClose={() => setBubbleSortModal(false)}>
                            <h3 className="modal-title">Bubble Sort</h3>
                            <p className="modal-text">
                                Bubble Sort is a simple and straightforward sorting algorithm that repeatedly steps through the list,
                                compares adjacent elements, and swaps them if they are in the wrong order. The pass through the list
                                is repeated until the entire list is sorted. Bubble Sort is known for its simplicity and ease of
                                implementation, but it tends to be less efficient compared to more advanced algorithms, especially
                                for large datasets. Its time complexity is O(n^2) in the worst case, making it less suitable for
                                scenarios with large datasets. Despite its limitations, Bubble Sort remains a useful educational
                                tool to introduce the concept of sorting algorithms.
                            </p>
                        </Modal>
                        <button className="info-button" type="button" onClick={() => setBubbleSortModal(true)}>
                            <FaInfo />
                        </button>
                    </div>

                    <div className="button-section">
                        <button className="sort-button" onClick={quickSort}>Quick Sort</button>
                        <Modal show={quickSortModal} handleClose={() => setQuickSortModal(false)}>
                            <h3 className="modal-title">Quick Sort</h3>
                            <p className="modal-text">
                                Quick Sort is a widely used sorting algorithm known for its efficiency and average-case time complexity
                                of O(n log n). It employs a divide-and-conquer strategy, selecting a pivot element from the array and
                                partitioning the other elements into two sub-arrays based on their relation to the pivot. The sub-arrays
                                are then recursively sorted. Quick Sort is an in-place sorting algorithm, which means it does not require
                                additional memory proportional to the input size. While its worst-case time complexity is O(n^2) when a
                                poorly chosen pivot leads to unbalanced partitions, its average-case performance makes it a preferred
                                choice for sorting large datasets in practice.
                            </p>
                        </Modal>
                        <button className="info-button" type="button" onClick={() => setQuickSortModal(true)}>
                            <FaInfo />
                        </button>
                    </div>

                    <div className="button-section">
                        <button className="sort-button" onClick={insertionSort}>Insertion Sort</button>
                        <Modal show={insertionSortModal} handleClose={() => setInsertionSortModal(false)}>
                            <h3 className="modal-title">Insertion Sort</h3>
                            <p className="modal-text">
                                Insertion Sort is a simple sorting algorithm that builds the final sorted array one element at a time. It
                                is particularly efficient for small datasets and mostly sorted lists. The algorithm works by repeatedly
                                taking an element from the unsorted part of the array and inserting it into its correct position within
                                the sorted portion of the array. Insertion Sort has an average and worst-case time complexity of O(n^2),
                                but its advantage lies in its simplicity, ease of implementation, and adaptability for nearly sorted data.
                                It is commonly used for small datasets or as a building block within more complex sorting algorithms.
                            </p>
                        </Modal>
                        <button className="info-button" type="button" onClick={() => setInsertionSortModal(true)}>
                            <FaInfo />
                        </button>
                    </div>

                    <div className="button-section">
                        <button className="sort-button" onClick={selectionSort}>Selection Sort</button>
                        <Modal show={selectionSortModal} handleClose={() => setSelectionSortModal(false)}>
                            <h3 className="modal-title">Selection Sort</h3>
                            <p className="modal-text">
                                Selection Sort is a simple and straightforward sorting algorithm known for its simplicity and ease of implementation.
                                The algorithm divides the input array into two parts: a sorted portion on the left and an unsorted portion on the
                                right. In each iteration, Selection Sort finds the minimum element from the unsorted portion and swaps it with
                                the first element of the unsorted portion, effectively expanding the sorted portion. This process is repeated
                                until the entire array becomes sorted. Selection Sort has a time complexity of O(n^2), making it less efficient
                                than some other sorting algorithms for large datasets. Despite its inefficiency for large lists, its simplicity
                                and minimal memory usage can make it a suitable choice for small datasets or partially sorted arrays.
                            </p>
                        </Modal>
                        <button className="info-button" type="button" onClick={() => setSelectionSortModal(true)}>
                            <FaInfo />
                        </button>
                    </div>

                    <div className="button-section">
                        <button className="sort-button" onClick={heapSort}>Heap Sort</button>
                        <Modal show={heapSortModal} handleClose={() => setHeapSortModal(false)}>
                            <h3 className="modal-title">Heap Sort</h3>
                            <p className="modal-text">
                                Heap Sort is a comparison-based sorting algorithm that leverages the properties of a binary heap data structure.
                                The algorithm divides the input into a sorted and an unsorted region, creating a max heap to represent the unsorted
                                region as a binary tree. It repeatedly extracts the maximum element from the heap (located at the root) and places
                                it at the end of the sorted region. The process continues until the entire array is sorted. Heap Sort ensures a
                                time complexity of O(n log n), making it efficient for large datasets. While not as intuitive as some other
                                sorting algorithms, its in-place nature and predictable performance make it valuable for various applications,
                                particularly in embedded systems and real-time computing.
                            </p>
                        </Modal>
                        <button className="info-button" type="button" onClick={() => setHeapSortModal(true)}>
                            <FaInfo />
                        </button>
                    </div>
                </div>

                <p>Created by <a href="https://github.com/arturfriedrich" target="_blank">Artur Friedrich</a> </p>

            </div>

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
        </div>
    )
}

export default SortingComponent;
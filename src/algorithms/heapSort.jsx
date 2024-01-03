import { Swap, COMPARE_COLOR, FINAL_COLOR, MakeDelay, SWAP_COLOR, disableAllButtons, delay } from "../Utilities/utils";

async function heapify(arr, n, i) {
    let largest = i;
    const left = 2 * i + 1;
    const right = 2 * i + 2;

    if (left < n && parseInt(arr[left].style.height) > parseInt(arr[largest].style.height)) {
        largest = left;
    }

    if (right < n && parseInt(arr[right].style.height) > parseInt(arr[largest].style.height)) {
        largest = right;
    }

    if (largest !== i) {
        arr[i].style.background = COMPARE_COLOR;
        arr[largest].style.background = COMPARE_COLOR;
        await MakeDelay(delay);
        arr[i].style.background = FINAL_COLOR;
        arr[largest].style.background = SWAP_COLOR;

        await MakeDelay(delay);
        Swap(arr[i], arr[largest]);
        await heapify(arr, n, largest);
    }
}

export async function heapSort() {
    let i;
    disableAllButtons(true);
    const arr = document.querySelectorAll('.element-bar');
    const n = arr.length;

    // Build max heap
    for (i = Math.floor(n / 2) - 1; i >= 0; i--) {
        await heapify(arr, n, i);
    }

    // Extract elements one by one from the heap
    for (i = n - 1; i > 0; i--) {
        arr[0].style.background = SWAP_COLOR;
        arr[i].style.background = SWAP_COLOR;
        await MakeDelay(delay);
        Swap(arr[0], arr[i]);
        await MakeDelay(delay);

        arr[i].style.background = FINAL_COLOR;
        await heapify(arr, i, 0);
    }

    arr[0].style.background = FINAL_COLOR;

    for (i = 0; i < n; i++) {
        await MakeDelay(delay);
        arr[i].style.background = FINAL_COLOR;
    }

    disableAllButtons(false);
}

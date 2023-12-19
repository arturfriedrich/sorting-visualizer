export const getQuickSortAnimations = (array) => {
    const animations = [];
    if (array.length <= 1) return array;
    quickSortHelper(array, 0, array.length - 1, animations);
    return animations;
}

const quickSortHelper = (array, startIdx, endIdx, animations) => {
    if (startIdx < endIdx) {
        let partitionIdx = partition(array, startIdx, endIdx, animations);
        quickSortHelper(array, startIdx, partitionIdx - 1, animations);
        quickSortHelper(array, partitionIdx + 1, endIdx, animations);
    }
}

const partition = (array, startIdx, endIdx, animations) => {
    let pivot = array[endIdx];
    let partitionIdx = startIdx;
    for (let i = startIdx; i < endIdx; i++) {
        animations.push([i, endIdx]);
        animations.push([i, endIdx]);
        if (array[i] <= pivot) {
            animations.push([i, partitionIdx]);
            animations.push([partitionIdx, i]);
            swap(array, i, partitionIdx);
            partitionIdx++;
        }
    }
    animations.push([partitionIdx, endIdx]);
    animations.push([partitionIdx, endIdx]);
    animations.push([partitionIdx, endIdx]);
    animations.push([endIdx, partitionIdx]);
    swap(array, partitionIdx, endIdx);  
    return partitionIdx;
}

const swap = (array, i, j) => {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}
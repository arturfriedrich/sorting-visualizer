export function getQuickSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    const auxiliaryArray = array.slice();
    quickSortHelper(auxiliaryArray, 0, array.length - 1, animations);
    return animations;
}

export function quickSortHelper(array, low, high, animations) {
    if (low < high) {
        const partitionIndex = partition(array, low, high, animations);

        quickSortHelper(array, low, partitionIndex - 1, animations);
        quickSortHelper(array, partitionIndex + 1, high, animations);
    }
}

function partition(array, low, high, animations) {
    const pivot = array[high];
    let i = low - 1;

    for (let j = low; j < high; j++) {
        animations.push([j, high, 'compare']); // Highlight compared elements

        if (array[j] <= pivot) {
            i++;
            animations.push([i, j, 'swap']); // Swap elements
            animations.push([i, j, 'restore']); // Restore color after swap

            const temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        } else {
            animations.push([j, high, 'restore']); // Restore color if not swapped
        }
    }

    animations.push([i + 1, high, 'swap']); // Swap pivot into its place
    animations.push([i + 1, high, 'restore']); // Restore color after pivot swap

    const temp = array[i + 1];
    array[i + 1] = array[high];
    array[high] = temp;

    return i + 1;
}
export function Swap(x, y) {
    const temp = x.style.height;
    x.style.height = y.style.height;
    y.style.height = temp;
}

export function MakeDelay(ms) {
    return new Promise(resolve => {
        setTimeout(() => { resolve('') }, ms);
    })
}

export var delay = 1
export const PRIMARY_COLOR = 'rgb(88, 170, 255)';
export const FINAL_COLOR = 'rgb(84, 232, 160)';
export const POSITION_FINAL_COLOR = 'rgb(188, 111, 255)';
export const COMPARE_COLOR = 'rgb(0, 128, 255)';
export const SWAP_COLOR = 'rgb(255, 69, 69)';
export const MIN_COLOR = 'rgb(255, 112, 31)';

export function randomNumberFrom(l, r) {
    return Math.floor(Math.random() * (l - r + 1) + r)
}

export function disableAllButtons(val) {
    document.getElementById('rangeSlider').disabled = val;
    document.getElementById('slider').disabled = val;
    const buttons = document.querySelectorAll(".sort-button");
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].disabled = val;
    }
}

export function changeDelay(val) {
    delay = val;
}
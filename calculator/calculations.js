export function clear() {
    document.querySelector('.computation').innerText = '';
    document.querySelector('.result').innerText = '';
}

export function deleteElement() {
    let deliteOneElement = document.querySelector('.computation').innerText;
    document.querySelector('.computation').innerText = deliteOneElement.slice(0, -1);
}

export function recordNamber(namber) {
    document.querySelector('.computation').innerHTML += namber;
}

export function result() {
    let evalText = document.querySelector('.computation').innerText;
    let result = eval(evalText);
    document.querySelector('.result').innerText = result;
}

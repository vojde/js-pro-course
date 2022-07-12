import {calculator} from './script.js';

const divContainer = document.createElement('div');
divContainer.classList.add('container');
document.body.prepend(divContainer);

const boxCalculator = document.createElement('div');
boxCalculator.classList.add('box-calculator');
divContainer.prepend(boxCalculator);

const divBoxResult = document.createElement('section');
divBoxResult.classList.add('box-resulte');
boxCalculator.prepend(divBoxResult);

const divComputation = document.createElement('div');
divComputation.classList.add('computation');
divBoxResult.prepend(divComputation);

const divResult = document.createElement('div');
divResult.classList.add('result');
divBoxResult.append(divResult);

const divBoxButton = document.createElement('div');
divBoxButton.classList.add('box-button');
boxCalculator.append(divBoxButton);

const sectionButtonTop = document.createElement('section');
sectionButtonTop.classList.add('section-button-top');
divBoxButton.append(sectionButtonTop);

const sectionButtonMiddle = document.createElement('section');
sectionButtonMiddle.classList.add('section-button-middle');
divBoxButton.append(sectionButtonMiddle);

const sectionButtonBottom = document.createElement('section');
sectionButtonBottom.classList.add('section-button-bottom');
divBoxButton.append(sectionButtonBottom);

let text = ['AC', 'DEL', '/', '1', '2', '3', '*', '4', '5', '6', '+', '7', '8', '9', '-', '.', '0', '='];

for (let i = 0; i < text.length; i++) {
    let currentText = text[i];
    let buttonGrid = document.createElement('button');
    buttonGrid.classList.add('button');
    buttonGrid.innerText = text[i];

    if (text[i] === 'AC' || text[i] === 'DEL' || text[i] === '/') {
        sectionButtonTop.append(buttonGrid);
        if (text[i] === '/') {
            buttonGrid.innerText = '÷';
        }
    }else if (text[i] === '.' || text[i] === '0' || text[i] === '=') {
        sectionButtonBottom.append(buttonGrid);
    }else {
        sectionButtonMiddle.append(buttonGrid);
    };

    if (text[i] === '=') {
       buttonGrid.classList.toggle('button-equals');
    }
    buttonGrid.addEventListener('click', () => calculator(currentText));
}

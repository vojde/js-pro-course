import {clear, deleteElement, result, recordNamber} from './calculations.js';

export function calculator(text) {
    console.log(text);
    if (text === 'AC') {
        clear();
    };
    if (text === 'DEL') {
        deleteElement();
    };
    if (text === '=') {
        result();
    };
    if (text !== 'AC' && text !== 'DEL') {
        recordNamber(text);
    }
}

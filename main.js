//import { getCat } from "./archive.js";

const log = (text) => console.log(text);

document.addEventListener('DOMContentLoaded', () => {
    const buttonMainCenter = document.getElementById('buttonMainCenter');

    const initialText = 'Do you feel lucky?';
    const hoverText = 'Well do ya, punk‽';
    const clickedText = '*BANG!*';

    buttonMainCenter.textContent = initialText;

    buttonMainCenter.addEventListener('mouseover', () => {
        if (!buttonMainCenter.classList.contains('clicked')) {
            buttonMainCenter.textContent = hoverText;
        }
    });

    buttonMainCenter.addEventListener('mouseout', () => {
        if (!buttonMainCenter.classList.contains('clicked')) {
            buttonMainCenter.textContent = initialText;
        }
    });

    buttonMainCenter.addEventListener('mousedown', () => {
        buttonMainCenter.textContent = clickedText;
    });

    buttonMainCenter.addEventListener('mouseup', () => {
        if (!buttonMainCenter.classList.contains('clicked')) {
            buttonMainCenter.textContent = initialText;
        }
    });

    buttonMainCenter.addEventListener('click', () => {
        buttonMainCenter.classList.toggle('clicked');
        
    });
});


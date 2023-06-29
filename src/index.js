import './style.css';
import { refreshBtn, submitBtn, newName, newScore } from './modules/domVariables.js';
import { submitData, createGame } from './modules/game.js';
import addNewScore from './modules/displayScore.js';

// Refresh BTN
refreshBtn.addEventListener('click', addNewScore);

// submit BTN
submitBtn.addEventListener(('click'),(e)=>{
    e.preventDefault();

    submitData(newName.value, parseInt(newScore.value));
    //refresh
    newName.value = '';
    newScore.value = '';
});

createGame();
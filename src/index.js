import './style.css';
import {
  refreshBtn, submitBtn, newName, newScore,
} from './modules/domVariables';
import submitData from './modules/submitScore';
import addNewScore from './modules/displayScore';

// Refresh BTN
refreshBtn.addEventListener('click', addNewScore);

// submit BTN
submitBtn.addEventListener(('click'), () => {
  submitData(newName, newScore);
  // refresh
  newName.value = '';
  newScore.value = '';
});
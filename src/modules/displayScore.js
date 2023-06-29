import { baseURL, gameID } from './getAPIData';
import listScore from './domVariables';

const addNewScore = async () => {
  try {
    const response = await fetch(`${baseURL}games/${gameID}/scores/`);
    const data = await response.json();

    listScore.innerHTML = '';
    let count = 1;
    data.result.forEach((value) => {
      const scoreInfo = document.createElement('li');
      scoreInfo.className = 'name-score-info';
      scoreInfo.id = count;
      count += 1;
      scoreInfo.innerHTML = `
                  <i class="fa-solid fa-user"></i>
                  <span class="name-value">${value.user} : </span>
                  <span class="score-value">${value.score}</span>
              `;
      listScore.appendChild(scoreInfo);
    });
    return 'Recieved all scores';
  } catch (error) {
    return `Error fetching scores: ${error}`;
  }
};

export default addNewScore;
import listScore from './domVariables';

const SampleData = [
  {
    Name: 'Rophnan',
    Score: 100,
  },
  {
    Name: 'Daniel',
    Score: 95,
  },
  {
    Name: 'Jemal',
    Score: 90,
  },
  {
    Name: 'Thomas',
    Score: 80,
  },
  {
    Name: 'David',
    Score: 75,
  },
  {
    Name: 'Emma',
    Score: 65,
  },
  {
    Name: 'William',
    Score: 60,
  },
  {
    Name: 'James',
    Score: 50,
  },
  {
    Name: 'Marvin',
    Score: 40,
  },
];

const addNewScore = () => {
  SampleData.forEach((value) => {
    const scoreInfo = document.createElement('li');
    scoreInfo.className = 'name-score-info';
    scoreInfo.id = value.id;
    scoreInfo.innerHTML = `
            <span class="name-value">${value.Name} : </span>
            <span class="score-value"> ${value.Score}</span>
        `;
    listScore.appendChild(scoreInfo);
  });
};

export default addNewScore;
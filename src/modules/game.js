import {baseURL, gameID} from './getAPIData.js';

export const createGame = async () => {
  const gameName =  {name: 'Leader Board', ID: 'yuBYeCBeU53kiMwUACnF'};
  try {
    const response = await fetch(`${baseURL}games/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(gameName),
    });

    const data = await response.json();
    return `Game created with ID: ${gameName.ID}`;
  } catch (error) {
    return `Error creating game: ${error}`;
  }
};

export const submitData = async (name, score) => {

    try {
      const response = await fetch(`${baseURL}games/${gameID}/scores/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user: name,
          score: score,
        }),
      });
      const data = await response.json();

      return data.result;
    } catch (error) {
      return `Error submitting score: ${error}`;
    }
  };

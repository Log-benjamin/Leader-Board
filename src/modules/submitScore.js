import { baseURL, gameID } from './getAPIData';

const submitData = async (Name, Score) => {
  const name = Name.value;

  try {
    const response = await fetch(`${baseURL}games/${gameID}/scores/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user: name,
        score: Number(Score.value),
      }),
    });
    const data = await response.json();

    return data.result;
  } catch (error) {
    return `Error submitting score: ${error}`;
  }
};

export default submitData;
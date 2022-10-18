import GameSavingLoader from './gamesavingloader';
import GameSaving from './gamesaving';

GameSavingLoader.load().then(
  (saving) => {
    const parsedData = JSON.parse(saving);
    return new GameSaving(parsedData);
  },
  (error) => {
    throw error;
  }
);

import GameSavingLoader from './gamesavingloader';
import GameSaving from './gamesaving';

GameSavingLoader.load().then(
  (saving) => {
    const { id, created, userInfo } = JSON.parse(saving);
    return new GameSaving(
      id,
      created,
      userInfo.id,
      userInfo.name,
      userInfo.level,
      userInfo.points
    );
  },
  (error) => {
    throw error;
  }
);

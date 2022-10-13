import read from './reader';
import json from './parser';
import GameSaving from './game_saving';

export default class GameSavingLoader {
  static load(
    data = '{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}'
  ) {
    return new Promise((resolve, reject) => {
      read(data).then((response) => {
        json(response).then((saving) => {
          try {
            const savingData = JSON.parse(saving);
            const result = new GameSaving(savingData);
            resolve(result);
          } catch (error) {
            reject(new Error(error));
          }
        });
      });
    });
  }
}

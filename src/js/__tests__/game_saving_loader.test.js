import GameSavingLoader from '../game_saving_loader';

test.each([
  [
    undefined,
    {
      id: 9,
      created: Date.now().toLocaleString,
      userInfo: {
        id: 1,
        name: 'Hitman',
        level: 10,
        points: 2000,
      },
    },
  ],
  [
    '{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}',
    {
      id: 9,
      created: Date.now().toLocaleString,
      userInfo: {
        id: 1,
        name: 'Hitman',
        level: 10,
        points: 2000,
      },
    },
  ],
  [
    '{"id":"99999999999999","created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}',
    'TypeError',
  ],
  ['{"id":9,"created":1546300800, "userInfo":{}}', 'TypeError'],
  ['', 'SyntaxError'],
])('Should test class GameSavingLoader', async (param, expected) => {
  try {
    const savingData = await GameSavingLoader.load(param);
    expect(savingData).toEqual(expected);
  } catch (error) {
    expect(error.message).toContain(expected);
  }
});

test('Should create GameSavig Object', (done) => {
  GameSavingLoader.load().then((saving) =>
    expect(JSON.parse(saving)).toEqual({
      id: 1,
      created: 1,
      userInfo: {
        id: 1,
        name: 'Hotman',
        level: 100,
        points: 0,
      },
    })
  );
  done();
});

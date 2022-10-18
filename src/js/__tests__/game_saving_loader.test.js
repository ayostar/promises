import GameSavingLoader from '../game_saving_loader';

test('should create GameSaving class object', (done) => {
  GameSavingLoader.load().then((saving) =>
    expect(JSON.parse(saving)).toEqual({
      id: 9,
      created: 1546300800,
      userInfo: {
        id: 1,
        name: 'Hitman',
        level: 10,
        points: 2000,
      },
    })
  );
  done();
});

test('should catch promise error', () => {
  expect.assertions(1);
  return GameSavingLoader.load().catch((e) => expect(e).toMatch('error'));
});

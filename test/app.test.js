import GameSavingLoader from '../src/GameSavingLoader';

test('load game', async () => {
  const loader = new GameSavingLoader();
  const data = await loader.load();
  const expected = {
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1,
      name: 'Hitman',
      level: 10,
      points: 2000,
    },
  };
  expect(data).toEqual(expected);
});

import GameSavingLoader from './GameSavingLoader';

export default async function loadGame() {
  const loader = new GameSavingLoader();
  const result = await loader.load();
  console.log(result);
}

loadGame();

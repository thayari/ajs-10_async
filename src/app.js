import GameSavingLoader from './GameSavingLoader';

export default function loadGame() {
  const loader = new GameSavingLoader();
  loader.load().then((result) => { console.log(result); });
}

loadGame();

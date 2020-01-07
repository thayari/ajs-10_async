import read from './reader';
import json from './parser';

async function gameSaving(value) {
  return JSON.parse(value);
}

export default class GameSavingLoader {
  // eslint-disable-next-line class-methods-use-this
  async load() {
    try {
      const response = await read();
      const value = await json(response);
      const saving = await gameSaving(value);
      return saving;
    } catch (e) {
      console.log(e);
    }
  }
}

import read from './reader';
import json from './parser';

export default class GameSavingLoader {
  async load() {
    try {
      const response = await read();
      const value = await json(response);
      const saving = await gameSaving(value);
      console.log(saving);
    } catch(e) {
      console.log(e)
    } 
  }
}

async function gameSaving(value) {
  return JSON.parse(value);
}

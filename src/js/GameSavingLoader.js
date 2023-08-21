import read from "./reader.js";
import json from "./parser.js";
import GameSaving from "./GameSaving.js";

export default class GameSavingLoader {
  static async load() {
    try {
      const readed = await read();
      const jsonDec = await json(readed);
      return new GameSaving(JSON.parse(jsonDec));
    } catch (error) {
      alert(error);
    }
  }
}

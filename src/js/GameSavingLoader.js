import read from "./reader.js";
import json from "./parser.js";
import GameSaving from "./GameSaving.js";

export default class GameSavingLoader {
  static load() {
    return new Promise((resolve) => {
      read().then((response) => {
        json(response).then((data) => {
          const save = JSON.parse(data);
          resolve(new GameSaving(save));
        });
      });
    });
  }
}

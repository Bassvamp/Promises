import GameSavingLoader from "./js/GameSavingLoader.js";
import GameSaving from "./js/GameSaving.js";

GameSavingLoader.load()
  .then((saving) => {
    const save = new GameSaving(JSON.parse(saving));
  })
  .catch((err) => {
    throw new Error("Something wrong..." + err);
  });

// export default function saveGame() {
//   GameSavingLoader.load()
//     .then((saving) => {
//         return JSON.parse(saving);
//     })

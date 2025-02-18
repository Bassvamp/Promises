import json from "./parser.js";
import read from "./reader.js";

export default class GameSavingLoader {
    static load() {
       return new Promise ((resolve) => {
        read()
        .then(data => {
            resolve(json(data))}
        )})
      }}
    

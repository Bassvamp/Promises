import GameSavingLoader from "../js/GameSavingLoader.js";
import GameSaving from "../js/GameSaving.js";

test("test game saving", () => {
  const expSave = {
    id: 9,
    created: 1546300800,
    userInfo: { id: 1, name: 'Hitman', level: 10, points: 2000 }
  }

  const save = GameSavingLoader.load().then((saving) => {
      return new GameSaving(JSON.parse(saving))
  })

  expect(save).toEqual(expSave);
});

test("test error game save", () => {
  expect.toThrow();
});

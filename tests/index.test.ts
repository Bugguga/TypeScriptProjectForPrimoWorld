import { merge } from "../src/index";

const cases = [
  [
    [0, 2, 3],
    [1, 6, 7],
    [0, 1, 2, 3, 6, 7],
  ],
  [
    [1, 2, 3],
    [5, 6, 7],
    [1, 2, 3, 5, 6, 7],
  ],
  [
    [1, 2, 4, 6, 7, 8, 10, 23, 43, 65],
    [3, 4, 5, 6, 7, 13, 22, 45, 61, 63, 64],
    [1, 2, 3, 4, 4, 5, 6, 6, 7, 7, 8, 10, 13, 22, 23, 43, 45, 61, 63, 64, 65],
  ],
];

describe("'merge' utility", () => {
  test.each(cases)(
    "given %p and %p as arguments, returns %p",
    (firstArg, secondArg, expectedResult) => {
      const result = merge(firstArg, secondArg);
      expect(result).toStrictEqual(expectedResult);
    }
  );
});

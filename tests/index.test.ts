import { merge } from "../src/index";

test("case1", () => {
  expect(merge([0, 2, 3], [1, 6, 7])).toStrictEqual([0, 1, 2, 3, 6, 7]);
});

test("case2", () => {
  expect(merge([1, 2, 3], [5, 6, 7])).toStrictEqual([1, 2, 3, 5, 6, 7]);
});

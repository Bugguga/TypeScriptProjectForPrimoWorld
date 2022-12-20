import { add } from "../index";

test("empty string should result in zero", () => {
  expect(add("")).toBe(0);
});

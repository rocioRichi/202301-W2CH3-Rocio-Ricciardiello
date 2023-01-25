import { fakePush, longMeasure } from "./fakeArrayMethod.js";

const ar = [1, 2, 3, 4];

describe("fakeArrayMethod", () => {
  test("The arrays`s length [1,2,3,4] should be 4", () => {
    const r = longMeasure(ar);
    expect(r).toBe(4);
  });
});

const ar2 = [1, 2, 3, 4];
const something = "something";

describe("fakePush", () => {
  test("The new element should be 'something' in the 4th position", () => {
    fakePush(ar2, something);
    expect(ar2[4]).toBe(something);
  });
});

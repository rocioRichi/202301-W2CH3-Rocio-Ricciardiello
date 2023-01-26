import {
  fakeIndexOf,
  fakeInclude,
  fakePush,
  longMeasure,
} from './fakeArrayMethod.js';

const ar = [1, 2, 3, 4];

describe('fakeArrayMethod', () => {
  test('The arrays`s length [1,2,3,4] should be 4', () => {
    const r = longMeasure(ar);
    expect(r).toBe(4);
  });
});

const ar2 = [1, 2, 3, 4];
const something = 'something';

describe('fakePush', () => {
  test("The new element should be 'something' in the 4th position", () => {
    fakePush(ar2, something);
    expect(ar2[4]).toBe(something);
  });
});

const something2 = 'something';
const something3 = 'foo';
const ar3 = [1, 2, 3, 4, something2];

describe('fakeInclude', () => {
  test("The  element 'something' should belong to ar3", () => {
    let result = fakeInclude(ar3, something2);
    expect(result).toBe(true);
  });

  test("The  element 'foo' shouldnt belong to ar3", () => {
    let result = fakeInclude(ar3, something3);
    expect(result).toBe(false);
  });
});

// test IndexOf

describe('fakeIndexOf', () => {
  test("The index of 'something' in ar3 should be 4", () => {
    let result = fakeIndexOf(ar3, something2);
    expect(result).toBe(4);
  });
  test("The index of 'something' in ar3 should be -1", () => {
    let result = fakeIndexOf(ar3, something3);
    expect(result).toBe(-1);
  });
});

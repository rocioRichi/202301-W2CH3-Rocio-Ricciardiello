export const longMeasure = (Array) => {
  let cumulative = 0;
  do {
    cumulative++;
  } while (Array[cumulative] !== undefined);

  return cumulative;
};

export const fakePush = (Array, something) => {
  Array[longMeasure(Array)] = something;
  return Array;
};

export const fakeInclude = (Array, something) => {
  for (let i = 0; i < longMeasure(Array); i++) {
    if (Array[i] === something) {
      return true;
    }
  }
  return false;
};

export const fakeIndexOf = (Array, something) => {
  for (let i = 0; i < longMeasure(Array); i++) {
    if (Array[i] === something) {
      return i;
    }
  }
  return -1;
};

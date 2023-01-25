export const longMeasure = (Array) => {
  let cumulative = 0;
  do {
    cumulative++;
  } while (Array[cumulative] !== undefined);

  return cumulative;
};

export const fakePush = (Array, something) => {
  Array[longMeasure(Array)] = something;
};

//

import { calculateScore } from "../src/calc";


describe("Calculate Bowling Scores", () => {

  test('calculates score for all nines and misses', () => {
    const rolls = [9, 0, 9, 0, 9, 0, 9, 0, 9, 0, 9, 0, 9, 0, 9, 0, 9, 0, 9, 0];
    expect(calculateScore(rolls)).toBe(90);
  });


  test('calculates score for all strikes', () => {
    const rolls = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10];
    expect(calculateScore(rolls)).toBe(300);
  });


  test('calculates score for all spares', () => {
    const rolls = [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5];
    expect(calculateScore(rolls)).toBe(150);
  });

  test('calculates score for a mix of strikes, spares, and regular rolls', () => {
    const rolls = [10, 7, 3, 9, 0, 10, 0, 8, 8, 2, 0, 6, 10, 10, 10, 8, 1];
    expect(calculateScore(rolls)).toBe(167);
  });


});

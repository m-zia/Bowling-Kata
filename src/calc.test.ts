//

import { calculateScore } from "../src/calc";


describe("Calculate Bowling Scores", () => {

  it('calculates score for all nines and misses', () => {
    const rolls = [9, 0, 9, 0, 9, 0, 9, 0, 9, 0, 9, 0, 9, 0, 9, 0, 9, 0, 9, 0];
    expect(calculateScore(rolls)).toBe(90);
  });

  
});

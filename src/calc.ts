//Ten-pin bowling
//3 main cases to consider: strike, spare, normal
// If it's a strike, you also get the bonus of the next 2 frames.
// If it's a spare (10 obtained from the sum of two frames), you also get the bonus of the next frame after those two.


//let rolls = [5,2]
export function calculateScore(rolls: number[]): number {
  let score = 0;
  let frameIndex = 0;

  for (let frame = 0; frame < 10; frame++) {
    if (isStrike(frameIndex, rolls)) {
      score += 10 + strikeBonus(frameIndex, rolls);
      frameIndex++;
    } 
        
    else if (isSpare(frameIndex, rolls)) {
      score += 10 + spareBonus(frameIndex, rolls);
      frameIndex += 2;
    }

     else {
      score += sumOfBallsInFrame(frameIndex, rolls);
      frameIndex += 2;
    }
  }

  return score;
}

function isStrike(frameIndex: number, rolls: number[]): boolean {
  return rolls[frameIndex] === 10;
}

function isSpare(frameIndex: number, rolls: number[]): boolean {
  return rolls[frameIndex] + rolls[frameIndex + 1] === 10;
}
function spareBonus(frameIndex: number, rolls: number[]): number {
  return rolls[frameIndex + 2];
}
function strikeBonus(frameIndex: number, rolls: number[]): number {
  return rolls[frameIndex + 1] + rolls[frameIndex + 2];
}
function sumOfBallsInFrame(frameIndex: number, rolls: number[]): number {
  return rolls[frameIndex] + rolls[frameIndex + 1];
}
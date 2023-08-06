//Ten-pin bowling
//3 main cases to consider: strike, spare, normal
// If it's a strike, you also get the bonus of the next 2 frames.
// If it's a spare (10 obtained from the sum of two frames), you also get the bonus of the next frame after those two.


//let rolls = [5,2]

export function calculateScore(rolls: number[]): number {
 
 let score = 0;

 
  rolls.forEach(roll => {
    score += roll
  })

  return score;

}

'user strict';

{
  const scores = [80, 90, 40];
  scores.push(70, 60, 50);

  for (let i = 0; i < scores.length; i++) {
    console.log(`Score ${i}: ${scores[i]}`);
  }
}
// CODING CHALLENGE 3

// There are two soccer teams, Team Dumebi and Team Ciroma. They compete against each other 3 times. The winner with the highest average score wins the a trophy!

// 1. Calculate the average score for each team, using the test data below
// 2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).

// 3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks.
// 4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.

// TEST DATA: Team Dumebi score 96, 108 and 89. Team Ciroma score 88, 91 and 110
// TEST DATA BONUS 1: Team Dumebi score 97, 112 and 101. Team Ciroma score 109, 95 and 123
// TEST DATA BONUS 2:Team Dumebi score 97, 112 and 101. Team Ciroma score 109, 95 and 106 -->
// TEXT DATA
console.log("TEXT DATA");

let teamDumebiFirst = 96;
let teamDumebiSecond = 108;
let teamDumebiThird = 89;
let teamDumebiAvg = (teamDumebiFirst + teamDumebiSecond + teamDumebiThird) / 3;
console.log(`The Average score of Team Dumebi is ${teamDumebiAvg}`);
let teamCiromaFirst = 88;
let teamCiromaSecond = 91;
let teamCiromaThird = 110;
let teamCiromaAvg = (teamCiromaFirst + teamCiromaSecond + teamCiromaThird) / 3;
console.log(`The Average score of Team Ciroma is ${teamCiromaAvg}`);
if (teamCiromaAvg >= 100 && teamCiromaAvg > teamDumebiAvg) {
  console.log(`Congratulations! the winner is Team Ciroma`);
} else if (teamDumebiAvg >= 100 && teamDumebiAvg > teamCiromaAvg) {
  console.log(`Congratulations! the winner is Team Ciroma`);
}
else if (teamDumebiAvg >= 100 && teamCiromaAvg >= 100 && teamCiromaAvg === teamDumebiAvg) {
    console.log(`sorry, its a tie`);
}
else {
  console.log(`No winner, you both score below 100.`);
}
// TEXT BONUS 1
console.log("TEXT BONUS 1");
let teamDumebiFirstBonus1 = 97;
let teamDumebiSecondBonus1 = 112;
let teamDumebiThirdBonus1 = 101;
let teamDumebiBonus1Avg = (teamDumebiFirstBonus1 + teamDumebiSecondBonus1 + teamDumebiThirdBonus1) / 3;
console.log(`The Average score of Team Dumebi Bonus 1 is ${teamDumebiBonus1Avg}`);

let teamCiromaFirstBonus1 = 109;
let teamCiromaSecondBonus1 = 95;
let teamCiromaThirdBonus1 = 123;
let teamCiromaBonus1Avg = (teamCiromaFirstBonus1 + teamCiromaSecondBonus1 + teamCiromaThirdBonus1) / 3;
console.log(`The Average score of Team Ciroma Bonus 1 is ${teamCiromaBonus1Avg}`);

if (teamCiromaBonus1Avg >= 100 && teamCiromaBonus1Avg > teamDumebiBonus1Avg) {
    console.log(`Congratulations! the winner is Team Ciroma`);
  } else if (teamDumebiBonus1Avg >= 100 && teamDumebiBonus1Avg > teamCiromaBonus1Avg) {
    console.log(`Congratulations! the winner is Team Ciroma`);
  }
  else if (teamDumebiBonus1Avg >= 100 && teamCiromaBonus1Avg >= 100 && teamCiromaBonus1Avg === teamDumebiBonus1Avg) {
      console.log(`sorry, its a tie`);
  }
  else {
    console.log(`No winner, you both score below 100.`);
  }

// TEXT BONUS 2
console.log("TEXT BONUS 2");
let teamDumebiFirstBonus2 = 97;
let teamDumebiSecondBonus2 = 112;
let teamDumebiThirdBonus2 = 101;
let teamDumebiBonus2Avg = (teamDumebiFirstBonus2 + teamDumebiSecondBonus2 + teamDumebiThirdBonus2) / 3;
console.log(`The Average score of Team Dumebi Bonus 2 is ${teamDumebiBonus2Avg}`);

let teamCiromaFirstBonus2 = 109;
let teamCiromaSecondBonus2 = 95;
let teamCiromaThirdBonus2 = 106;
let teamCiromaBonus2Avg = (teamCiromaFirstBonus2 + teamCiromaSecondBonus2 + teamCiromaThirdBonus2) / 3;
console.log(`The Average score of Team Ciroma Bonus 2 is ${teamCiromaBonus2Avg}`);
if (teamCiromaBonus2Avg >= 100 && teamCiromaBonus2Avg > teamDumebiBonus2Avg) {
    console.log(`Congratulations! the winner is Team Ciroma`);
  } else if (teamDumebiBonus2Avg >= 100 && teamDumebiBonus2Avg > teamCiromaBonus2Avg) {
    console.log(`Congratulations! the winner is Team Ciroma`);
  }
  else if (teamDumebiBonus2Avg >= 100 && teamCiromaBonus2Avg >= 100 && teamCiromaBonus2Avg === teamDumebiBonus2Avg) {
      console.log(`sorry, its a tie`);
  }
  else {
    console.log(`No winner, you both score below 100.`);
  }

//   FINAL AVERAGE
   console.log("FINAL AVERAGE"); 
let DumebiTotalAvg = (teamDumebiAvg + teamDumebiBonus1Avg + teamDumebiBonus2Avg)/3 ;
console.log(`The total Avegrage of team Dumebbi is ${DumebiTotalAvg}`);
let CiromaTotalAvg = (teamCiromaAvg + teamCiromaBonus1Avg + teamCiromaBonus2Avg)/3 ; 
console.log(`The total Avegrage of team Ciroma is ${CiromaTotalAvg}`);
if (CiromaTotalAvg >= 100 && CiromaTotalAvg > DumebiTotalAvg) {
    console.log(`Congratulations! the winner is Team Ciroma`);
  } else if (DumebiTotalAvg >= 100 && DumebiTotalAvg > CiromaTotalAvg) {
    console.log(`Congratulations! the winner is Team Ciroma`);
  }
  else if (DumebiTotalAvg >= 100 && CiromaTotalAvg >= 100 && CiromaTotalAvg === DumebiTotalAvg) {
      console.log(`sorry, its a tie`);
  }
  else {
    console.log(`No winner, you both score below 100.`);
  }
// TASK 2
// A school has following rules for grading system:
// a. Below 25 - F
// b. 25 to 44 - E
// c. 45 to 49 - D
// d. 50 to 60 - C
// e. 61 to 80 - B
// f. Above 80 - A
// Ask user to enter marks and print the corresponding
// grade. 

let score = prompt("Enter your score")
if( score > 80 && score <= 100){
    console.log(`Excellent! Your Grade is "A"`);
}
else if( score > 60 && score <= 80){
    console.log(`Very Good! Your Grade is "B"`);
}
else if( score >= 50 && score<= 60){
    console.log(`Good! Your Grade is "C"`);
}
else if( score>= 45 && score<= 49){
    console.log(`Average! Your Grade is "D"`);
}
else if( score>= 25 && score<= 44){
    console.log(`Poor! Your Grade is "E"`);
}
else if( score < 25 ){
    console.log(`Ahh! Your Grade is "F"`);
}
else{
    alert("wrong answer! try again")
    console.log(`Wrong Answer! try again`);
}
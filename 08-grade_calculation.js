//Grade Calculation using switch statement

function studentgrade(score)
{
    switch (true) {
    case (score >=90 && score <=100):
        console.log("student grade is A");
        break;
    case (score >=80 && score<90):
        console.log(("student grade is B"));
        break;
    case (score >=70 && score <80):
        console.log(("student grade is C"));
        break;
    case (score >=60 && score <70):
        console.log(("student grade is D"));
        break;
    case (score >=0 && score <60):
        console.log(("student grade is E"));
        break;
    default:
        console.log("Invalid score");
        break;
}
}
studentgrade(85)


let firstSide = 9;
let secondSide = 16;
let thirdSide = 15;
const perimeter = (firstSide  + secondSide + thirdSide)/2;
const square = Math.sqrt(perimeter*(perimeter - firstSide)*(perimeter - secondSide)*(perimeter - thirdSide));
console.log(square);
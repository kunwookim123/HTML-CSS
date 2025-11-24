// 실습1

let name = '홍길동';
let age = 25;
let isStudent = true;

console.log('이름:', name);
console.log(`나이: ${age}살`);
console.log('학생:', isStudent);
console.log(`자기소개: 안녕하세요, 저는 ${age}살 ${name}입니다.`);

// 실습2-1
let age1 = 14

if (age1 < 7) {
    console.log('미취학 아동');
} else if (age1 >= 7 && age1 < 14) {
    console.log('초등학생');
} else if (age1 >= 14 && age1 < 17) {
    console.log('중학생');
} else if (age1 >= 17 && age1 <20) {
    console.log('고등학생');
} else {
    console.log('성인');
}
// 실습2-2
let month = 7;

switch (month) {
    case 3:
    case 4:
    case 5:
        console.log('봄');
        break;
    case 6:
    case 7:
    case 8:
        console.log('여름');
        break;
    case 9:
    case 10:
    case 11:
        console.log('가을');
        break;
    case 12:  
    case 1:
    case 2:
        console.log('겨울');
        break;
}
// 실습2-3
let year = 2025;

if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)) {
    console.log('윤년입니다.')
} else {
    console.log('윤년이 아닙니다.')
}

// 실습3

let sum = 0;

for (let i = 1; i < 101; i++) {
    sum += i;
}
console.log(sum)

// 실습3-1
let rows = 5;

for (let i = 0; i < rows; i++) {
    let space = ''; // 공백
    let stars = ''; // 별

    for (let j = 0; j < rows - i - 1; j++) {
        space += ' ';
    } // 공백 문자열 만들기

    for (let k = 0; k < 2 * i + 1; k++) {
        stars += '*';
    }

    console.log(space + stars);
}

// 실습4

const celsiusToFarenheit = (x) => (x * (9 / 5) + 32);
console.log(celsiusToFarenheit(0));
console.log(celsiusToFarenheit(100));

// 실습4-1

function average(numbers) {
    let sum = 0;
    for (const num of numbers) {
        sum += num
    }
    return sum / numbers.length
}

console.log(average([10,20,30]));






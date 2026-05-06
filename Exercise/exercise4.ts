// MEMBUAT TRIANGLE PATTERN BERDASARKAN TINGGI  
const n = 5;

for (let i = 1; i <= n; i++) {
    let row = " ";
    for (let j = 1; j <= i; j++) {
        row += j + " ";
    }
    console.log(row);
}

// MEMBUAT TRIANGLE PATTERN (2)
function printPattern(rows: number) {
    let num = 1;

    for (let i = 1; i <= rows; i++) {
        let row = " ";
        for (let j = 1; j <= i; j++) {
            let formattedNumber = num.toString().padStart(2, "0");
            row += formattedNumber + " ";

            num++;
        }
        console.log(row.trim());
    }
}

printPattern(4);

// MENGUBAH KELIPATAN 3 -> Fizz DAN KELIPARAN 5 -> Buzz, DAN KELIPATAN 3 dan 5 -> FizzBuzz
const numbers: number[] = [1, 2, 3, 4, 5];
numbers.splice(2, 1, "Fizz");
numbers.splice(4, 1, "Buzz");

console.log(numbers);

// MENGHITUNG BMI
// Rumus BMI : Berat (Kg) / Tinggi ** 2

function bmiCalculator(weight: number, height: number) {
    if (weight / (height ** 2) < 18.5) {
        return "Underweight"
    } else if (weight / (height ** 2) >= 18.5 && weight / (height ** 2) <= 24.9) {
        return "Normal"
    } else if (weight / (height ** 2) >= 25 && weight / (height ** 2) <= 29.9) {
        return "Overweight"
    } else {
        return "Obese"
    }

}

console.log(bmiCalculator(50, 1.6));

// MENGHILANGKAN BILANGAN GANJIL
const num: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
num.splice(0, 1);
num.splice(2, 1);
num.splice(4, 1);
num.splice(6, 1);
num.splice(8, 1);

console.log(num);

// STRING -> ARRAY OF WORDS
const sentence: string = "Saya akan lawan"
const words: string[] = sentence.split(" ");
console.log(words);
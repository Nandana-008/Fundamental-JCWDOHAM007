// 1. MENCARI BILANGAN TERENDAH, TERTINGGI, DAN RATA" DI ARRAY
const numbers: number[] = [12, 5, 23, 18, 4, 45, 32];

const minimum: number = Math.min(...numbers);
const maximum: number = Math.max(...numbers);
const average: number = numbers.reduce((a, b) => {
    return a + b / numbers.length;
})

console.log("Minimum :" + minimum, "Maximum :" + maximum, "Average :" + average);

//2. CONVERT ARRAY OF WORDS -> STRING
const fruits: string[] = ["apple", "banana", "cherry", "date"];
console.log(fruits.join(", "));

//3. GUNTING BATU KERTAS (FUNCTION NYA RANDOM PICK)

const rockpaperScissor = (player: "rock" | "paper" | "scissor") => {
    const choices = ["rock", "paper", "scissor"];

    const computer = choices[Math.floor(Math.random() * 3)];

    if (player === computer) {
        return {
            result: "Draw",
            computer,
            player,
        };
    }

    if (
        (player === "rock" && computer === "scissor") ||
        (player === "scissor" && computer === "paper") ||
        (player === "paper" && computer === "rock")
    ) {
        return {
            result: "Win",
            computer,
            player,
        };
    }

    return {
        result: "Lose",
        computer,
        player,
    };


};

console.log(rockpaperScissor("paper"));

// NUNJUKIN NOMOR KECIL KE -2 DARI ARRAY OF NUMBERS
const numbers3 : number[] = [5, 3, 1, 7, 6, 2];
numbers3.sort((a, b) => a - b);
console.log(numbers3);
console.log(numbers3[1]);

// MENGHITUNG TIAP ELEMENT DI POSISI YANG SAMA
const numbers4 : number[] = [1, 2, 3];
const numbers5 : number[] = [3, 2, 1];

const result = numbers4.map((num, idx) => {
    return num + numbers5[idx];
});

console.log(result);

// MENAMBAHKAN ELEMENT DI ARRAY TAPI KALAU UDAH ADA GA BISA DI ADD
const arr: number[] = [1, 2, 3, 4];
const newNumber: number = 5;

if (!arr.includes(newNumber)) {
    arr.push(newNumber);
}

console.log(arr);
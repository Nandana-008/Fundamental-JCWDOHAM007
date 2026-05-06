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


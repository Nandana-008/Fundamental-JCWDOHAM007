// CEK APAKAH NOMOR GANJIL ATAU GENAP
const num: number = 2;

if(num % 2 === 1) {
    console.log("Ganjil");
} else {
    console.log("Genap");
}

// CEK BILANGAN PRIMA ATAU BUKAN

const angka: number = Math.floor(Math.random() * 100) + 1;
console.log(angka);

let isPrime: boolean = true;

for(let i = 2; i < angka; i++) {
    if(angka % i === 0) {
        isPrime = false;
        break;
    }
}

if(isPrime === true) {
    console.log("Bilangan prima");
} else {
    console.log("Bukan bilangan prima");
}

// JUMLAH ANGKA DARI 1 SAMPAI N
let n:number = 67;
let hasil: number = 0;

for(let i = 1; i <=n; i++) {
    hasil += i;
}

console.log(hasil);

// MENCARI FAKTORIAL
let angka2: number = 6;
let hasil2: number = 1;

for(let i = 1; i <= angka2; i++) {
    hasil2 *= i;
}

console.log(hasil2);

// MENCARI SUKU KE - N DARI ANGKA FIBONACCI
let suku:number = 15;
let a:number = 0;
let b:number = 1;

for(let i = 1; i < suku; i++) {
    let c:number = a + b;
    a = b;
    b = c;
}

console.log(b);
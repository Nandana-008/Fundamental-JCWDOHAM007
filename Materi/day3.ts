// ================= IF STATEMENT ===========
/*
 if(condition) {
  code block
 }
*/

const age:number = 11;

if(age >= 17) {
    console.log("Anda bisa buat KTP");
}

// =================== ELSE STATEMENT ===================
// Backup plan dari if statement

const umur:number = 11;

if(umur >= 17) {
    console.log("Anda bisa buat KTP");
} else {
    console.log("Anda belum bisa buat KTP");
}

// =================== ELSE IF STATEMENT ====================
const grade:string = "A";

if(grade === "A") {
    console.log("Nilai bagus");
} else if (grade === "B") {
    console.log("Nilai lumayan");
} else if (grade === "C") {
    console.log("Nilai buruk");
} else {
    console.log("Nilai tidak diketahui");
}

const nama:string = "Rusdi";

if(nama === "Rusdi") {
    console.log("Kamu jomok");
} else {
    console.log("Kamu SUKI");
}

// =================== SWITCH STATEMENT ==================
/* 
  switch(value) {
        case value1:
            result
            break;
        case value2:
            result
            break
        default:
            result
            break
  }
*/

const day: string = "Senin";

switch(day) {
    case "Senin":
        console.log("Hari Senin");
        break;
    case "Selasa":
        console.log("Hari Selasa");
        break;
    case "Rabu":
        console.log("Hari Rabu");
        break;
    default:
        console.log("Hari tidak ditemukan");
        break;
}

// kalau kompleks pakai else if aja wok

// ===================== LOGICAL OPERATOR =================
/* 
  && -> and
  || -> or
  ! -> not
*/

// AND -> harus keduanya bernilai true agar menghasilkan nilai true

const umur2: number = 18;
const punyaSIM: boolean = true;

if (umur2 >= 17 && punyaSIM) {
    console.log("Boleh bawa kendaraan");
} else {
    console.log("Belum boleh bawa kendaraan");
}

// OR -> Atau,kalau salah 1 nilai = true, hasilnya true
const car:string = "BMW";

if(car === "Mercedes" || car === "BMW") {
    console.log("Kendaraan Eropa");
} else {
    console.log("Kendaraan Jepang");
}

// NOT -> membalikan nilai boolean

const isSunny: boolean = false;
const isRaining: boolean = !isSunny;

console.log(isSunny);
console.log(isRaining);

// ==================== TERNARY OPERATOR ================
// Shortcut buat nulis if else condition
/* 
codition ? true : false
*/

const str:string = "javascript";

if(str === "javascript") {
    console.log("javascript");
} else {
    console.log("Not javascript");
}

console.log(str === "javascript" ? "javascript" : "not javascript");

// condition ? true : condition ? true : condition ? true : false <- ini sulit dibaca wok, mending pakai else if aja

// ==================== LOOP STATEMENT (Perulangan) ===============
// rangkaian instruksi yang diulang" hingga kondisi nya tdk terpenuhi

// type : for loop, while loop, do while loop

/* 
FOR LOOP : 3 statement : 
    1. menginisiasi variable dari looping itu sendiri
    2. mendefine kondisi dari looping tersebut
    3. kode yang dieksekusi di akhir setiap iterasi

    Contoh FOR LOOP :
        for(statement1; statement2; statement3) {
            code block yang akan diulang
        }
*/

for(let i = 0; i < 4; i++) {
    console.log("Hello World");
}

/* 
WHILE LOOP : if statement cuman berulang"
Contoh :
    while(condition) {
        code block yang akan diulang
    }
*/

let i:number = 0;

while(i < 3) {
    console.log("Hello World");
    i++;
}

// DO WHILE LOOP bedanya sama WHILE LOOP : WHILE LOOP dia akan melakukan pengecekan dlu, kalau DO WHILE LOOP : lakuin dlu baru pengecekan
/* 
    do {
        code block yang akan diulang
    } while (condition);
*/

let count:number = 3;

do { 
    console.log("Ini iterasi ke : " + count);
    count++;
} while (count <= 5);

// ================== BREAK =====================
// Untuk menghentikan loop

let sum: number = 3;

while(true) {
    console.log(sum);

    if(sum >= 5) {
        break;
    }
    sum++;
}

// ============== CONTINUE =====================
// melakukan skip pada looping

for (let i = 0; i < 6; i++) {
    if (i % 2 === 1) {
        continue;
    }
    console.log(i);
}
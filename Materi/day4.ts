// ============= ARRAY ==================

const arr = []; // cara 1 INI PALING SERING DIPAKAI
const arr2 = new Array(); // cara 2

const arrayOfString: string[] = ["A", "B", "C", "D"]; // Length 4, index 3
console.log(arrayOfString[1]); // arrayOfString[index ke brp]

const arrayOfNumber: number[] = [1, 3, 4, 5, 6];
console.log(arrayOfNumber[3]);

interface Student { // ditulis nya HARUS pakai PascalKey bukan camelKey
    nama: string;
    umur: number;
    hobi?: string; // pakein "?" kalau mau jadi optional
} // buat dimasukin ke variable siswa di bawah, dan tulis nya harus sesuai interface

const siswa: Student = {
    nama: "Rusdi", // <-- Ini key (nama, umur, hobi), key tdk kepengaruh sama posisi
    umur: 15,
    hobi: "Cukur rambut"
};

console.log(siswa.hobi); // cara pertama akses value object
console.log(siswa["nama"]);// cara kedua akses value object

// INI ARRAY OF OBJECT

const students = [
    {name: "Budi", age: 10},
    {name: "Joko", age: 10},
    {name: "Siti", age: 9},
]; // Contoh array of object, length 3, index 2
console.log(students[1].age);

// ================== FOR OF ========================
const fruits: string[] = ["apple", "banana", "orange", "papaya"];
console.log(fruits.length);

for(let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
} // i = 0 karena index mulai dari 0, ini looping array by index

for(let fruit of fruits) {
    console.log(fruit);
} // variable tulis pake plural (fruits, products), lebih mudah dibanding yang di atas (cmn tergantung kasus jg kapan pemakaian nya)

// ==================== FUNCTION ===================

// function declaration
/* 
    function namaFunc() {
        logic
    };
*/

function sayHello() {
    console.log("Hello World");
}

sayHello(); // <-- cara jalananin function

// function expression
/* 
    const namaFunc = function() {
        logic
    } (nama function di wakili sama nama variable)
*/

const sayHello2 = function() {
    console.log("Hello World");
}

sayHello2();

// =================== FUNCTION SCOPE ==================
// variable yang didefine di dalam function, hanya bisa diakses di dalam func tsb
function greeting() {
    const hello: string = "hello";

    console.log(hello); // bisa diakses karena dalam 1 scope function nya (1 code block)
    return hello; // biar bisa diakses di luar code block, sama biar bisa diulang"
}

console.log(greeting());

// =================== PARAMETER & ARGUMENT ===============
// parameter : variable yang mewakili value dari argument yang dimasukan
// argument : value yang dimasukan saat pemanggilan function

function selamatDatang(name: string, company?: string) { // Parameter dimasukin di sini
    const welcome: string = "Selamat Datang";
    if (company) {
        return `Selamat Datang ${name} dari ${company}`;
    } else {
        return `Selamat Datang ${name}`;
    }
    // bisa juga return `${welcome}, ${name} from ${company}` atau return welcome + name + "dari" + company;
}

console.log(selamatDatang("Budi", "Gojek")); // argument dimasukin di sini
console.log(selamatDatang("Joko"));

// ========= DEFAULT PARAMETER ===========
function multiply(a: number, b:number = 3) {
    console.log(a);
    console.log(b);

    return a * b;
}

console.log(multiply(3, 10));
console.log(multiply(5));

// ================= REST PARAMETER ================
function myFunc(a: number, b: number, ...c: number[]) {
    console.log(a);
    console.log(b);
    console.log(c);
}

myFunc(1, 2, 3, 4, 5, 6, 7);

// =============== NESTED FUNCTION =================
// function di dalam function
function getMessage (firstName: string) {
    function sayHello() {
        return "Hello" + " " + firstName;
    }

    function welcomeMessage() {
        return "Welcome to Purwadhika";
    }

    return sayHello() + " " + welcomeMessage();
}

const message: string = getMessage("David");
console.log(message);

// ================ CURRYING =======================
function multiplier (factor: number) {
    return function (number: number) {
        return number * factor;
    };
}

console.log(multiplier(3)(5));
console.log(multiplier(5)(5));

const mul3 = multiplier(3);
const mul5 = multiplier(5);

console.log(mul3(5));
console.log(mul5(5));


// ================= RECURSIVE ===============
// fungsi yang memanggil diri sendiri

function countdown(angka: number) {
    console.log(angka);

    let nextNumber = angka - 1;
    if (nextNumber > 0) {
        countdown(nextNumber);
    }
}

countdown(9); // mirip looping

// ============== ARROW FUNCTION ==================
// shortcut untuk menuliskan function expression

// func expression
const square = function (angka: number) {
    return angka * angka;
};

// arrow func
const sqaure2 = (angka: number) => {
    return angka * angka;
}; 
// klo cuman 1 line bisa disingkat
const square3 = (angka: number) => angka * angka;

// ===================== ARRAY BULIT IN METHOD =================
// JOIN -> menghubungkan value yang ada dalam array ke bentuk string
const words: string[] = ["Hello", "World"];
console.log(words.join(" "));

// POP -> menghilangkan vlue paling akhir dalam array
const words2: string[] = ["Hello", "World", "Test"];
console.log(words2);
words2.pop();
console.log(words2);

// SHIFT -> menghilangkan value paling depan dalam array
const words3: string[] = ["Hello", "World", "Test"];
console.log(words3);
words3.shift();
console.log(words3);

// UNSHIFT -> menambahkan value ke urutan paling depan array
const words4: string[] = ["Hello", "World", "Test"];
console.log(words4);
words4.unshift("Budi");
console.log(words4);

// PUSH -> menambahkan value ke urutan paling belakang array
const words5: string[] = ["Hello", "World", "Test"];
console.log(words5);
words5.push("Siti");
console.log(words5);

// SPLICE -> menghapus, mengganti, atau menambahkan value pada array
// syntax -> splice(startIndex, brpYngMauDiDelete, item)

const months: string[] = ["Januari", "Maret", "April", "Juni"];
// menambahkan data
months.splice(1, 0, "Februari");
console.log(months);

// menghapus data
months.splice(4, 1);
console.log(months);

// ganti data
months.splice(3, 1  , "Agustus");
console.log(months);

// SORT -> mengurutkan isi array berupa string/number
const fruits2: string[] = ["banana", "apple", "orange", "papaya"];
fruits2.sort();
console.log(fruits2);
console.log(fruits2.reverse());

const numbers: number[] = [3, 2, 5, 6, 7, 4];
numbers.sort((a, b) => a-b); //ascending
// numbers.sort((a, b) => b-a); //descending
console.log(numbers);
console.log(numbers.reverse());

// INCLUDES -> mengecek value pada array ada atau tidak, hasilnya boolean
const fruits3: string[] = ["banana", "apple", "orange", "papaya"];
console.log(fruits3.includes("apple"));

// MAP -> biasa dipakai di frontend, melakukan looping pada array dan akan mereturn array baru
const points: number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const result = points.map((point) => {
    return point * 2;
});

console.log(result);

const students2 = [{id: 1, name: "Budi"},
                {id: 2, name: "Joko"},
                {id: 3, name: "Siti"},
];

const result2 = students2.map((student) => {
    return student.id;

})

console.log(result2);

// FOREACH -> Melakukan looping pada array tapi ga mereturn ke array baru
const fruits4: string[] = ["banana", "apple", "orange", "papaya"];

fruits4.forEach((fruit, index) => {
    console.log(fruit);
    console.log(index);
}); // Cuman lakuin looping ga ngasilin apapun jadi ga perlu pakai return dkk

// FILTER -> Melakukan looping pada array dan menghasilkan array baru berdasarkan pada return function nya
const ages: number[] = [12, 16, 56, 70, 80, 44, 20];

const result4 = ages.filter((age) => {
    return age > 20;
})

console.log(result4);

// FIND -> Mencari value yang ditemukan pertama kali dalam array
const ages2: number[] = [12, 16, 56, 70, 80, 44, 20];

const result5 = ages2.find((age) => {
    return age === 80;
})

console.log(result5);

// FIND INDEX -> sama kyk find tapi yang dihasilkan index nya, kalau ga ada hasilnya -1
const students3 = [{id: 100, name: "Budi"},
                {id: 101, name: "Joko"},
                {id: 102, name: "Siti"},
                {id: 103, name: "Rusdi"},
                {id : 104, name: "Fuad"},
];

const result6 = students3.findIndex((student) => {
    return student.id === 103;
})

console.log(result6);

// REDUCE -> melakukan operasi aritmatika
const numbers2 : number[] = [200, 50, 100, 50];

const result7 = numbers2.reduce((a, b) => {
    return a + b;
})

console.log(result7);
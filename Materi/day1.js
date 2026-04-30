console.log("Hello World");

// ini adalah comment 1
// ini adalah comment 1
/* 

ini
comment
2

*/

// =================== VARIABLE =============
// storage / penampungan data
// var, let, const

var person = "Ahmad Zaenuri";
console.log(person);

let person2 = "Rahayu";
person2 = "Steven Silvester";
console.log(person2);

const person3 = "Jessica Br";
console.log(person3);


// ============= VARIABLE NAMING =================
/* 
- letter, digit, symbol ($, _) only
- first character must not digit
- case sensitive
*/

const companyName = "Purwadhika"; //camel case
const CompanyName = "Purwadhika"; //pascal case
const company_name = "Purwadhika"; //snake case

// ============= DATA TYPES ====================
/* 
- primitive = string, number, boolean, null and undefined
- non primitive = object n array
*/

// string -> "", '', ``
console.log("Hello");
console.log('Hello');
console.log(`Hello`); // contoh" string (kalau ada petik dua string)

//number -> 1 2 3 100
console.log(1);
console.log(10);
console.log(1000); // contoh" number

//boolean -> true or false
console.log(true);
console.log(false); // contoh" boolean

// null -> menandakan sebuah value itu masih kosong/blum terisi
let orang = null;

// undefined -> js tdk tahu isinya (kosong)
let orang2 = undefined;

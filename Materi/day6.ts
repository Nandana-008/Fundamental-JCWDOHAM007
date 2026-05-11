// ============ OBJECT =============
// cara 1
const obj1 = {};
// cara 2
const obj2 = new Object();


//di Js ga ada fitur interface kyk di Ts
interface User {
    name: string;
    job: string;
    address: Address
    hobby: string[];
    makan: () => void;
} //interface dipasang di variable user dibawah

interface Address {
    street: string;
    city: string;
    postalCode: string;
}

const user: User = {
    name: "Fuad",
    job: "Ahli kicaw",
    address : {
        street: "Jalan Ngawi Raya",
        city: "Ngawi",
        postalCode: "69",
    },
    hobby: ["mancing", "masak", "adalah pokok nya"],
    makan() {
        console.log("makan");
    }
};

console.log(user.name);
console.log(user["job"]);
console.log(user.address.street);
user.makan();

// =========== ADD PROPERTY ============
const person: any = {
    name: "jack",
    age: 30,
};

console.log(person);
person.hobby = "ngoding";
console.log(person);

person["ijazah"] = "asli wak"
console.log(person);

// ======== DELETE PROPERTY =============
delete person.name;
console.log(person);

// ========= IMMUTABLE & MUTABLE ========
/* 
    immutable: data yang tdk bisa diubah setelah dibuat (primitive (string, number, boolean, null))
    mutable : bisa diubah setelah dibuat (non prmitive seperti object dan array)
*/

//immutable
let count: number = 10;
let count2: number = count;
count2 = 30 // <- jadi yang ini (count2 doang)

console.log(count);
console.log(count2);

//mutable
const orang1: any = { name: "budi"};
// const orang2: any = orang1;
const orang2: any = {...orang1}; //shallow copy

orang2.age = 30;

console.log(orang1);
console.log(orang2);

// ========= OPTIONAL CHAINING ==========
const user2: any = {};

console.log(user2.address);
console.log(user2.adress?.street); //kalau ga pakai tanda "?" nanti error cik

// ========== FOR IN ===============
const person2: any = {
    name: "siti",
    age: 20,
    hobby: "ngoding",
};

for(const key in person2) {
    console.log(key);
    console.log(person2[key])
}

// ============= DESTRUCTING ASSIGNMENT ===============
// mengeluarkan property dalam object/array menjadi variable

//versi object
const animal = {
    name: "Bruh",
    age: 2,
};

console.log(animal.name);

const {name, age} = animal;
console.log(name);
console.log(age);

//versi array
const arr: number[] = [10, 20];

console.log(arr[1]);

const [nomor1, nomor2] = arr;
console.log(nomor1);
console.log(nomor2);

// ======== SPREAD OPERATOR =============
// digunakan untuk copy isi object/mengganbungkan object

const objectOne = {
    name: "budi",
    email: "budi@mail.com"
};

const objectTwo = {
    passowrd: "Admin123",
    name: "Joko" // jangan sampai ada key yang sama, nanti yang di atas ke
};

const result = {...objectOne, ...objectTwo};
console.log(result);

// ======== THIS KEYWORD ================
// mengakses property lain di dalam object
const person3 = {
    firstName : "Joko",
    lastName : "Solomonsky",
    greet() {
        console.log(`Hello, ${this.firstName} ${this.lastName}`)
    },
};

person3.greet();

// ========= CLASS ============
// template / cetakan untuk membuat object

// class declaration
class Person {
    greet() {
        console.log("hello");
    }
};

// class expression
const Person2 = class {
    greet() {
        console.log("hello");
    }
};

const human = new Person(); // kalau ada tulisan new berarti class
const human2 = new Person();

human.greet();
human2.greet();

// ======== CONSTRUCTOR ================
// method bawaan dari class yang akan dijalankan pertama kali saat membuat object baru

class Vehicle {
    brand: string;
    type: string;
    #chassisNumber: string; // <-- dikasih # biar jadi private identifier,yang bisa akses cmn yang di constructor

    constructor(brand: string, type: string, chassisNumber: string) {
        this.brand = brand;
        this.type = type;
        this.#chassisNumber = chassisNumber;
    }

    start() {
        this.#test();
        return `${this.brand} ${this.type} engine started`;
    }

    #test() {
        console.log("Test");
    }
}

const kendaraan = new Vehicle ("McLaren", "MP4/2", "1239492939");
console.log(kendaraan.brand);
console.log(kendaraan.type);
// console.log(kendaraan.#chassisNumber);
// console.log(kendaraan.#test);

const kendaraan2 = new Vehicle("Ferarri", "F2004");
console.log(kendaraan2.brand);
console.log(kendaraan2.type);
console.log(kendaraan2.start());

// ============= INHERITENCE ===============
// pewarisan dari parent class ke child class
// property dan method parent bisa diakses sama child class


//CONTOH TIDAK MENGGUNAKAN INHERITENCE
class Employee {
    name: string;
    salary: number;

    constructor(name: string, salary: number) {
        this.name = name
        this.salary = salary;
    }

    work() {
        console.log(`$(this.name) is working`);
    }
}

class Manager {
    name: string;
    salary: number
    department: string;

    constructor(name: string, salary: number, department: string) {
        this.name = name;
        this.salary = salary;
        this.department = department;
    }

    work() {
        console.log(`$(this.name) is working`);
    }
}

// MENGGUNAKAN INHERITENCE
class Employee2 {
    name: string;
    salary: number;

    constructor(name: string, salary: number) {
        this.name = name
        this.salary = salary;
    }

    work() {
        return `${this.name} is working`;
    }
}

class Manager2 extends Employee2{
    department: string;

    constructor(name: string, salary: number, department: string) {
        super(name, salary)
        this.department = department;
    }
}

const manager = new Manager2("Budi", 5000000, "HR");
console.log(manager.name);
console.log(manager.salary);
console.log(manager.department);

const employee = new Employee2("Andre", 3000000);
console.log(employee.name);
console.log(employee.salary);

const employee2 = new Employee2("Ahmad", "6000000");
console.log(employee2.name);
console.log(employee2.work());
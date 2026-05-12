//ALGORITHM AND DATA STRUCTURE

import { myFunc } from "./test";

function test () {
    for(let i = 0; i < 10; i++) {
        console.log("test");
    } //0(n)

    for(let i = 0; i < 10; i++) {
        for(let j = 0; j < 10; j++) {
            for(let k = 0; k < 10; k++) {
                console.log("test");
            }
        };
    } // 0(n3)
}

// HASHMAP (BEDA SAMA BUILT IN FUNCTION MAP) (NYIMPEN DATA MIRIP OBEJCT, CUMAN KEY DATA NYA BISA BERAGAM)

const myMap = new Map()

myMap.set("name", "John Doe");
myMap.set("address", "Jakarta");

console.log(myMap.get("address"));
console.log(myMap.get("name"));

console.log(myMap.has("aowoeijeijie"));

myMap.delete("address");
console.log(myMap.has("address"));

// ========== Set -> only unique values ==============

const fruits: string[] = ["apple", "mango", "apple", "orange"];

const mySet = new Set(fruits);
console.log(mySet);
console.log(Array.from(mySet));
console.log(mySet.size);

// simulasi fetch data ke Backend

function fetchData () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true;

            if(success) {
                resolve("Joko");
            } else {
                reject("Terjadi kesalahan loh ya");
            }
        }, 2000);
    })
}

fetchData()
.then((response) => {
    console.log(response);
})
.catch((error) => {
    console.log(error);
})
.finally(() => {
    console.log("Promise selesai");
})

// Menggunakan async await

async function getDataUser() {
    try {
        const user = await fetchData()
        console.log(user);
    } catch (error) {
        console.log(error);
    } finally {
        console.log("Promise selesai");
    }
}

getDataUser();

const getUsers = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const users = await response.json();
        console.log(users);
    } catch (error) {
        console.log(error);
    }
};

getUsers();

// JSON

const user = {
    name: "Budi",
    age: 32,
};

const userJSON = JSON.stringify(user);
console.log(JSON.stringify(user));

const parseJSON = JSON.parse(userJSON);
console.log(parseJSON);

//MODULES
//myFunc() // tapi ini bisanya buat quokka versi pro, buat import function dari beda file

// HOISTING
test1(); //ga ngaruh posisi nya

function test1() {
    console.log("test1");
}

const test2 = () => {
    console.log("test2");
};

test2();
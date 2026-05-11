//ALGORITHM AND DATA STRUCTURE

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
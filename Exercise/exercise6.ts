// 1. MENGHITUNG ARRAY DATA SISWA
// Objek nya :
/* 
Name: string
Email: string
Age: date
Score: Number
*/
// RETURN NYA Score : tinggi ke rendah, Usia : tinggi ke rendah

interface Siswa {
    name: string;
    email: string;
    age: number;
    score: number;
};

const siswa : Siswa[] = [
    {
        name: "Rusdi",
        email: "masrusdi@mail",
        age: 23,
        score: 150
    },

    {
        name: "Fuad",
        email: "masfuas@mail",
        age: 25,
        score: 130
    },

    {
        name: "Nasir",
        email: "kingnasir@mail",
        age: 21,
        score: 160
    },
];

const urutanUmur = siswa.sort((a, b) => b.age - a.age).map(s => s.age);
console.log(urutanUmur);

const urutanScore = siswa.sort((a, b) => b.score - a.score).map(s => s.score);
console.log(urutanScore);

//2. MEMBUAT TRANSAKSI
// PRODUCT CLASS : Properties : name, price
// TRANSACTION CLASS : Properties : total, product (All product data, Qty)

class Product {
    name: string;
    price: number;

    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    };
};

class Transaction {
    total: number;
    products: {
        product: Product;
        qty: number;
    }[];

    constructor() {
        this.total = 0;
        this.products = [];
    }

    addToCart (product: Product, qty: number) {
        this.products.push ({ product, qty});
        this.total += product.price * qty;
    }

    showTotal () {
        console.log(this.total);
    }

    checkout() {
        console.log("Transaksi berhasil diselesaikan")

        return {
            total: this.total,
            detai: this.products,
        }
    }
};

const produk = new Product ("Bumbu Cepat Saji", 30000);
const produk2 = new Product ("Bawang", 30000);

const myTransaction = new Transaction();

myTransaction.addToCart(produk, 1);
myTransaction.addToCart(produk2, 3);

myTransaction.showTotal();

const hasilFinal = myTransaction.checkout();
console.log(hasilFinal);

// DEMO NYA KAK DANIEL
interface Student {
    name: string;
    email: string;
    age: number;
    score: number;
}

const students: Student[] = [
    {name: "budi", email: "budi@gmail", age: 20, score: 90},
    {name: "andre", email: "andre@gmail", age: 21, score: 80},
    {name: "siti", email: "siti@gmail", age: 22, score: 85 },
];

class CalculateStudent {
    students: Student[]

    constructor(students: Student[]) {
        this.students = students;
    }

    calculate () {
        const scores = this.students.map((student) => student.score);
        const ages = this.students.map((student) => student.age);

        const maxScore = Math.max(...scores);
        const minScore = Math.min(...scores);
        const avgScore = scores.reduce((a, b) => a + b, 0) / scores.length;

        const maxAge = Math.max(...ages);
        const minAge = Math.min(...ages);
        const avgAge = ages.reduce((a, b) => a + b, 0) / ages.length;

        return {
            score: {
                highest: maxScore,
                lowest: minScore,
                average: avgAge
            },
            age: {
                highest: maxAge,
                lowest: minAge,
                average: avgAge,
            },
        };
    }
}

const calculateStudent = new CalculateStudent(students);
console.log(calculateStudent.calculate());
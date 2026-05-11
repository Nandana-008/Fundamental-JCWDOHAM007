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
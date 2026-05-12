// 1. NOMOR TELPON
function phoneNumber(input: any) {
    const numberRegex = /^[0-9]{12}$/;
    //1. validasi tipe
    if (typeof input !== "string") {
        return "Invalid phone number"
    } else if (!numberRegex.test(input)) {
        return "Invalid phone number"
    } else {
        const part1 = "62" + input.slice(1, 3);
        const part2 = input.slice(3, 7);
        const part3 = input.slice(7)

        return `(${part1})-${part2}-${part3}`
    };
    //2. validasi panjang
    //3. validasi karakter
    //4. transformasi
    //5. Formatting
}

console.log(phoneNumber("085211155555"));
console.log(phoneNumber("0852111555a5"));
console.log(phoneNumber("085211555"));

//2. ONLINE SHOP
class Product {
    nama: string;
    berat: number;
    price: number;
    stock: number;

    constructor(nama: string, berat: number, price: number, stock: number) {
        this.nama = nama;
        this.berat = berat;
        this.price = price;
        this.stock = stock;
    }
};

class Buku extends Product{
    judul: string;

    constructor(nama: string, berat: number, price: number, stock: number, judul: string) {
        super(nama, berat, price, stock);
        this.judul = judul;
    }
}

class Pakaian extends Product{
    ukuran: string;

    constructor(nama: string, berat: number, price: number, stock: number, ukuran: string) {
        super(nama, berat, price, stock);
        this.ukuran = ukuran;
    }
}

interface Cart {
    product: Product;
    qty: number;
}

class OnlineShop {
    products: Product[];
    private cart: Cart[];

    constructor() {
        this.products = [];
        this.cart = [];
    }

    tambahProduk(produk: Product) {
        const isExist = this.products.find(p => p.nama === produk.nama);

        if(isExist) {
            return "Produk sudah ada dalam toko"
        }

        this.products.push(produk);
    }

    showCatalog() {
        return this.products;
    }

    tambahKeranjang(produk: Product, jumlah: number) {
        const itemAsli = this.products.find(p => p.nama === produk.nama);

        if (!itemAsli) {
            return "Produk tidak ada di katalog"
        } else if (jumlah > itemAsli.stock) {
            return `stok tidak mencukupi, stok sisa : ${itemAsli.stock}`;
        } else {
            this.cart.push ({product: itemAsli, qty: jumlah});

            itemAsli.stock -= jumlah;
            return "Berhasil menambahkan ke keranjang"
        }
    }

    showCart() {
        return this.cart;
    }

    transaksi(uangUser:number, jarak: number) {
        let totalHargaBarang = 0;

        this.cart.forEach(item => {totalHargaBarang += item.product.price * item.qty;});

        const ongkir = jarak * 2000;
        const totalBayar =  totalHargaBarang + ongkir;

        if (uangUser < totalBayar) {
            return "Uang tidak cukup";
        } else {
            const kembalian = uangUser - totalBayar;
            const infoTransaksi = {
                total: totalBayar,
                kembalian: kembalian,
                status: "Berhasil",
            }
            this.cart = [];

            return infoTransaksi;
        }
    }
}

const myStore = new OnlineShop();

const bukuJS = new Buku("Buku belajar typscript", 1, 150000, 10, "Kiat Typescript");
const kaosPolos = new Pakaian("Kaos Hitam", 0.5, 200000, 5, "XL");

myStore.tambahProduk(bukuJS);
myStore.tambahProduk(kaosPolos);
console.log(myStore.showCatalog())

console.log(myStore.tambahKeranjang(bukuJS, 2));
console.log(myStore.tambahKeranjang(kaosPolos, 2));

console.log("Isi Keranjang :", myStore.showCart());

console.log(myStore.transaksi(800000, 2));
// ini yang nomor 2 aja yang cart

class Product {
    name: string;
    price: number;

    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }
}

interface Cart {
    product: Product;
    qty: number;
}

class Transaction {
    total: number;
    carts: Cart[];

    constructor() {
        this.total = 0;
        this.carts = [];
    }

    formatPrice(price: number) {
        return new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
            maximumFractionDigits: 0,
        }), format(price);
    }

    addToCart(product: Product, qty: number) {
        const existingProduct = this.carts.find(
            (cart) => cart.product.name === product.name,
        );

        if (existingProduct) {
            existingProduct.qty += qty;
        } else {
            this.carts.push({product, qty });
        }

        this.total += product.price + qty;

        return "Add to cart berhasil"
    }

    showCart() {
        return this.carts;
    }

    showTotal() {
        return this.total;
    }

    checkout(userMoney: number) {
        if (userMoney < this.total) {
            return "Uang tidak cukup";
        }

        const result = {
            total: this.formatPrice(this.total),
            message: "Transaksi berhasil",
            kembalian: this.formatPrice(userMoney - this.total),
        };

        this.carts = [];
        this.total = 0;

        return result
    }
}

const baju = new Product("baju", 100_000);
const celana = new Product("celana", 150_000);
const kemeja = new Product("kemeja", 200_000);

const transaction = new Transaction()
// Luas persegi panjang
const panjang: number = 7;
const lebar: number = 4;
console.log(panjang * lebar);

// Keliling pesergi panjang
const p: number = 9;
const l: number = 3;
console.log(2 * (p + l));

// Diameter, keliling, dan luas lingkaran
const r: number = 5;
const pi: number = 3.14;

console.log(2 * r); // Diameter
console.log(Math.floor(pi * (r ** 2))); // Luas lingkaran
console.log(Math.floor(2 * pi * r)); // Keliling lingkaran

// Sudut segitiga
const sudutA: number = 50;
const sudutB: number = 60;
console.log(180 - (sudutA + sudutB));

// Konversi hari -> tahun, bulan, dan hari
const hariDalamSetahun: number = 365;
const hariDalamSebulan: number = 30;
const totalHari: number = 47399;

const tahun = Math.floor(totalHari / hariDalamSebulan);
const sisaHariSetelahTahun = Math.floor(totalHari % hariDalamSetahun);
const bulan = Math.floor(sisaHariSetelahTahun / hariDalamSebulan);
const hari = sisaHariSetelahTahun % hariDalamSebulan;

console.log(`${tahun} Tahun ${bulan} Bulan ${hari} Hari`);

//Perbedaan hari
const date1 = new Date('2026-04-27');
const date2 = new Date('2026-04-29');

const hari1 = date1.getDate();
const hari2 = date2.getDate();

console.log(hari2 - hari1);
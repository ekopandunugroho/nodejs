// soal1.js

const shapes = require('./shapes');

// Menggunakan module untuk menghitung luas dan keliling
const sisiPersegi = 5;
console.log(`Luas persegi dengan sisi ${sisiPersegi}: ${shapes.luasPersegi(sisiPersegi)}`);
console.log(`Keliling persegi dengan sisi ${sisiPersegi}: ${shapes.kelilingPersegi(sisiPersegi)}`);

const panjangPersegiPanjang = 6;
const lebarPersegiPanjang = 4;
console.log(`Luas persegi panjang dengan panjang ${panjangPersegiPanjang} dan lebar ${lebarPersegiPanjang}: ${shapes.luasPersegiPanjang(panjangPersegiPanjang, lebarPersegiPanjang)}`);
console.log(`Keliling persegi panjang dengan panjang ${panjangPersegiPanjang} dan lebar ${lebarPersegiPanjang}: ${shapes.kelilingPersegiPanjang(panjangPersegiPanjang, lebarPersegiPanjang)}`);
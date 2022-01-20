// Cara untuk membuat Object pada JavaScript
// 1. Object Literal
// let mahasiswa1 = {
//     //property
//     nama: 'Sandhika',
//     energi: 10,

//     //method
//     makan: function (porsi) {
//         this.energi = this.energi + porsi;
//         console.log(`Selamat makan, ${this.nama}! Energimu sekarang menjadi ${this.energi}.`);
//     }
// }

// // Object literal namanya tidak boleh sama
// let mahasiswa2 = {
//     //property
//     nama: 'Edvin',
//     energi: 30,

//     //method
//     makan: function (porsi) {
//         this.energi = this.energi + porsi;
//         console.log(`Selamat makan, ${this.nama}Energimu sekarang menjadi ${this.energi}.`);
//     }
// }


// Function Declaration
// Keuntungannya kalian tidak perlu membuat duplikat dari objectnya
// Nanti kalo mau bikin objectnya 2 atau 3 tinggan instansiasinya yang berulangkali

// Ini kita membuat BluE Print nya
// function Mahasiswa(nama, energi) {
//     // Awalnya sama yaitu dengan membuat object KOSONGAN
//     let mahasiswa = {};
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;

//     // Ini juga mirip tapi ini bentuknya jadi seperti class
//     // Pake . (dot)
//     mahasiswa.makan = function (porsi) {
//         this.energi += porsi;
//         console.log(`Selamat makan, ${this.nama}. Energimu sekarang menjadi ${this.energi}.`);
//     }

//     // Membuat method main yang akan mengurangi energi
//     mahasiswa.main = function (jam) {
//         this.energi -= jam;
//         console.log(`Hallo ${this.nama}, selamat bermain! Energimu sekarang tinggal ${this.energi}.`);
//     }

//     return mahasiswa;
// }

// // INISIASI OBJECT
// let dida = Mahasiswa("Dida", 10);
// let edvin = Mahasiswa('Edvin', 50);





// Constructor Function
function Mahasiswa(nama, energi) {
    // Pada constructor function, kita tidak memerlukan deklarasi array kosong
    // let mahasiswa = {};

    // Selain itu mahasiswa ini diganti menjadi this
    this.nama = nama;
    this.energi = energi;

    // Ini juga mirip tapi ini bentuknya jadi seperti class
    // Pake . (dot)
    this.makan = function (porsi) {
        this.energi += porsi;
        console.log(`Selamat makan, ${this.nama}. Energimu sekarang menjadi ${this.energi}.`);
    }

    // Membuat method main yang akan mengurangi energi
    this.main = function (jam) {
        this.energi -= jam;
        console.log(`Hallo ${this.nama}, selamat bermain! Energimu sekarang tinggal ${this.energi}.`);
    }

    // Pada Constructor Function ini kita juga tidak memerlukan return
    // return mahasiswa;
}

// Untuk inisiasi, seperti inisiasi pada Function Declaration
// Namun untuk Constructor Function ini perlu menambahkan keyword di depan
// Apabila tanpa keyword new, maka dia akan mencari functon declaration yang memiliki array kosong dan return

let dida = new Mahasiswa('Dida', 20);
















// Object.created
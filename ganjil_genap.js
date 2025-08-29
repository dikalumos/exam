const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Masukkan sebuah angka: ", (input) => {
  const angka = parseInt(input, 10);
  if (isNaN(angka)) {
    console.log("Input bukan angka.");
  } else if (angka % 2 === 0) {
    console.log("Angka tersebut Genap.");
  } else {
    console.log("Angka tersebut Ganjil.");
  }
  readline.close();
});

// Untuk menjalankan kode ini, simpan dalam file bernama ganjil_genap.js
// lalu jalankan perintah `node ganjil_genap.js` di terminal.

// ! JANGAN DIMOFIDIKASI
const dataBelanjaan = [
  {
    id: "D-10001",
    nama: "Minyak Goreng Delima",
    harga: 25000,
    kuantitas: 2,
  },
  {
    id: "D-10020",
    nama: "Beras Mamos",
    harga: 48000,
    kuantitas: 1,
  },
  {
    id: "F-00010",
    nama: "Larutan Cap Kaki Empat",
    harga: 7500,
    kuantitas: 8,
  },
];

const myObj = dataBelanjaan;

// boleh dimodifikasi bila ingin menggunakan deklarasi fungsi yang normal
const listBelanjaan = belanjaan => {
    return belanjaan.map(belanja =>`- ${belanja.nama} x ${belanja.kuantitas}`)
};


// boleh dimodifikasi bila ingin menggunakan deklarasi fungsi yang normal
//const totalBelanjaan = null;
const hargaBelanjaan = function(harga, kuantitas){
  return harga * kuantitas;
}

const hargaBelanjaan1 = hargaBelanjaan(myObj[0].harga,myObj[0].kuantitas);
const hargaBelanjaan2 = hargaBelanjaan(myObj[1].harga,myObj[1].kuantitas);
const hargaBelanjaan3 = hargaBelanjaan(myObj[2].harga,myObj[2].kuantitas);

let totalBelanjaan = () => {
    return hargaBelanjaan1 + hargaBelanjaan2 + hargaBelanjaan3;
}
// ! JANGAN DIMODIFIKASI
const main = () => {
  console.log("Selamat datang customer");

  console.log("Belanjaan Anda adalah:");
  console.log(listBelanjaan?.(dataBelanjaan)?.join("\n"));
  console.log(
    "\nTotal Belanjaan Anda adalah Rp. " + totalBelanjaan?.(dataBelanjaan)
  );
};

main();

module.exports = {
  dataBelanjaan,
  listBelanjaan,
  totalBelanjaan,
};

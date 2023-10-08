let mobil1 = {
  merek: "Toyota",
  model: "Camry",
  tahun: 2020,
  harga: 250000000,
  tersedia: true,
};

console.log(" ");

let mobil2 = {
  merek: "Honda",
  model: "Civic",
  tahun: 2021,
  harga: 280000000,
  tersedia: false,
};

let mobil3 = {
  merek: "Mazda",
  model: "3 Hatchabck",
  tahun: 2023,
  harga: 560000000,
  tersedia: true,
};

function tampilkanMobil(mobil) {
  console.log(" ");
  console.log("Mobil: " + mobil.merek + " " + mobil.model);
  console.log("Tahun: " + mobil.tahun);
  console.log("Harga: Rp " + mobil.harga.toLocaleString());
  if (mobil.tersedia) {
    console.log("Status: Tersedia");
  } else {
    console.log("Status: Tidak Tersedia");
  }
}

function ubahStatusKetersediaan(mobil, status) {
  switch (status) {
    case "tersedia":
      mobil.tersedia = true;
      console.log("Status ketersediaan mobil diubah menjadi tersedia.");
      break;
    case "tidakTersedia":
      mobil.tersedia = false;
      console.log("Status ketersediaan mobil diubah menjadi tidak tersedia.");
      break;
    default:
      console.log("Status tidak valid.");
  }
}

let showroomMobil = [mobil1, mobil2, mobil3];

console.log("------------------Informasi Mobil di Showroom----------------");
for (let i = 0; i < showroomMobil.length; i++) {
  tampilkanMobil(showroomMobil[i]);
}

console.log("\n--------------------Mobil yang Tersedia---------------------");
let j = 0;
while (j < showroomMobil.length) {
  if (showroomMobil[j].tersedia) {
    tampilkanMobil(showroomMobil[j]);
  }
  j++;
}

console.log("\n-------------Mengubah Status Ketersediaan Mobil-------------\n");
let k = 0;
do {
  ubahStatusKetersediaan(showroomMobil[k], "tersedia");
  k++;
} while (k < showroomMobil.length);

console.log(
  "\n-----------Cek Ketersediaan Mobil Setelah Diubah--------------\n"
);
let adaMobilTersedia = false;
for (let l = 0; l < showroomMobil.length; l++) {
  if (showroomMobil[l].tersedia) {
    adaMobilTersedia = true;
    break;
  }
}

if (adaMobilTersedia) {
  for (let m = 0; m < showroomMobil.length; m++) {
    if (showroomMobil[m].tersedia) {
      tampilkanMobil(showroomMobil[m]);
    }
  }
}
console.log("\n");

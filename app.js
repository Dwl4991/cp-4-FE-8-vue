const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      name: "Produk Buah Segar",
      products: [
        {
          nama: "Apel Fuji",
          harga: 10000,
          deskripsi: "Buah apel segar dan manis dari Jepang.",
          gambar:
            "https://pangarengan-bojonegara.desa.id/wp-content/uploads/2021/09/istockphoto-102723363-612x612-1.jpg",
        },
        {
          nama: "Jeruk Mandarin",
          harga: 8000,
          deskripsi: "Jeruk manis tanpa biji, cocok untuk bekal anak.",
          gambar:
            "https://media.istockphoto.com/id/185284489/id/foto/jeruk.jpg?s=612x612&w=is&k=20&c=WwKRsTvYL08OMx_fIbZ601MUN2ioc7gAuf95zJKoI-o=",
        },
        {
          nama: "Pisang Raja",
          harga: 12000,
          deskripsi: "Pisang legit dan harum, cocok untuk olahan.",
          gambar:
            "https://asset.kompas.com/crops/da6RR_uK9LBlTJQZpWbQjE8RQaA=/0x0:780x390/750x500/data/photo/2023/02/21/63f45138b3bc4.jpg",
        },
        {
          nama: "Mangga Harum Manis",
          harga: 15000,
          deskripsi: "Mangga lokal manis menyegarkan.",
          gambar:
            "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//96/MTA-20895615/mangga_harum_manis_full01.jpg",
        },
        {
          nama: "Semangka Tanpa Biji",
          harga: 9000,
          deskripsi: "Semangka segar, cocok untuk cuaca panas.",
          gambar:
            "https://cdn.popmama.com/content-images/post/20201221/semangka-freepikcom-d0b4a39d5197e7885e09d9c6e4aa0f2c.jpg",
        },
      ],
    };
  },
});

const vm = app.mount("#app");

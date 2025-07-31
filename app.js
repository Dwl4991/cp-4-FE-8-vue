const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      name: "Vue.js",
      product: {
        nama: "buah apel",
        harga: 10000,
        deskripsi: "Buah apel segar dan manis",
        gambar: "https://www.istockphoto.com/id/foto-foto/apel",
      },
    };
  },
});

const vm = app.mount("#app");

const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  devServer: {
    proxy: "https://localhost:7257/api/ToDo",
  },
  transpileDependencies: ["vuetify"],
});

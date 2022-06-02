import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        bright: '#D1D7E0',
        primary: '#802BB1',
        primary_light: '#b07dd4',
        secondary: '#564F6F',
        accent: '#2D283E',
      },
    },
  },
});

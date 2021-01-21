import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
import colors from "vuetify/lib/util/colors";
Vue.use(Vuetify);

export default new Vuetify({

  theme: {
    dark: true,
    themes: {
      dark: {
        primary: colors.orange.darken4,
        secondary: colors.orange.lighten1,
        accent: colors.orange.darken4,
        error: colors.orange.lighten2,
        info: colors.blue.lighten4,
        success: colors.lime.lighten2,
        warning: colors.red.darken4
      },
    },
  },
});

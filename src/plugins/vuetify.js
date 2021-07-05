import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);

const theme = {
  primary : colors.deepOrange
}

export default new Vuetify({
  breakpoint: {
    // 모바일 사이즈 설정 기본은 => 1264
    mobileBreakpoint: 'xs',
    // xs sm md lg 데이터값 세팅
    thresholds: {
      xs: 360
    }
  },
  theme: {
    dark: false,
    default: 'light',
    disable: false,
    options: {
      cspNonce: undefined,
      customProperties: undefined,
      minifyTheme: undefined,
      themeCache: undefined,
    },
    themes: {
      light: theme,
      dark: {
        primary: '#2196F3',
        secondary: '#424242',
        accent: '#FF4081',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FB8C00',
      },
    },
  },
});

import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
  breakpoint: {
    // 모바일 사이즈 설정 기본은 => 1264
    mobileBreakpoint: 'xs',
    // xs sm md lg 데이터값 세팅
    thresholds: {
      xs: 360
    }
  }
});

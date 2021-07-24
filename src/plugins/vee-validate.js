import Vue from 'vue'
import {extend, ValidationObserver, ValidationProvider} from 'vee-validate'
import { max, required, numeric, digits, email, confirmed } from 'vee-validate/dist/rules';

extend('max', {...max, message: '{_field_} {length}자를 초과할 수 없습니다.'})
extend('required', { ...required, message: '{_field_} 필수입니다.' })
extend('numeric', { ...numeric, message: '{_field_} 숫자만 가능합니다.' })
extend('digits', { ...digits, message: '{_field_} {length} 자리까지 가능합니다.' })
extend('email', { ...email, message: '잘못 입력된 이메일 주소형식입니다.' })
extend('confirmed', { ...confirmed, message: '비밀번호와 비밀번호 확인이 일치하지 않습니다.' })

// extend('max', (value, params) => {
//   const limit = params[0];
//   if(value && value.length > 20) {
//     return params[1]+' ' +limit +'자를 초과할 수 없습니다.';
//   }
//   return true
// })
Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)

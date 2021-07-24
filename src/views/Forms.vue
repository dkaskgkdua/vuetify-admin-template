<template>
  <v-container fluid>
    <v-card>
      <v-card-title>
        Form Validation
      </v-card-title>
      <v-card-text>
        <validation-observer
          ref="observer"
          v-slot="{ invalid }"
        >
          {{ invalid }}
          <v-form @submit.prevent="submit">
            <validation-provider
              v-slot="{ errors }"
              name="이름은"
              rules="required|max:20"
            >
              <v-text-field
                v-model="name"
                label="Name"
                :counter="20"
                :error-messages="errors"
              />
            </validation-provider>
            <validation-provider
              v-slot="{ errors }"
              name="핸드폰번호는"
              :rules="{
                required: true,
                numeric: true,
                digits: 11
              }"
            >
              <v-text-field
                v-model="phoneNumber"
                label="PhoneNumber"
                :counter="11"
                :error-messages="errors"
              />
            </validation-provider>
            <validation-provider
              v-slot="{ errors }"
              name="이메일은"
              :rules="{
                required: true,
                email: true
              }"
            >
              <v-text-field
                v-model="email"
                label="E-Mail"
                :error-messages="errors"
              />
            </validation-provider>
            <validation-provider
              v-slot="{ errors }"
              name="Select은"
              :rules="{
                required: true,
              }"
            >
              <v-select
                v-model="select"
                label="Select"
                :items="items"
                :error-messages="errors"
              ></v-select>
            </validation-provider>
            <validation-provider
              v-slot="{ errors }"
              name="Checkbox는"
              :rules="{
                required: true,
              }"
            >
              <v-checkbox
                v-model="checkbox"
                label="Checkbox"
                value="1"
                :error-messages="errors"
              />
            </validation-provider>
            <v-btn
              class="mr-4"
              type="submit"
              color="primary"
              :disabled="invalid"
            >
              Submit
            </v-btn>
            <v-btn
              @click="clear"
            >
              Clear
            </v-btn>


          </v-form>
        </validation-observer>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import {extend, ValidationObserver, ValidationProvider} from 'vee-validate'
import { max, required, numeric, digits, email } from 'vee-validate/dist/rules';
extend('max', {
  ...max,
  message: '{_field_} {length}자를 초과할 수 없습니다.'
})
extend('required', { ...required, message: '{_field_} 필수입니다.' })
extend('numeric', { ...numeric, message: '{_field_} 숫자만 가능합니다.' })
extend('digits', { ...digits, message: '{_field_} {length} 자리까지 가능합니다.' })
extend('email', { ...email, message: '잘못 입력된 이메일 주소형식입니다.' })
// extend('max', (value, params) => {
//   const limit = params[0];
//   if(value && value.length > 20) {
//     return params[1]+' ' +limit +'자를 초과할 수 없습니다.';
//   }
//   return true
// })
export default {
  name: "Dashboard",
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data: () => ({
    name: null,
    phoneNumber: null,
    email: null,
    select: null,
    checkbox: null,
    items: [
      {
        text: '아이템1',
        value: 1
      },
      {
        text: '아이템2',
        value: 2
      },
      {
        text: '아이템3',
        value: 3
      },
    ]
  }),

  methods: {
    submit() {
      this.$refs.observer.validate().then(result => {
        if(result) {
          alert('양식 제출')
        }else {

        }
      })
    },
    clear() {
      this.name= null;
      this.phoneNumber= null;
      this.email= null;
      this.select= null;
      this.checkbox= null;
    }
  },
}
</script>

<style scoped>

</style>

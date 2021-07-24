<template>
  <v-container fluid>
    <v-card>
      <v-card-title>
        Form Validation
      </v-card-title>
      <v-card-text>
        <validation-observer>
          <v-form>
            <validation-provider
              v-slot="{ errors }"
              name="이름은"
              rules="max:20"
            >
              <v-text-field
                v-model="name"
                label="Name"
                :counter="20"
                :error-messages="errors"
              />
            </validation-provider>
            <validation-provider>
              <v-text-field
                label="PhoneNumber"
              />
            </validation-provider>
            <validation-provider>
              <v-text-field
                label="E-Mail"
              />
            </validation-provider>
            <validation-provider>
              <v-select
                label="Select"
                :items="items"
              ></v-select>
            </validation-provider>
            <validation-provider>
              <v-checkbox
                label="Checkbox"
                value="1"
              />
            </validation-provider>
            <v-btn
              class="mr-4"
              type="submit"
              color="primary"
            >
              Submit
            </v-btn>
            <v-btn>
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
import { max } from 'vee-validate/dist/rules';
extend('max', {
  ...max,
  message: '{_field_} {length}자를 초과할 수 없습니다.'
})
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
    name: '',
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

  },
}
</script>

<style scoped>

</style>

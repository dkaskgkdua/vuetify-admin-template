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
              />
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
export default {
  name: "Dashboard",
  components: {
  },
  data: () => ({
    age: null,
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

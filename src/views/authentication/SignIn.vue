<template>
  <v-container class="grey fill-height">
    <v-row justify="center">
      <v-col cols="auto">
        <v-card
          width="460"
        >
          <v-card-text class="text-center px-12 py-16">
            <validation-observer
              ref="observer"
              v-slot="{ invalid }"
            >
              <v-form @submit.prevent="signIn">
                <div class="text-h4 font-weight-bold mb-10">
                  로그인
                </div>
                <validation-provider
                  v-slot="{ errors }"
                  name="이메일은"
                  :rules="{
                    required:true,
                    email: true,
                  }"
                >
                  <v-text-field
                    v-model="email"
                    label="이메일"
                    clearable
                    prepend-icon="mdi-email"
                    :error-messages="errors"
                  />
                </validation-provider>
                <validation-provider
                  v-slot="{ errors }"
                  name="비밀번호는"
                  :rules="{
                    required:true,
                  }"
                >
                  <v-text-field
                    v-model="password"
                    label="비밀번호"
                    clearable
                    prepend-icon="mdi-lock-outline"
                    :error-messages="errors"
                  />
                </validation-provider>
                <v-btn
                  block
                  rounded
                  x-large
                  color="primary"
                  class="mt-6"
                  :disabled="invalid"
                  type="submit"
                >
                  로그인
                </v-btn>
                <div class="mt-5">
                  <router-link
                    class="text-decoration-none"
                    to="/"
                  >
                    홈
                  </router-link> |
                  <router-link
                    class="text-decoration-none"
                    to="/authentication/sign-up"
                  >
                    회원가입
                  </router-link>
                </div>
              </v-form>
            </validation-observer>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    Hello
  </v-container>
</template>

<script>
export default {
  name: "SignIn",
  data: () => ({
    email: null,
    password: null,
  }),
  methods: {
    async signIn() {
      const result = await this.$refs.observer.validate()
      if(result) {
        alert('로그인 프로세스~!')
      }
    }
  }
}
</script>

<style scoped>

</style>

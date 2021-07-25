<template>
  <v-container fluid>
    <v-card class="mt-5">
      <v-card-text>
        <app-text-field
          v-model="name"
          label="이름"
          placeholder="여기에 입력해주세요"
          :error-messages="['error 메시지']"
          :counter="10"
        />
        <app-text-field
          v-model="age"
          label="나이"
          placeholder="여기에 입력해주세요"
          :error-messages="['error 메시지']"
          :counter="10"
        />
        <app-text-field
          v-model="nickname"
          label="닉네임"
          placeholder="여기에 입력해주세요"
          :error-messages="['error 메시지']"
          :counter="10"
        />
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import AppTextField from '@/components/app/TextField'
export default {
  name: "Dashboard",
  components: {
    AppTextField
  },
  data: () => ({
    age: null,
    name: null,
    nickname: null,
  }),

  methods: {

  },
}
</script>

<style scoped>

</style>

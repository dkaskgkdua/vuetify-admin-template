<template>
  <label>
    {{ label }}
    <v-text-field
      :value="value"
      :outlined="outlined"
      :dense="dense"
      v-bind="$attrs"
      v-on="$listeners"
    />
  </label>
</template>

<script>
/**
 * - inheritAttrs
 * props로 정의도지 않은 부모 컴포넌트로 받은 속성은, 기본적으로 자식 컴포넌트의 루트 엘리먼트에 적용.
 * false로 설정하면 기본적인 동작이 중지됨
 *
 * - vm.$attrs
 * props로 정의되지 않은 부모 컴포넌트의 속성을 받는다.(class와 style은 제외됨)
 * v-bind="$attrs"를 통해 내부컴포넌트로 전달할 수 있다.
 *
 * - vm.$listeners
 * 부모 컴포넌트에서 받은 이벤트(v-on)을 받는다.
 * v-on="$listeners"를 통해 내부 컴포넌트로 전달 가능능
*/
export default {
  name: "AppTextField",
  inheritAttrs: false,
  props: {
    dense: {
      type: Boolean,
      default: true
    },
    outlined: {
      type: Boolean,
      default: true,
    },
    value: {
      type: String,
      default: null,
    },
    label: {
      type: String,
      default: null,
    },
  }
}
</script>

<style scoped>

</style>

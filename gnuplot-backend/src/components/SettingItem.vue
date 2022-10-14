<template>
  <div v-if="settingInput.type === 'base'" class="input-group mb-3">
    <base-input v-model:setting="settingInput"
                v-model="modelValue"
                @updateInput='updateInput'></base-input>
  </div>


</template>

<script>
export default {
  name: "setting-item",
  props: {
    settingInput: {
      required: true,
    },
    modelValue: {
      type: String,
    }
  },
  methods: {
    updateInput(modelValue){
      this.$emit('update:modelValue', modelValue)
    }
  }
}
</script>

<style scoped>

</style>
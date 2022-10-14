<template>
  <div class="input-group mb-3">
    <label class="input-group-text" for="inputGroupSelect01">Options</label>
    <select class="form-select" id="inputGroupSelect01" v-model="modelValue" @change="updateInput">
      <option selected value="">Choose...</option>
      <option v-for="option in setting.options"
              :key="option.value" :value="option.value"
      >
        {{ option.title }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: "options-input",
  props: {
    setting: {
      required: true,
    },
    modelValue: {
      type: String,
    }
  },
  methods: {
    updateInput(event) {
      this.$emit('update:modelValue', event.target.value)
    }
  }
}
</script>

<style scoped>

</style>
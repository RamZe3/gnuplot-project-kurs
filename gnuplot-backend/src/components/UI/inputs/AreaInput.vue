<template>
  <div class="input-group">
    <span class="input-group-text">{{ setting.title }}</span>
    <textarea :value="modelValue"
              :placeholder="setting.placeholder"
              @input="updateInput"
              class="form-control" aria-label="With textarea"></textarea>
  </div>
</template>

<script>
export default {
  name: "area-input",
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
      //this.$emit('update:modelValue', event.target.value)
      this.$emit('updateInput', event.target.value)
    }
  }
}
</script>

<style scoped>

</style>
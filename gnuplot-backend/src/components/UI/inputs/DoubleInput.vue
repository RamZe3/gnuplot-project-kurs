<template>
  <div class="input-group">
    <span class="input-group-text">{{ setting.title }}</span>
    <input :value="value1"
           :placeholder="setting.placeholder1"
           @input="updateInput1"
           type="number" class="form-control"
           aria-label="Username"
           aria-describedby="basic-addon1">
    <input :value="value2"
           :placeholder="setting.placeholder2"
           @input="updateInput2"
           type="number" class="form-control"
           aria-label="Username"
           aria-describedby="basic-addon1">
  </div>
</template>

<script>
export default {
  name: "double-input",
  props: {
    setting: {
      required: true,
    },
    value1: {
      type: String
    },
    value2: {
      type: String
    },
  },
  methods: {
    updateInput1(event) {
      //this.$emit('update:value1', event.target.value)
      this.$emit('updateInput', event.target.value)
    },
    updateInput2(event) {
      //this.$emit('update:value2', event.target.value)
      this.$emit('updateInput2', event.target.value)
    }
  }
}
</script>

<style scoped>

</style>
<template>
  <div class="col-mb-3">
<!--    <small id="passwordHelp" class="text-danger">-->
<!--      Must be 8-20 characters long. nfhjdjhfdkskfdskfjds-->
<!--    </small>-->
  </div>
  <div class="input-group mb-3">
    <span class="input-group-text" id="basic-addon1">{{ setting.title }}</span>
    <input :value="modelValue"
           :placeholder="setting.placeholder"
           @input="updateInput"
           type="text" class="form-control"
           aria-label="Username"
           aria-describedby="basic-addon1">
  </div>
</template>

<script>
export default {
  name: 'base-input',
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
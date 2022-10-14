<template>
  <div class="col" v-bind:class="{ 'col-area': isArea() }">
    <div v-if="settingInput.type === 'base'" class="input-group">
      <base-input v-model:setting="settingInput"
                  v-model="modelValue"
                  @updateInput='updateInput'></base-input>
    </div>

    <div v-else-if="settingInput.type === 'double'" class="input-group">
      <double-input v-model:setting="settingInput"
                    v-model:value1="modelValue"
                    v-model:value2="modelValue2"
                    @updateInput='updateInput'
                    @updateInput2='updateInput2'></double-input>
    </div>

    <div v-else-if="settingInput.type === 'options'" class="input-group">
      <options-input v-model:setting="settingInput"
                     v-model="modelValue"
                     @updateInput='updateInput'></options-input>
    </div>

    <div v-else-if="settingInput.type === 'area'" class="input-group mb-2">
      <area-input v-model:setting="settingInput"
                     v-model="modelValue"
                     @updateInput='updateInput'></area-input>
    </div>
  </div>
</template>

<script>
//TODO mb-3 (add or not) class="input-group mb-3"
import AreaInput from "@/components/UI/inputs/AreaInput";
export default {
  name: "setting-item",
  components: {AreaInput},
  props: {
    settingInput: {
      required: true,
    },
    modelValue: {
      type: String,
    },
    modelValue2: {
      type: String,
      required: false,
    }
  },
  methods: {
    updateInput(modelValue){
      this.$emit('update:modelValue', modelValue)
    },
    updateInput2(modelValue){
      this.$emit('update:modelValue2', modelValue)
    },

    isArea(){
      if(this.settingInput.type === 'area'){
        return  true;
      }
      return false
    }
  }
}
</script>

<style scoped>

</style>
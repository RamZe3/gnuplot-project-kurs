<template>
  <h2>Gnupot Settings</h2>
  <div class="spinner-border text-primary" role="status">
    <span class="sr-only"></span>
  </div>
  <div class="row">
    <div class="col">
      <setting-item v-model:settingInput="settingInputs[0]"
                    v-model="settings.function"

      ></setting-item>
    </div>
    <div class="col">
      <div class="input-group">
        <span class="input-group-text">Range</span>
        <input type="text" aria-label="First name" class="form-control">
        <input type="text" aria-label="Last name" class="form-control">
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col">
      <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon1">Function</span>
        <input type="text" class="form-control" placeholder="sin(x)" aria-label="Username"
               aria-describedby="basic-addon1">
      </div>
    </div>
    <div class="col">
      <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon1">Function</span>
        <input type="text" class="form-control" placeholder="sin(x)" aria-label="Username"
               aria-describedby="basic-addon1">
      </div>
    </div>
    <div class="col">
      <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon1">Function</span>
        <input type="text" class="form-control" placeholder="sin(x)" aria-label="Username"
               aria-describedby="basic-addon1">
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col">
      <div class="input-group mb-3">
        <label class="input-group-text" for="inputGroupSelect01">Options</label>
        <select class="form-select" id="inputGroupSelect01">
          <option selected>Choose...</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col">
      <div class="input-group mb-3">
        <label class="input-group-text" for="inputGroupFile01">Upload</label>
        <input type="file" class="form-control" id="inputGroupFile01">
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col col-area">
      <div class="input-group">
        <span class="input-group-text">With textarea</span>
        <textarea class="form-control" aria-label="With textarea"></textarea>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col col-area">
      <div class="input-group">
        <span class="input-group-text">With textarea</span>
        <textarea class="form-control" aria-label="With textarea"></textarea>
      </div>
    </div>
  </div>
  <div class="row buttons">
    <button type="button" class="btn btn-secondary btn-lg btn-block">Plot Graphic</button>
  </div>
  <div class="row buttons">
    <button type="button" class="btn btn-secondary btn-lg btn-block">Block level button</button>
  </div>
  <base-input v-model:setting="settingInputs[0]"
              v-model="settings.function"></base-input>
  <double-input v-model:setting="settingInputs[1]"
                v-model:value1="settings.Range1"
                v-model:value2="settings.Range2"></double-input>
  <options-input v-model:setting="settingInputs[2]"
                 v-model="settings.Point"></options-input>
  <area-input v-model:setting="settingInputs[3]"
              v-model="settings.Code"></area-input>
</template>

<script>
import SettingItem from "@/components/SettingItem";

export default {
  name: "setting-list",
  components: {SettingItem},
  data() {
    return {
      settings: {
        function: '',
        Range1: '',
        Range2: '',
        Point: '',
        Code: '',
      },
      settingInputs: [
        {id: 1, type: 'base', title: 'Function', placeholder: 'sin(x)'},
        {id: 2, type: 'double', title: 'Range', placeholder1: '0', placeholder2: '3'},
        {
          id: 3, type: 'options', title: 'Function', options: [
            {title: 'option1', value: '1'},
            {title: 'option2', value: '2'}
          ]
        },
        {id: 2, type: 'area', title: 'textArea', placeholder: 'Write commands here'},
      ]
    }
  }
}
</script>

<style scoped>

</style>
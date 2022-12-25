<template>
  <h2>Gnupot Settings</h2>
  <base-loading></base-loading>
  <div class="alert alert-danger" role="alert">
    This is a danger alert—check it out!
  </div>
  <div class="alert alert-danger" role="alert">
    This is a danger alert—check it out!
  </div>
  <div class="row">
    <setting-item v-model:settingInput="settingInputs[0]"
                  v-model="settings.function"
    ></setting-item>

    <setting-item v-model:settingInput="settingInputs[1]"
                  v-model="settings.Range1"
                  v-model:modelValue2="settings.Range2"></setting-item>
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
    <setting-item v-model:settingInput="settingInputs[2]"
                  v-model="settings.Point"
    ></setting-item>
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
    <setting-item v-model:settingInput="settingInputs[3]"
                  v-model="settings.Code"
    ></setting-item>
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
  <h1>{{this.$store.getters.SETTINGS}}</h1>
</template>

<script>
import SettingItem from "@/components/SettingItem";
import {useSettings} from "@/hooks/useSettings";
import {useSettingInputs} from "@/hooks/useSettingInputs";
import {useUser} from "@/hooks/useUser";

export default {
  name: "setting-list",
  components: {SettingItem},
  //data() {
  //  return {
  //    settings: {
  //      function: '',
  //      Range1: '',
  //      Range2: '',
  //      Point: '',
  //      Code: '',
  //    },
  //    settingInputs: [
  //      {id: 1, type: 'base', title: 'Function', placeholder: 'sin(x)'},
  //      {id: 2, type: 'double', title: 'Range', placeholder1: '0', placeholder2: '3'},
  //      {
  //        id: 3, type: 'options', title: 'Function', options: [
  //          {title: 'option1', value: '1'},
  //          {title: 'option2', value: '2'}
  //        ]
  //      },
  //      {id: 2, type: 'area', title: 'textArea', placeholder: 'Write commands here'},
  //    ]
  //  }
  //},
  setup(props) {
    const {settings, loadSettings, saveSettings } = useSettings()
    const {settingInputs} = useSettingInputs()
    //const {user, login, signOut} = useUser()
    return {
      settings, saveSettings, loadSettings,
      settingInputs,
      //user, login, signOut
    }
  },
  mounted() {
    //this.$store.commit("setSettings", {
    //        function: '12345',
    //        Range1: '',
    //        Range2: '',
    //        Point: '',
    //        Code: '',
    //      })
    this.loadSettings(this.$store.getters.SETTINGS)
    //this.signOut()
  }
}
//console.log(this.$store.getters.SETTINGS)
</script>

<style scoped>

</style>
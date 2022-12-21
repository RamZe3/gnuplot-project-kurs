<template>
  <h2>Gnupot Templates</h2>
  <h1 v-if="!ISAUTH">You not login!</h1>
  <table class="table" v-else-if="templates.length > 0">
    <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Date</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="(template, index) in templates">
      <th scope="row">{{index+1}}</th>
      <td><router-link to="/" @click="this.$store.commit('setSettings', template)">{{template.name}}</router-link></td>
      <td>Otto</td>
    </tr>
    </tbody>
  </table>
  <h1 v-else-if="!this.$store.getters.ISLOADING">No Templates in database!</h1>
</template>

<script>
import {useTemplates} from "@/hooks/useTemplates";
import {useSettings} from "@/hooks/useSettings";

export default {
  name: "template-list",
  //TODO логика загрузки шаблона
  //mounted() {
  //  this.$store.commit("setSettings", {
  //    function: '12345',
  //    Range1: '',
  //    Range2: '',
  //    Point: '',
  //    Code: '',
  //  })
  //}
  computed: {
    ISAUTH () {
      return this.$store.getters.ISAUTH
      // Or return basket.getters.fruitsCount
      // (depends on your design decisions).
    }
  },
  setup(props){
    const {templates, loadTemplates} = useTemplates()
    const {loadSettings} = useSettings()
    return { templates, loadTemplates,
              loadSettings}
  },
  mounted() {
    this.loadTemplates(this.$store.getters.USERID)
  },
  watch: {
    ISAUTH: function () {
      this.loadTemplates(this.$store.getters.USERID)
    }
  }
}
</script>
<style scoped>

</style>
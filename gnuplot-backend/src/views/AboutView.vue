<template>
  <base-loading></base-loading>
  <template-list></template-list>
</template>
<script>
import {useTemplates} from "@/hooks/useTemplates";
import TemplateList from "@/components/TemplateList";

export default {
  components: {TemplateList},
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
  setup(props){
    const {templates, loadTemplates} = useTemplates()
    return { templates, loadTemplates}
  },
  mounted() {
    //this.$store.dispatch("checkAuth")
    //this.loadTemplates(this.$store.getters.USERID)
  }
}

</script>
<style scoped>
</style>

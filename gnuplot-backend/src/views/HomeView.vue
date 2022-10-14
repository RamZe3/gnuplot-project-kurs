<template>
  <h2>Gnupot Result</h2>
  <img src="../assets/testiii.png" class="img-fluid" alt="Logo">

  <setting-list></setting-list>
</template>

<script>
// @ is an alias to /src


import SettingList from "@/components/SettingList";

export default {
  name: 'HomeView',
  components: {SettingList},
  data() {
    return {

    }
  }
}
</script>

<style>
.col-area {
  margin-top: 10px;
  margin-bottom: 10px;
}

.buttons {
  padding-top: 20px;
}
</style>

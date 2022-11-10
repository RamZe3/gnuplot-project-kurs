import { createStore } from 'vuex'
import {settingsModule} from "@/store/settingsModule";

export default createStore({
  modules: {
    settings: settingsModule
  }
})

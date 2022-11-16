import { createStore } from 'vuex'
import {settingsModule} from "@/store/settingsModule";
import {globalModule} from "@/store/globalModule";

export default createStore({
  modules: {
    settings: settingsModule,
    globalM: globalModule
  }
})

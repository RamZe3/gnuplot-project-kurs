import {ref, onMounted, computed} from "vue";
import {useCookies} from "vue3-cookies";
import axios from "axios";
import {useStore} from "vuex";

export function useTemplates(){
    const templates = ref([])
    const store = useStore()

    const loadTemplates = async (userid) => {
        console.log(userid)
        store.commit("setLoading", true)
        const response = await axios.get('http://localhost:3000/templates/?userId=' + userid);
        templates.value = response.data
        store.commit("setLoading", false)
        console.log("шаблоны")
    }

    //const getTemplates = () => {
    //    for (let i = 0; i < templates.value.length; i++) {
    //        templates.value[i].number = i
    //    }
    //    return templates.value
    //}

    const saveSettings = async () => {
        //settings.value = {
        //    function: '123',
        //    Range1: '',
        //    Range2: '',
        //    Point: '',
        //    Code: '',
        //}
    }

    //onMounted(loadTemplates)
    //computed(getTemplates)

    return {
        templates, loadTemplates,
    }
}
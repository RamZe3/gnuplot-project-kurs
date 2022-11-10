import {onMounted, onBeforeMount, ref} from "vue";

export function useSettings(){
    const settings = ref(
        {
        function: '',
        Range1: '',
        Range2: '',
        Point: '',
        Code: '',
    })

    //TODO сделать подгрузку и выгрузку
    //const loadSettings = async (settings) => {
    //    //console.log(this.$store.getters.SETTINGS)
    //    //settings.value = await this.$store.getters.SETTINGS
    //    //store.s
    //    //settings.value = settingsValue
    //}

    const loadSettings =  (settingsValue) => {
        settings.value = settingsValue
    }

    const saveSettings = async () => {
        //settings.value = {
        //    function: '123',
        //    Range1: '',
        //    Range2: '',
        //    Point: '',
        //    Code: '',
        //}
    }

    //onMounted(loadSettings)

    return {
        settings, loadSettings, saveSettings
    }
}
//TODO не используется
export const settingsModule = {
    state: () => ({
        settings: {
            function: '',
            Range1: '',
            Range2: '',
            Point: '',
            Code: '',
        },
    }),
    getters: {
        SETTINGS: state => {
            return state.settings
        }
        //computed свойства
        //TODO доделать (мб фильтер)
    },
    mutations: {
        setSettings(state, settings){
            state.settings = settings
        }
    },
    actions:{
        //TODO доделать получение из backend
        getSettings: async (context, settings) => {
            //let {data} = await Axios.get('http://yourwebsite.com/api/setting');
            //context.commit('setSettings', settings);
            const settings1 = {
                function: 'test',
                Range1: '',
                Range2: '',
                Point: '',
                Code: '',
            };
            context.commit('setSettings', settings1);
        },
        saveSettings: async (context, settings) => {
            //let {data} = await Axios.post('http://yourwebsite.com/api/setting');
            //TODO
            //context.commit('setSettings', settings);
        },
    },
    //namespaced: true
}
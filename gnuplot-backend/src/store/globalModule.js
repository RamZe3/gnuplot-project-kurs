//TODO не используется
export const globalModule = {
    state: () => ({
        isAuth: false,
        userName: null,
        isLoading: false,
        isActiveError: false,
        errorMessage: null
    }),
    //TODO
    getters: {
        ISAUTH: state => {
            return state.isAuth
        },
        ISLOADING: state => {
            return state.isLoading
        },
        ISACTIVEERROR: state => {
            return state.isActiveError
        },
        ERRORMESSAGE: state => {
            return state.errorMessage
        },
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
    namespaced: true
}
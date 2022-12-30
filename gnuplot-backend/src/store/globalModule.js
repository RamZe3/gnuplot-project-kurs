//TODO не используется
import {useCookies} from "vue3-cookies";
import axios from 'axios'
import {useStore} from "vuex";
import {API_URL, USERS_API_URL} from "@/common/API";

export const globalModule = {
    state: () => ({
        isAuth: false,
        userID: null,
        login: '',
        isLoading: 0,
        isActiveError: false,
        errorMessage: null
    }),
    //TODO
    getters: {
        ISAUTH: state => {
            return state.isAuth
        },
        LOGIN: state => {
            return state.login
        },
        ISLOADING: state => {
            //console.log(state.isLoading.length > 0)
            return state.isLoading !== 0
            //return state.isLoading
        },
        ISACTIVEERROR: state => {
            return state.isActiveError
        },
        ERRORMESSAGE: state => {
            return state.errorMessage
        },
        USERID: state => {
            return state.userID
        }
    },
    mutations: {
        setIsAuth(state, isAuth){
            state.isAuth = isAuth;
        },
        setUserID(state, userID){
            state.userID = userID;
        },
        setLogin(state, login){
            state.login = login;
        },
        setSettings(state, settings){
            state.settings = settings
        },
        setLoading(state, bool){
            if (bool){
                state.isLoading++
            }
            else {
                state.isLoading--
            }
            console.log(state.isLoading + "LOAD")
            //state.isLoading = bool;
        },
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

        checkAuth: async (context) => {
            const store = useStore()
            store.commit("setLoading", true)
            const cookies = useCookies();
            const login = cookies.cookies.get("Login")
            const password = cookies.cookies.get("Password")
            const response = await axios.get(API_URL + USERS_API_URL + '/?login=' + login + "&password=" + password)
                //.then(() => { store.commit("setLoading", false)});
            if (response.data.length === 1){
                context.commit("setUserID", response.data[0].id)
                context.commit("setIsAuth", true)
                context.commit("setLogin", login)
                //setTimeout(context.commit("setUserID", response.data[0].id), 5000)
                //context.commit("setIsAuth", true)
            }
            else {
                context.commit("setIsAuth", false)
            }
            store.commit("setLoading", false)
        },
    },
    //namespaced: true
}
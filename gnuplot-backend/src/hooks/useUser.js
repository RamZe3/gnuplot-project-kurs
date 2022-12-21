import {ref} from "vue";
import {useCookies} from "vue3-cookies";
import axios from 'axios'
import {useStore} from "vuex";

function newGuid() {
    return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    )}

export function useUser() {
    const user = ref(
        {
            id: '',
            Login: '',
            Password: '',
        })
    const cookies = useCookies();
    const store = useStore()

    const login = async () => {
        const response = await axios.get('http://localhost:3000/users/?login=' + user.value.Login
            + "&password=" + user.value.Password);
        if (response.data.length === 1) {
            localStorage.setItem("userID", response.data[0].id)
            store.commit("setIsAuth", true)
            cookies.cookies.set("Login", user.value.Login)
            cookies.cookies.set("Password", user.value.Password)
        } else {
            //TODO
            //store.commit("setIsAuth", false)
        }
    }

    const register = async () => {
        const response = await axios.get('http://localhost:3000/users/?login=' + user.value.Login);
        if (response.data.length === 0) {
            localStorage.setItem("userID", user.value.id)
            store.commit("setIsAuth", true)
            const newUser = {
                id: newGuid(),
                login: user.value.Login,
                password: user.value.Password
            }
            await axios.post('http://localhost:3000/users/', newUser);
            cookies.cookies.set("Login", user.value.Login)
            cookies.cookies.set("Password", user.value.Password)
        } else {
            //TODO
            //store.commit("setIsAuth", false)
        }
    }

    const signOut = () => {
        localStorage.removeItem("userID")
        cookies.cookies.remove("Login")
        cookies.cookies.remove("Password")
        store.commit("setIsAuth", false)

    }

    //computed(login)

    return {
        user, login, register, signOut
    }
}
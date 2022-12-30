import {ref} from "vue";
import {useCookies} from "vue3-cookies";
import axios from 'axios'
import {useStore} from "vuex";
import {getHash, newGuid} from "@/common/GuidLogic";
import {API_URL, USERS_API_URL} from "@/common/API";

//TODO чекаус логин не изменияется при регистрации
export function useUser() {
    const user = ref(
        {
            id: '',
            login: '',
            email: '',
            password: '',
        })
    const cookies = useCookies();
    const store = useStore()

    const login = async () => {
        //TODO логин с мылом
        const response = await axios.get(API_URL + USERS_API_URL +'/?login=' + user.value.login
            + "&password=" + getHash(user.value.password));
        if (response.data.length === 1) {
            localStorage.setItem("userID", response.data[0].id)
            store.commit("setIsAuth", true)
            cookies.cookies.set("Login", user.value.login)
            cookies.cookies.set("Password", getHash(user.value.password))
        } else {
            //TODO
            //store.commit("setIsAuth", false)
        }
    }

    const register = async () => {
        const response = await axios.get(API_URL + USERS_API_URL +'/?login=' + user.value.login);
        if (response.data.length === 0) {
            localStorage.setItem("userID", user.value.id)
            store.commit("setIsAuth", true)
            const newUser = {
                id: newGuid(),
                login: user.value.login,
                password: getHash(user.value.password),
                email: user.value.email
            }
            await axios.post(API_URL + USERS_API_URL, newUser);
            cookies.cookies.set("Login", user.value.login)
            cookies.cookies.set("Password", getHash(user.value.password))
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
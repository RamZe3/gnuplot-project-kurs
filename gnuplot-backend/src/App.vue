<template>
  <header class="header">
    <nav class="navbar navbar-expand-lg bg-light">
      <div class="container-fluid">
        <router-link style="color: #2c3e50" to="/" class="navbar-brand">Gnuplotter</router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link :active-class="active" class="nav-link" aria-current="page" to="/">Главная</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :active-class="active" to="/about" :class="{disabled: !this.$store.getters.ISAUTH}">Шаблоны</router-link>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                 aria-expanded="false">
                Профиль
              </a>
              <ul class="dropdown-menu">
                <!--TODO-->
                <li><a class="dropdown-item" v-if="this.$store.getters.ISAUTH">Привет, {{this.$store.getters.LOGIN}}</a></li>
                <li><button class="dropdown-item" @click="modalAttr.visible = true" v-if="!this.$store.getters.ISAUTH">Войти</button></li>
                <li><button class="dropdown-item" @click="modalAttr1.visible = true" v-if="!this.$store.getters.ISAUTH">Зарегистрироваться</button></li>
                <li>
                  <hr v-if="this.$store.getters.ISAUTH" class="dropdown-divider">
                </li>
                <li><button v-if="this.$store.getters.ISAUTH" class="dropdown-item" @click="signOut">Выйти</button></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
  <main class="content ">
    <!-- Button trigger modal -->
    <!--<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#Login">
      Launch demo modal
    </button>-->

    <!-- Modal -->
    <!--<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
          </div>
          <div class="modal-body">
            askldasdlk
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Закрыть</button>
            <button type="button" class="btn btn-primary">Войти</button>
          </div>
        </div>
      </div>
    </div>-->

    <router-view/>
  </main>
  <footer class="footer">
    <div class="footer-div d-flex flex-column  justify-content-between border-top">
      <p>© 2022 Company, Inc. All rights reserved.</p>
    </div>
  </footer>

  <!-- modals -->
  <base-modal v-if="!modalAttr1.visible"
      v-model:modalAttr="modalAttr"
              v-bind:id="modalAttr.id"
              @modalMethod="loginV"
  >
    <TransitionGroup name="list" tag="div">
    <div v-for="error of v$.loginModel.$errors" :key="error.$property" class="alert alert-danger" role="alert">
      <b>{{ error.$property }}</b> : {{ error.$message }}
    </div>
    </TransitionGroup>
    <div class="input-group mb-3">
      <span class="input-group-text" id="basic-addon1">Логин</span>
      <input v-model="user.login"
             placeholder="Логин..."
             type="text" class="form-control"
             aria-label="Username"
             aria-describedby="basic-addon1">
    </div>

    <div class="input-group mb-3">
      <span class="input-group-text" id="basic-addon1">Пароль</span>
      <input v-model="user.password"
             placeholder="Пароль..."
             type="password" class="form-control"
             aria-label="Username"
             aria-describedby="basic-addon1">
    </div>
  </base-modal>

  <base-modal v-if="!modalAttr.visible" v-model:modalAttr="modalAttr1"
              v-bind:id="modalAttr1.id"
              @modalMethod="registerV"
  >
    <TransitionGroup name="list" tag="div">
      <div v-for="error of v$.registerModel.$errors" :key="error.$property" class="alert alert-danger" role="alert">
        <b>{{ error.$property }}</b> : {{ error.$message }}
      </div>
    </TransitionGroup>

    <div class="input-group mb-3">
      <span class="input-group-text" id="basic-addon1">Email</span>
      <input v-model="user.email"
             placeholder="Email..."
             type="mail" class="form-control"
             aria-label="Username"
             aria-describedby="basic-addon1">
    </div>

    <div class="input-group mb-3">
      <span class="input-group-text" id="basic-addon1">Логин</span>
      <input v-model="user.login"
             placeholder="Логин..."
             type="text" class="form-control"
             aria-label="Username"
             aria-describedby="basic-addon1">
    </div>

    <div class="input-group mb-3">
      <span class="input-group-text" id="basic-addon1">Пароль</span>
      <input v-model="user.password"
             placeholder="Пароль..."
             type="password" class="form-control"
             aria-label="Username"
             aria-describedby="basic-addon1">
    </div>

    <div class="input-group mb-3">
      <span class="input-group-text" id="basic-addon1">Пароль еще раз</span>
      <input v-model="registerModel.confirmPassword"
             placeholder="Подтвердите Пароль..."
             type="password" class="form-control"
             aria-label="Username"
             aria-describedby="basic-addon1">
    </div>
  </base-modal>

</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  overflow: hidden;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
}

.header{
  min-width: 100%;
}

.footer-div{
  padding-top: 1.5rem!important;
  margin-top: 1.5rem!important;
}

.footer{
  margin-top: auto;
  min-width: 100%;
}

.content{
  width: 60%;
  justify-content: center;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

</style>
<script>
//import BaseModal from "@/components/UI/modals/BaseModal";
import BaseInput from "@/components/UI/inputs/BaseInput";
import {useSettings} from "@/hooks/useSettings";
import {useSettingInputs} from "@/hooks/useSettingInputs";
import {useUser} from "@/hooks/useUser";
import BaseLoading from "@/components/UI/loading/Baseloading";
import { useVuelidate } from '@vuelidate/core'
import {required, email, minLength, sameAs} from '@vuelidate/validators'
import {ref} from "vue";
export default {
  components: {BaseLoading, BaseInput},
  data(){
      return {
        v$: useVuelidate(),
        loginModel: ref(this.user),
        registerModel: {user: ref(this.user), confirmPassword: ''},
        modalAttr:{
          id: "Login",
          modalTitle: "Авторизация",
          buttonTitle: "Войти",
          visible: false,

        },
        modalAttr1:{
          id: "Register",
          modalTitle: "Регистрация",
          buttonTitle: "Зарегистрироваться",
          visible: false,
        },

      }
    },
  setup(props) {
    //TODO доделать форму на предмет сохранения пароля
    const {user, login, register, signOut} = useUser()
    return {
      user, login, register, signOut,
    }
  },
  validations () {
    return {
      loginModel: {
        login: { required,},
        password: { required,},
        // confirmPassword: { required, sameAsPassword: sameAs('password') }
      },
      registerModel: {
        user: {
          login: { required,
            minLength: minLength(4),},
          email: {required, email},
          password: { required, minLength: minLength(6),},
        },
        confirmPassword: { sameAsPassword: sameAs(this.user.password), }
      }
    }
  },
  created() {
    this.$store.dispatch("checkAuth")
  },
  methods:{
    async loginV(){
      const isFormCorrect = await this.v$.loginModel.$validate()
      //console.log(isFormCorrect)
      //this.v$.loginModel.$validate()
      if(isFormCorrect){
        this.login()
        //TODO
        this.modalAttr.visible = false
        this.modalAttr1.visible = false
      }
    },

    async registerV(){
      const isFormCorrect = await this.v$.registerModel.$validate()
      //console.log(isFormCorrect)
      //this.v$.loginModel.$validate()
      if(isFormCorrect){
        this.register()
        //TODO
        this.modalAttr.visible = false
        this.modalAttr1.visible = false
      }
    }
  }

}

</script>
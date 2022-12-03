<template>
  <div class="home">
    <TitleComp :title="'Login'"></TitleComp>
    <div class="col-lg-6 text-center text">
      <h1 style="text-transform:uppercase ;">app medts</h1>
      <p class="container" style="text-align: center">
        Encuentra trabajo en un fast
      </p>
    </div>
    <div class="col-lg-6">
      <card-comp :btns="btnArray" class="mx-auto card-comp">
        <form>
          <div class="mb-3 mt-2">
            <input type="email" class="form-control" placeholder="Ingresa tu email" />
          </div>
          <div class="mb-3 mt-2">
            <input type="password" class="form-control" placeholder="Contraseña" />
          </div>
        </form>
      </card-comp>
    </div>
    <MenuComp></MenuComp>
  </div>
</template>

<script>
import CardComp from "@/components/CardComp.vue";
import TitleComp from "@/components/TitleComp.vue";
import MenuComp from "@/components/MenuComp.vue";
export default {
  name: "HomeView",
  components: {
    CardComp,
    TitleComp,
    MenuComp,
  },
  data() {
    return {
      btnArray: [
        {
          title: "Iniciar Sesión",
          txt: "Iniciar sesión",

          class: "btn-success",
        },
      ],
      errors:[],
      email:'',
      password:'',
    };
  },
  methods:{
    isEmail: (email) => (email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) ? 
  		true : 
  		false,
    
    checkFormLogin: function(e){
      this.errors = [];
      e.preventDefault();
      result = true;
      if(!this.isEmail(this.email)) {
      	result = false; this.errors.push("Email is required.");
      } 
      if(this.password === '') { 
        result = false; 
        this.errors.push("Password is required.");
      }
      return result;
    },

    sedPostAPI: async function(url, form){
      var parametros = new FormData(document.getElementById(form));
      const option = {
        headers: {
        },
        contentType: false,
        mimeType: 'text/html; charset=utf-8',
        cache: false,
        processData: false,
        body: parametros,
        method: "POST"
      }
      await fetch(url, option).then(function (response) {
        return response.json();
      }).then(function (result) {
        console.log(result)
      }).catch(function (e) {
        console.warn(e);
      });
    },

    clickBtnLogin(e) {
      if(this.checkFormLogin(e)){
        this.sedAjax('url', 'login');
      }
    }
  }
};
</script>

<style scoped>
.home {
  max-width: 895px;
  margin: 0;
}

.text {
  padding-top: 2em;
}

.row {
  padding-top: 10em;
}

.card-comp {
  max-width: 398px;
  margin-top: 2.6em;
  padding: 0;

}

@media (min-width: 992px) {
  .home {
    margin: 0 auto;
    /* padding: 0 auto;*/
  }
}
</style>

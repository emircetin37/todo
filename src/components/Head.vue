<template>
  <div id="nav">
    <div>
      <router-link id="list-head" to="/" tag="a"
        >Yapılacaklar Listesi</router-link
      >
      <router-link to="/add" tag="a" class="lead">Ekle</router-link>
    </div>
    <div>
      <router-link v-if="!$store.state.nowUser.userName" to="/login" tag="a" class="lead">Giriş Yap</router-link>
      <router-link v-if="!$store.state.nowUser.userName" to="/register" tag="a" class="lead">Kayıt Ol</router-link>
      <router-link v-if="$store.state.nowUser.userName" to="/user-detail" tag="a">{{$store.state.nowUser.userName}}</router-link>
      <a v-if="$store.state.nowUser.userName" @click="logOut" class="lead" > <button class="btn btn-danger btn-sm">Çıkış Yap</button> </a>
    </div>
  </div>
</template>


<script>
export default {
  data(){
    return{
        
    }
  },

  methods:{
    logOut(){
      this.$store.dispatch("logOutUser");
      this.$router.push("/login")
      
    }
  }
};
</script>


<style>
#nav {
  padding: 30px;
  background-color: #f8f9fa;
  display: flex;
  justify-content: space-between;
}
#nav a {
  color: black;
  text-decoration: none;
  margin-left: 15px;
  cursor: pointer;
}
#list-head {
  font-size: 25px;
}
</style>
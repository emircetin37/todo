<template>
  <div id="form">
      <h4 class="mb-4">Giriş Yap</h4>
    <div >
      <label for="">Kullanıcı Adı</label>
      <input v-model="userName" class="form-control" type="text" />
    </div>

    <div>
      <label for="">Parola</label>
      <input v-model="password" class="form-control" type="password"/>
    </div>
    <button @click="login" class="btn btn-primary mt-3">Giriş Yap</button>
  </div>
</template>


<script>
export default {
  data(){
    return{
      userName:"",
      password:""
    }
  },
  methods:{
    login(){
      let user={
        userName : this.userName,
        password : this.password
      }
      this.$store.dispatch("loginUser",user)
      this.$router.push("/")
    }
  }
};
</script>


<style scoped>
#form{
    width: 600px;
    margin: auto;
    margin-top: 50px;
}
h4{
    color: darkblue;
    text-align: center;
}

</style>
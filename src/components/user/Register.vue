<template>
  <div id="form">
    <h4>Kayıt Ol</h4>
    <div>
      <label for="">Kullanıcı Adı</label>
      <input v-model="userName" class="form-control" type="text" />
    </div>
    <div>
      <label for="">E-mail</label>
      <input v-model="mail" class="form-control" type="email" />
    </div>
    <div>
      <label for="">Parola</label>
      <input v-model="password" class="form-control" type="password" />
    </div>
    <div>
      <label for="">Parola Tekrar</label>
      <input v-model="passwordAgain" class="form-control" type="password" />
    </div>
    <button @click="register" class="btn btn-primary mt-3">Kayıt Ol</button>
  </div>
</template>


<script>
export default {
  data(){
    return{
      userName : "",
      mail  :"",
      password : "",
      passwordAgain:""
    }
  },
  methods:{
    register(){
      if(this.userName==""||this.mail==""||this.password==""||this.passwordAgain==""){
        alert("Lütfen boş alanları doldurunuz.");
      }
      else if(this.password!=this.passwordAgain){
        alert("Parolalar biribiriyle eşleşmiyor");
      }
      else{
        this.$store.dispatch("registerUser",{userName:this.userName,mail:this.mail,password:this.password})
        this.$router.push("/login")
      }
      
    }
  }
};
</script>


<style scoped>
#form {
  width: 600px;
  margin: auto;
  margin-top: 50px;
}
h4 {
  color: darkblue;
  text-align: center;
}

</style>
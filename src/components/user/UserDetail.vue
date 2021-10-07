<template>
  <div>
    <label>Kullanıcı Adı</label>
    <p>{{ $store.state.nowUser.userName }}</p>
    <br />
    <label>E-Mail</label>
    <p>{{ $store.state.nowUser.mail }}</p>
    <button @click="logOut" class="btn btn-danger">Çıkış Yap</button>
  </div>
</template>

<script>
export default {
  methods: {
    logOut() {
      this.$store.dispatch("logOutUser");
      this.$router.push("/login"); 
    },
  },
};
</script>


<style scoped>
div {
  width: 300px;
  margin: auto;
  padding: 80px;
  border: 2px solid darkblue;
  margin-top: 79px;
}
label {
  display: inline;
  font-weight: 600;
}
</style>
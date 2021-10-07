<template>
  <div class="">
    <h4 class="mt-4">Yapılacaklar Listesine Ekle</h4>
    <input v-model="value" class="form-control mt-4 mb-4" type="text" />
    <a @click="listAdd" class="btn btn-primary">Ekle</a>
  </div>
</template>


<script>
export default {
  data() {
    return {
      value: "",
    };
  },
  methods: {
    listAdd() {
      if (this.$store.state.nowUser.userName) {
        if (this.value.length >= 5) {
          this.$store.dispatch("listAdd", this.value);
          this.value = "";
        } else if (this.value == "") {
          alert("Lütfen kutucuğu doldurunuz.");
        } else if (this.value.length < 5) {
          alert("Lütfen 5 karekter ve üzerinde kutucuğu doldurunuz.");
        }
      }
      else{
        alert("Bu yetkiye sahip değilsiniz giriş yapın veya kayıt olun.")
      }
    },
  },
};
</script>

<style scoped>
h4 {
  color: darkblue;
}
div {
  margin: auto;
  width: 400px;
  text-align: center;
}
</style>
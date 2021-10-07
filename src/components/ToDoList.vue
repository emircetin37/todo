<template>
  <div class="list">
    <table class="table">
      <tr v-for="(l, index) in list" :key="index">
        <td>{{ l }}</td>
        <button @click="deleteList(l, index)" class="btn btn-danger btn-sm">
          X
        </button>
      </tr>
    </table>
    <div v-if="$store.getters.getList < 1" class="list alert alert-danger">
      ŞU AN HERHANGİ BİR KAYIT BULUNMAMAKTADIR KAYIT EKELEMEK İÇİN :
      <router-link to="/add" tag="a" class="lead">Ekle</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: this.$store.getters.getList,
    };
  },
  methods: {
    deleteList(l, index) {
      if (this.$store.state.nowUser.userName) {
        this.$store.dispatch("deleteList", l, index);
      }
      else{
        alert("Bu yetkiye sahip değilsiniz giriş yapın veya kayıt olun.")
      }
    },
  },
};
</script>

<style scoped>
.list {
  width: 660px;
  margin: auto;
  margin-top: 50px;
}
.alert {
  padding: 100px;
  font-size: 30px;
}
a {
  color: blueviolet;
  font-weight: 700;
  text-decoration: dimgrey;
  font-size: 25px;
}
</style>
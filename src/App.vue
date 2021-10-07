<template>
  <div>
    <app-head></app-head>

    <router-view class="animate__animated animate__fadeIn animate__slow"></router-view>
  </div>
</template>




<script>
import Head from "./components/Head.vue";
import ToDoList from "./components/ToDoList.vue";
import Add from "./components/Add.vue";
export default {
  components: {
    appHead: Head,
    appList: ToDoList,
    appAdd: Add,
  },
  created() {
    this.$store.dispatch("createList");
    this.$store.dispatch("createUser");
  },
};
</script>



<style>
</style>
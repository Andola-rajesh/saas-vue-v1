<template>
  <HeaderTemplate />
  <SideBar :menu_options="menu_array"/>
  <main>
    <router-view></router-view>
  </main>
</template>
<script>
// import HelloWorld from './components/HelloWorld.vue'
// import HomePage from './components/HomePage.vue'
import SideBar from './components/SideBar.vue'
import HeaderTemplate from './components/HeaderTemplate.vue'

import "./assets/css/style.css";

export default {
  name: 'App',
  components: {
     SideBar,
    HeaderTemplate,
  },
  data() {
    return {
      menu_array : [
        {
          menu_id: 1,
          menu_name: "Dashboard",
        },
          {
          menu_id: 2,
          menu_name: "Profile",
        },
          {
          menu_id: 3,
          menu_name: "Settings",
        },
      ],
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>

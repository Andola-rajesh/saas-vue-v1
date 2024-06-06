<template>
  <main>
    <router-view></router-view>
  </main>
</template>
<script>

import "./assets/css/style.css";

export default {
  name: 'App',
  components: {
    
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

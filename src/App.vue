<template>
  <div id="app">
    <NavigationHome></NavigationHome>
  </div>
</template>

<script>

  import NavigationHome from "./components/NavigationHome";
  export default {
    name: 'app',
    components: {NavigationHome,
      // ContactsTable
    },
    data(){
      return {

    }
    },
    methods: {
    }
  }
</script>

<style>

</style>
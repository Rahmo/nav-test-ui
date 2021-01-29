<template>
  <div id="app">
<!--      <ContactsTable></ContactsTable>-->
    <NavigationHome></NavigationHome>
  </div>
</template>

<script>

  import ContactsTable from "./components/ContactsTable";
  import NavigationHome from "./components/NavigationHome";
  export default {
    name: 'app',
    components: {NavigationHome, ContactsTable},
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
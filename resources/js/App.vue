<template>
   <v-app id="app">
      <v-toolbar color="deep-purple accent-4" dark dense app id="app-toolbar">
         <v-toolbar-side-icon></v-toolbar-side-icon>
         <v-toolbar-title>AMA Forum</v-toolbar-title>
         <v-spacer></v-spacer>
      </v-toolbar>

      <v-content>
         <router-view></router-view>
      </v-content>
      
   </v-app>
</template>

 
<script>
export default {
   data: () => ({

   }),
   mounted() {
      // axios.get('../refresher/api/test')
      //                 .then(result => {
                         
      //                 }).catch(err => {console.log('err')})
   },
   methods: {

   },
   computed: {

      drawer: {
         get() {
            return this.$store.state.drawer;
         },
         set: val => {
            return (this.$store.state.drawer = val);
         }
      },
      user: {
         get() {
            return this.$store.state.user;
         },
         set: val => {
            return (this.$store.state.user = val);
         }
      },
   }
}


</script>
<style scoped>


</style>
<template> 
<v-app> 
    <appheader></appheader>
    <v-content>

      <router-view/>
    </v-content>
    
</v-app>
</template>

<script>

import Appheader from './components/Appheader'
export default {
  name: 'App',
  components: {
    Appheader
  },
  created () {
      this.$vuetify.theme.dark = true
    },
};
</script>

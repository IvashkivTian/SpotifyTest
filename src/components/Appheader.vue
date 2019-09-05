<template>
    <div >
      <v-content>
          <router-link to="/" tag="span" style="cursor:pointer">
            <h1 class="ma-5">MUSIC</h1>
          </router-link>                
        <v-toolbar dark>  
            <v-spacer></v-spacer> 
            <v-tabs color="white" >
                    <v-tabs-slider color="green"></v-tabs-slider>
                <v-tab class="grey darken-3" 
                v-for="(item,i) in tabItems" 
                :key="i" 
                :to="item.route"
                >{{item.title}}</v-tab>                       
            </v-tabs>                    
        </v-toolbar>
        </v-content>
    </div>
</template>


<script>

import Artists from '@/components/Artists'
import Albums from '@/components/Albums'
import Tracks from '@/components/Tracks'


export default{
    components:{
        Artists,
        Albums,
        Tracks
    },
    computed:{
        tabItems(){
            return [
                {
            title: 'artists',
            route:'/artists'
        },
        {
            title: 'albums',
            route:'/albums'
        },
        
        {
            title: 'tracks',
            route:'/tracks'
        }
    ]
      }
    },
          
}

</script>

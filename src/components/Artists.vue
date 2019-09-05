<template>
    <v-app>
    <v-container>
        <v-form>
            <v-text-field 
            label="Search artists..." 
            v-model="searchArtist" 
            @keyup="getData()">
            </v-text-field>
        </v-form>
        <v-list-item>
            <v-list-item-content v-if="artists">
                <v-list-item-title 
                v-for="(artist,i) in artists"
                 :key=(i)>
                 <v-hover v-slot:default="{ hover }">
                    <div :elevation="hover ? 12 : 2"
                        :class="{ 'on-hover': hover }">
                        <p class="text-uppercase">{{artist.name}}</p> 
                        <v-img v-if="artist.images.length > 0" :src="artist.images[0].url" width="50" height="50"  class="ma-3" />
                    </div> 
                </v-hover>
                </v-list-item-title>
            </v-list-item-content>    
        </v-list-item>
    </v-container>
    </v-app>
</template>


<style>
.on-hover {
  opacity: 0.6;
  background-color: rgb(19, 18, 18);
 }



</style>


<script>

import axios from 'axios'


export default {
    data(){
        return {
            searchArtist:'',
            artists: [],
            base64: 'MDE4OTE0N2YyMmVkNDI4OWE2ZThhMDJkYjYyNDMxZDM6OTAzOTBjMjcxMzRjNDY0M2E4YTViMzczOWI0NWFhNGE=',
            // get token from postman
            access_token :
                'BQB6QcGN1JM56E8KFuTCKlmUudkby53Xm_5K10y3ECj0IwBGMLkn1ruRhAKNL-Gl_yeICcc-nNHaOpYiA1U'

        }
    },
    methods: {
      getData() { 
        
     const url = `https://api.spotify.com/v1/search?q=${this.searchArtist}&type=artist`
      axios.get(url,{ headers: {
                'Content-Type' : 'application/json',
                Authorization : `Bearer ${this.access_token} `} })    
        .then(response =>{
            console.log(response.data.artists.items)
            this.artists = response.data.artists.items
        })
        .catch(error => {
            console.log(error)
         })
       
        }
    }
}
</script>
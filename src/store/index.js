import { defineStore } from 'pinia'
import { reactive, ref, watch } from 'vue';


export const useMapStore = defineStore('map', () => {

    const mapContainer = ref(null);
    const googleMap = ref(null);

    const googlePolyline = ref(null)


    watch([() => googlePolyline.value ], ([newGooglePolyline],[oldGooglePolyline]) => {
      if(oldGooglePolyline){
        console.log("oldGooglePolyline set to null")
          oldGooglePolyline.setMap(null)
      }
      if(newGooglePolyline){
        console.log("newGooglePolyline set to googleMap")
          newGooglePolyline.setMap(googleMap.value)
      }


    })




    return {
        mapContainer,
        googleMap,
        googlePolyline,
     }
})

// ref()s become state properties
// computed()s become getters
// function()s become actions
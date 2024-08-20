<template>
  <div>
    <div ref="mapContainer" id="map" style="height: 80vh "></div>

    <button @click.prevent="addPolylinetoMap" >Add Polyline</button>
    <button   @click.prevent="clearPolyline" >Remove Polyline</button>

  </div>
</template>


<script setup>
 import useMap from './composable/map'
 import { onMounted } from 'vue'
  const { mapContainer,  loadMap, plotHistory, clearPolyline  } = useMap()


  const addPolylinetoMap = () => {    
    function getRandomCoordinate() {
      const latitude = Math.random() * 180 - 90;
      const longitude = Math.random() * 360 - 180;
      return { latitude, longitude };
    }

    const startPoint = getRandomCoordinate();
    const endPoint = getRandomCoordinate();

    plotHistory([startPoint, endPoint]);
  }

  onMounted(() => {    
      loadMap();    
  })

</script>

import { Loader } from "@googlemaps/js-api-loader"
import { useMapStore } from './../store'
import { storeToRefs } from "pinia"
import { onMounted } from "vue"


const useMap = () => {

    const store = useMapStore()

    const {
        mapContainer,
        googleMap,
        googlePolyline,

    } = storeToRefs(store)
    
    const loader = new Loader({
        apiKey: "AIz...",
        version: "weekly",
    });

    const loadMap = () => {

        loader.load().then(async () => {

            googleMap.value = new window.google.maps.Map(mapContainer.value, {
                center: { lat: 0.297784, lng: 32.544896 },
                zoom: 9,
              
            });


        });
    }


    const plotHistory = (locations, currentPosition = null, pathId = null ) => {
        locations = locations.map((position) => {
            return { lat: position.latitude, lng: position.longitude }
        })
        // Draw lines connecting the markers
        googlePolyline.value = new google.maps.Polyline({
          path: locations,
          strokeColor: "#FF0000",
          strokeOpacity: 1.0,
          strokeWeight: 2,
        });
    }


    const clearPolyline = () => {
        if (googlePolyline.value) {
            googlePolyline.value = null;
        }
    }



    onMounted(() => {
        console.log("mounted")
    })

    return {
        loader,
        loadMap,
        mapContainer,
        googleMap,
        plotHistory,
        clearPolyline
    }
}


            const mapStyle = [
                {
                    "featureType": "administrative.land_parcel",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "administrative.land_parcel",
                    "elementType": "labels",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "labels.text",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "poi.park",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "labels.icon",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "road.local",
                    "elementType": "labels",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "transit",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                }
            ];



export default useMap

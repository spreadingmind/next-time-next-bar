<template>
  <div>
    <div>
      <h1>Next time - next bar</h1>
      <div serch-box>
        <gmap-autocomplete @place_changed="setPlace"></gmap-autocomplete>
        <button @click="addMarker">Search</button>
      </div>
      <br>
    </div>
    <br>
    <gmap-map :center="center" :zoom="13" style="width:100%;  height: 700px;">
      <gmap-marker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        @click="center=m.position"
      ></gmap-marker>
    </gmap-map>
  </div>
</template>

<script>
export default {
  name: 'GoogleMap',
  data () {
    return {
      center: { lat: 59.934, lng: 30.335 },
      markers: [],
      places: [],
      currentPlace: null,
      marker: null
    }
  },

  mounted () {
    this.geolocate()
  },
  methods: {
    setPlace (place) {
      this.currentPlace = place
    },
    addMarker () {
      if (this.currentPlace) {
        const marker = {
          lat: this.currentPlace.geometry.location.lat(),
          lng: this.currentPlace.geometry.location.lng()
        }
        if (this.markers.length > 0) {
          this.markers = []
        }
        this.markers.push({ position: marker })

        this.center = marker
        this.currentPlace = marker
        this.marker = marker
      }
    },
    geolocate () {
      navigator.geolocation.getCurrentPosition(position => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        }
      })
    }
  }
}
</script>

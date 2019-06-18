<template>
  <div class="bars">
    <ul id="bars-list">
      <li v-for="bar in bars" :key="bar">{{ bar }}</li>
    </ul>
  </div>
</template>

<script>
import { fetchBars } from '../services/barsService'

export default {
  name: 'Bars',
  data () {
    return {
      bars: []
    }
  },
  mounted () {
    this.getBars()
  },
  methods: {
    async getBars () {
      const response = await fetchBars()
      this.bars = response.data
    }
  }
}
</script>

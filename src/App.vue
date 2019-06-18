<template>
  <div
    id="app"
    :style="{fontSize: fontSize + '%'}"
  >
    <navigation></navigation>
    <page-header
      v-if="hasSlides"
    />
    <div
      class="page"
    >
      <v-container
        fluid
        fill-height
        class="pageBody"
      >
        <v-layout>
          <v-flex xs12 lg10 offset-lg1 >
            <div
              id="pageContent"
              class="gridKids"
            >
              <box></box>
            </div>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
  </div>
</template>

<script>
import Navigation from './components/Navigation'
import PageHeader from './components/PageHeader/PageHeader'
import Box from './components/Box'
import { SET_SCENE_HEIGHT_IS_DIRTY } from './store/box/mutation-types'

export default {
  name: 'App',
  data() {
    return {
      fontSize: 100
    }
  },
  computed: {
    hasStore() {
      return this.$store.state[this.$route.name]
    },
    hasSlides() {
      return this.hasStore && this.$store.state[this.$route.name].slides
    },
    minFontSize() {
      return this.$store.state.minFontSize
    },
    maxFontSize() {
      return this.$store.state.maxFontSize
    }
  },
  methods: {
    adjustFontSize() {
      const nominalSize = 100
      const thresholdWidth = 1000
      if (window.innerWidth < thresholdWidth) {
        this.fontSize = Math.min(Math.max(this.minFontSize, window.innerWidth / 6), nominalSize)
      } else {
        this.fontSize = Math.min(Math.max(nominalSize, window.innerWidth / 10), this.maxFontSize)
      }
      this.$store.commit('box/' + SET_SCENE_HEIGHT_IS_DIRTY, true)
    },
  },
  components: {
    Navigation,
    PageHeader,
    Box
  },
  mounted() {
    const vm = this
    this.$nextTick(function () {
      window.addEventListener('resize', vm.adjustFontSize)
      vm.adjustFontSize()
    })
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900|Material+Icons');

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  fonst-size: 16px;
  color: #2c3e50;
}

.gridKids > *,
.side > *,
.grid {
  display: grid;
  grid-column-gap: 2em;
  grid-row-gap: 1em;
  grid-template-rows: repeat(auto-fit, 1fr);
}

.gridRow {
  grid-template-rows: none;
  grid-template-columns: repeat(auto-fit, 1fr);
}
.pageBody .v-card {
  text-align: left;
}
</style>

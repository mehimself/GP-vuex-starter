<template>
  <div class="stopWords">
    <v-card
      elevation-4
      color="grey lighten-4"
    >
      <v-card-title>
        <h3 class="headline mb-0">Maintain your list of stopwords</h3>
      </v-card-title>
      <v-card-text>
        <p>
          Type any word to <span class="highlight">find</span> or
          <span class="grey">Add</span> it<br>
          Right click a stop word to delete it <br>
          Copy the <code>list of stopwords</code> to include it in your code
        </p>
        <div class="grid textfieldInput">
          <v-text-field
            v-model="newword"
            label="Include another stopword"
          ></v-text-field>
          <v-btn
            color="grey"
            small
            @click="addStopWord"
          >Add
          </v-btn>
        </div>
        <div class="text-xs-center">
          <code>stopwords = [<transition-group
              name="staggered-fade"
              tag="span"
              v-bind:css="false"
              v-on:before-enter="beforeEnter"
              v-on:enter="enter"
              v-on:leave="leave"
            >
              <template
                v-for="(item, index) in stopwords"
                close
              ><span
                :key="item.text"
                :data-index="index"
                :class="{'highlight': index === highlightedIndex}"
                @contextmenu="removeStopWord(index)">"<text-highlight
                  :queries="newword"
                  :highlightStyle="highlightStyle"
                >{{ item.text }}"</text-highlight></span><span
                :key="','+item.text"
                :data-index="index"
                v-if="index < stopwords.length - 1">, </span></template>
            </transition-group>];</code>
        </div>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import stopWords from '../../assets/stopwords'
import Velocity from 'velocity-animate'
import TextHighlight from 'vue-text-highlight'
export default {
  name: 'StopWords',
  data () {
    return {
      stopwords: stopWords,
      newword: ''
    }
  },
  computed: {
    highlightedIndex () {
      let vm = this
      return this.stopwords.findIndex(word => word.text === vm.newword)
    },
    highlightStyle: function () {
      return {
        backgroundColor: '#99C5FF'
      }
    }
  },
  methods: {
    addStopWord () {
      let vm = this
      const index = this.stopwords.findIndex(word => word.text === vm.newword)
      if (index < 0) {
        this.stopwords.push({
          text: this.newword
        })
      }
    },
    removeStopWord (index) {
      this.stopwords.splice(index, 1)
    },
    beforeEnter: function (el) {
      el.style.opacity = 0
      el.style.height = 0
    },
    enter: function (el, done) {
      const delay = 150
      setTimeout(function () {
        Velocity(
          el,
          {opacity: 1, height: '1.6em'},
          {complete: done}
        )
      }, delay)
    },
    leave: function (el, done) {
      const delay = 150
      setTimeout(function () {
        Velocity(
          el,
          {opacity: 0, height: 0},
          {complete: done}
        )
      }, delay)
    }
  },
  components: {
    TextHighlight
  }
}
</script>

<style scoped>
  .gridKids > *,
  .grid {
    display: grid;
    grid-column-gap: 2em;
    grid-template-columns: 6fr 1fr;
  }
  .highlight {
    background-color: #99C5FF;
    padding: 0 4px;
  }
  .grey {
    background-color: grey;
    padding: 0 4px;
    -webkit-border-radius: 2px;
    -moz-border-radius: 2px;
    border-radius: 2px;
  }
</style>

<template>
  <v-card class="person">
    <v-layout row>
      <v-flex xs3 lg2>
        <v-card-title primary-title>
          <a-badge
            color="grey lighten-4"
            :src="src"
            :size="avatarSize"
          ></a-badge>
        </v-card-title>
      </v-flex>
      <v-flex xs9 lg10>
        <a-body
          :title="bodyTitle"
          :subtitle="bodySubtitle"
          :body="bodyBody"
        ></a-body>
      </v-flex>
    </v-layout>
  </v-card>
</template>

<script>
import { ABadge, ABody } from '../Avatar'
export default {
  name: 'Person',
  data: function() {
    return {
      avatarSize: 120
    }
  },
  props: {
    name: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    src: {
      type: String
    },
    specializations: {
      type: Array
    },
    functions: {
      type: Array
    }
  },
  computed: {
    bodyTitle() {
      return `<span class="name">${this.name}</span> (<span class="prefix">${this.title}</span>)`
    },
    bodySubtitle() {
      let value = ''
      if (this.functions && this.functions.length) {
        value = `<span class="job">${this.functions.join('</span>, <span class="job">')}</span>`
      }
      return value
    },
    bodyBody() {
      let value = ''
      if (this.specializations && this.specializations.length) {
        value = `<span class="specialization">${this.specializations.join('</span>, <span class="specialization">')}</span>`
      }
      return value
    },
  },
  methods: {
    setAvatarSize() {
      const minSize = 28
      const maxSize = 400
      this.avatarSize = Math.min(Math.max(minSize, window.innerWidth / 8), maxSize)
    }
  },
  components: {
    ABadge,
    ABody
  },
  mounted() {
    const vm = this
    this.$nextTick(function () {
      window.addEventListener('resize', vm.setAvatarSize)
      vm.setAvatarSize()
    })
  },
  updated() {
    const vm = this
    this.$nextTick(function () {
      vm.setAvatarSize()
    })
  }
}
</script>
<style>

</style>

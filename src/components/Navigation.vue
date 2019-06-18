<template>
  <div class="navigation">
    <v-toolbar
      id=navigation
      class="white--text"
      color="#002546"
    >
      <v-toolbar-items>
        <v-btn
          dark
          tiny
          color="#002546"
          v-show="shrinkage > 9"
          @click="drawer = !drawer"
        >
          <v-icon>menu</v-icon>
        </v-btn>
      </v-toolbar-items>
      <v-toolbar-title
        title="Your Application Name"
      >
        <a
          href="/#"
        >
          <v-img
            :src="logoUrl"
            :class="{logo: shrinkage >= 10}"
            :height="shrinkage > 8 ? 25 : 50"
            :width="shrinkage > 8 ? 50 : 100"></v-img>
        </a>
      </v-toolbar-title>
      <v-toolbar-items
        title="Home"
        @click="$router.push('/')"
      >
        <v-btn
          flat
          dark
          :class="{active: $route.path === '/'}"
          v-show="shrinkage < 9"
        >
          <span v-if="shrinkage >= 8">
            Medium Length App Title
          </span>
          <span
            v-else
          >
            App Title in its full length and glory
          </span>
        </v-btn>
        <v-btn
          flat
          dark
          :class="{active: $route.path === '/'}"
          v-show="shrinkage >= 9"
        >
          Appreviation
        </v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>
        <v-toolbar-items
          v-show="shrinkage <= 10"
        >
          <template
            v-for="page in pages"
          >
            <v-btn
              v-if="shrinkage < page.deflateAt"
              flat
              dark
              :class="{active: $route.path === page.url}"
              :title="page.title"
              :key="page.title"
              :input-value="path===page.title.toLowerCase()"
              @click="push(page.url)"
            >
              {{page.title}}
            </v-btn>
            <v-btn
              v-else
              icon
              dark
              :title="page.title"
              :class="{active: $route.path === page.url}"
              :key="page.title"
              :input-value="path===page.title.toLowerCase()"
              @click="push(page.url)"
            >
              <v-icon>
                {{page.icon}}
              </v-icon>
            </v-btn>
          </template>
        </v-toolbar-items>
      <v-spacer></v-spacer>
      <auth></auth>
    </v-toolbar>
    <v-navigation-drawer
        :value="drawer"
        absolute
        disable-resize-watcher
        hide-overlay
      >
      <v-list class="pt-0" dense>
        <v-list-tile
          v-for="item in items"
          :key="item.title"
          @click="push(item.url)"
        >
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import Auth from './Auth/Auth'
export default {
  name: 'Navigation',
  data() {
    return {
      drawer: false,
      shrinkage: 0,
      items: [
        {title: 'Home', url: '/', icon: 'dashboard', deflateAt: 8},
        {title: 'Portfolio', url: '/portfolio', icon: 'collections_bookmark', deflateAt: 7},
        {title: 'Services', url: '/services', icon: 'widgets', deflateAt: 6},
        {title: 'Workshop', url: '/workshop', icon: 'build', deflateAt: 5},
        {title: 'Resources', url: '/resources', icon: 'extension', deflateAt: 4},
        {title: 'People', url: '/people', icon: 'people', deflateAt: 2},
        {title: 'Contact', url: '/contact', icon: 'mail', deflateAt: 1},
      ]
    }
  },
  computed: {
    pages() {
      return this.items.slice(1)
    },
    path() {
      return this.$router.currentRoute.name
    },
    logoUrl() {
      return this.$store.state.logoUrl
    }
  },
  methods: {
    assessShrinkage() {
      let shrinkage = 0
      const width = window.innerWidth
      if (width < 1650) { shrinkage++ }
      if (width < 1555) { shrinkage++ }
      if (width < 1480) { shrinkage++ }
      if (width < 1440) { shrinkage++ }
      if (width < 1390) { shrinkage++ }
      if (width < 1345) { shrinkage++ }
      if (width < 1300) { shrinkage++ }
      if (width < 1200) { shrinkage++ }
      if (width < 1100) { shrinkage++ }
      if (width < 970) { shrinkage++ }
      if (width < 810) { shrinkage++ }
      if (width < 750) { shrinkage++ }

      this.shrinkage = shrinkage
    },
    push(url) {
      this.drawer = false
      this.$router.push(url)
    }
  },
  components: {
    Auth
  },
  mounted() {
    const vm = this
    this.$nextTick(function () {
      window.addEventListener('resize', function () {
        vm.assessShrinkage()
      })
      vm.assessShrinkage()
    })
  },
  updated() {
    this.assessShrinkage()
  }
}
</script>
<style scoped>
  #navigation {
    color: white !important;
    background-color: rgb(0, 37, 70) !important;
  }
  .logo {
    margin-right: 1em;
  }
  .active {
    color: rgb(0, 37, 70) !important;
    background-color: white !important;
  }
</style>

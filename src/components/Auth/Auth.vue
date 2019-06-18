<template>
  <v-toolbar-items>
    <v-btn
      v-if="!isAuthenticated"
      dark
      icon
      color="#002546"
      title="join"
      to="/join"
    >
      <v-icon>
        person_add
      </v-icon>
    </v-btn>
    <v-btn
      v-if="!isAuthenticated"
      dark
      icon
      color="#002546"
      title="sign in"
      to="/signin"
    >
      <v-icon>
        fingerprint
      </v-icon>
    </v-btn>
    <v-btn
      v-else-if="isAuthenticated"
      flat
      dark
      color="#002546"
      @click="logout"
      data-cy="logout">
      power_settings_new
    </v-btn>
  </v-toolbar-items>
</template>

<script>
import {mapGetters} from 'vuex'
import {USER_SIGNOUT} from '../../store/mutation-types'

export default {
  name: 'Auth',
  computed: {
    ...mapGetters([
      'isAuthenticated'
    ])
  },
  methods: {
    logout() {
      this.$store.dispatch(USER_SIGNOUT)
    }
  }
}
</script>

<style scoped>

</style>

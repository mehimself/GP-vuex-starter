<template>
  <div class="events">
    <v-container>
      <v-layout
        align-center
      >
        <v-flex xs12>
          <v-card>
            <v-card-title>
              <h2 class="text-xs-center">
                <span v-if="$vuetify.breakpoint.smAndDown">App Name</span>
                <span v-else>Full Application Name</span>
                -
                Events
              </h2>
            </v-card-title>
          </v-card>
        </v-flex>
      </v-layout>
      <v-layout>
        <v-flex>
          <v-card>
            <v-card-text>
              <v-layout>
                <v-flex>
                  <v-sheet height="500">
                    <v-calendar
                      :now="today"
                      :value="today"
                      color="primary"
                    >
                      <template
                        slot="day"
                        slot-scope="{ date }"
                      >
                        <div data-app>
                          <template v-for="event in eventsMap[date]">
                              <v-menu
                                :key="event.title"
                                :value="event.open"
                                full-width
                                offset-x
                              >
                                <div
                                  v-if="!event.time"
                                  slot="activator"
                                  v-ripple
                                  class="my-event"
                                  v-html="event.title"
                                ></div>
                                <v-card
                                  color="grey lighten-4"
                                  min-width="350px"
                                  flat
                                >
                                  <v-toolbar
                                    color="primary"
                                    dark
                                  >
                                    <v-btn icon>
                                      <v-icon>edit</v-icon>
                                    </v-btn>
                                    <v-toolbar-title v-html="event.title"></v-toolbar-title>
                                    <v-spacer></v-spacer>
                                    <v-btn icon>
                                      <v-icon>favorite</v-icon>
                                    </v-btn>
                                    <v-btn icon>
                                      <v-icon>more_vert</v-icon>
                                    </v-btn>
                                  </v-toolbar>
                                  <v-card-title primary-title>
                                    <span v-html="event.details"></span>
                                  </v-card-title>
                                  <v-card-actions>
                                    <v-btn
                                      flat
                                      color="secondary"
                                    >
                                      Cancel
                                    </v-btn>
                                  </v-card-actions>
                                </v-card>
                              </v-menu>
                          </template>
                        </div>
                      </template>
                    </v-calendar>
                  </v-sheet>
                </v-flex>
              </v-layout>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'Events',
  computed: {
    today() {
      return this.moment().format('YYYY-MM-DD')
    },
    events: {
      get() {
        return this.$store.state.events.events
      }
    },
    eventsMap() {
      // convert the list of events into a map of lists keyed by date
      const map = {}
      this.events.forEach(e => (map[e.date] = map[e.date] || []).push(e))
      return map
    }
  },
  methods: {
    open(event) {
      alert(event.title)
    }
  }
}
</script>
<style scoped>
  .my-event {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    border-radius: 2px;
    background-color: #002546;
    color: #ffffff;
    border: 1px solid #002546;
    width: 100%;
    font-size: 12px;
    font-weight: 200;
    padding: 3px;
    cursor: pointer;
    margin-bottom: 1px;
  }
</style>

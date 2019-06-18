<template>
  <v-layout>
    <v-flex xs12>
      <v-card>
        <v-layout
          v-if="imageLeft"
          row
        >
          <v-flex xs3>
            <v-card-title primary-title>
              <a-badge
                :src="src"
                size="100%"
              ></a-badge>
            </v-card-title>
          </v-flex>
          <v-flex xs9>
            <a-body
              :title="name"
              :subtitle="role"
              :body="text"
            ></a-body>
          </v-flex>
        </v-layout>
        <v-layout
          v-else
          row
        >
          <v-flex xs9>
            <a-body
              :title="name"
              :subtitle="role"
              :body="text"
            ></a-body>
          </v-flex>
          <v-flex xs3>
            <v-card-title primary-title>
              <a-badge
                :src="src"
                size="100%"></a-badge>
            </v-card-title>
          </v-flex>
        </v-layout>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import { ABadge, ABody } from '../Avatar'
export default {
  name: 'Testimony',
  props: {
    index: {
      type: Number,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    role: {
      type: String,
      required: true
    },
    src: {
      type: String
    },
    text: {
      type: String,
      required: true
    }
  },
  computed: {
    imageLeft() {
      return this.index % 2
    }
  },
  components: {
    ABadge,
    ABody
  }
}
</script>

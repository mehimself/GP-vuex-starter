<template>
  <div class="contact">
    <v-container>
      <v-layout>
        <v-flex>
          <v-card>
            <v-card-title>
            <h1>Contact somebody</h1>
            </v-card-title>
            <v-card-text>
              <v-form
                method="post"
                :action="contactUrl"
                id="contactForm"
                v-model="valid">
                <v-text-field
                  label="Name"
                  v-model="name"
                  :rules="nameRules"
                  required
                  name="name"
                ></v-text-field>
                <v-text-field
                  label="E-mail"
                  v-model="email"
                  :rules="emailRules"
                  required
                  name="_replyto"
                ></v-text-field>
                <v-text-field
                  label="Subject"
                  required
                  prefix="@App/Contact: "
                  name="subject"
                ></v-text-field>
                <div id="gotcha">
                  <v-text-field
                    name="_gotcha"
                  ></v-text-field>
                </div>
                <v-textarea
                  name="message"
                  box
                  label="Message"
                  auto-grow
                  value=""
                ></v-textarea>
                <v-btn
                  type="submit"
                  :disabled="!valid"
                >
                  Send
                </v-btn>
              </v-form>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  data() {
    return {
      valid: false,
      name: '',
      nameRules: [
        (v) => !!v || 'Name is required',
      ],
      email: '',
      emailRules: [
        (v) => !!v || 'E-mail is required',
        (v) => /^[^@]+@[^@]+\.[^@]+$/.test(v) || 'E-mail must be valid'
      ]
    }
  },
  computed: {
    contactUrl() {
      return `https://formspree.io/${this.$store.state.contactEmailAddress}`
    }
  }
}
</script>
<style scoped>
  input,
  select {
    margin-left: 10px;
  }
  #gotcha {
    position: absolute;
    z-index: -10;
  }
</style>

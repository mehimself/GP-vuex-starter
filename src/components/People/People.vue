<template>
  <div class="grid">
    <person
      v-for="(person, index) in people"
      :key="index"
      :title="person.title"
      :name="person.name"
      :src="person.src"
      :specializations="person.specializations"
      :functions="person.functions"
    ></person>
  </div>
</template>

<script>
import Person from './Person'

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}
export default {
  name: 'People',
  computed: {
    people: {
      get() {
        let cards = this._.clone(this.$store.state.people.cards)
        shuffle(cards)
        return cards
      }
    }
  },
  components: {
    Person
  }
}
</script>

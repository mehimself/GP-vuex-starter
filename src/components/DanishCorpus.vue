<template>
  <div class="danishCorpus">
    <v-card
      elevation-4
      color="grey lighten-4"
    >
      <v-card-title>
        <h3 class="headline mb-0">Search for danish publication ids (<span>{{ filteredList.length }}</span>)</h3>
      </v-card-title>
      <v-card-text>
        <v-text-field
          v-model="filter"
          label="Filter"
        ></v-text-field>
        <v-data-table
          :headers="headers"
          :items="filteredList"
          :pagination.sync="pagination"
          :rows-per-page-items="pageSizes"
          class="elevation-4"
        >
          <template slot="items" slot-scope="props">
            <td>
              <text-highlight
                :queries="queries"
                :highlightStyle="highlightStyle"
              >
                {{ props.item.id }}
              </text-highlight>
            </td>
            <td class="text-xs-right">
              <text-highlight
                :queries="queries"
                :highlightStyle="highlightStyle"
              >
                {{ props.item.author }}
              </text-highlight>
            </td>
            <td class="text-xs-right">
              <text-highlight
                :queries="queries"
                :highlightStyle="highlightStyle"
              >
                {{ props.item.title }}
              </text-highlight>
            </td>
            <td class="text-xs-right">
              <text-highlight
                :queries="queries"
                :highlightStyle="highlightStyle"
              >
                {{ props.item.edition }}
              </text-highlight>
            </td>
            <td class="text-xs-right">
              <text-highlight
                :queries="queries"
                :highlightStyle="highlightStyle"
              >
                {{ props.item.yearOfBirth }}
              </text-highlight>
            </td>
            <td class="text-xs-right">
              <text-highlight
                :queries="queries"
                :highlightStyle="highlightStyle"
              >
                {{ props.item.yearOfDeath }}
              </text-highlight>
            </td>
          </template>
        </v-data-table>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import corpus from '../../assets/danishauthors'
import TextHighlight from 'vue-text-highlight'
export default {
  name: 'DanishCorpus',
  data () {
    return {
      corpus,
      filter: '',
      headers: [
        {text: 'Id', value: 'id'},
        {text: 'Author', value: 'author'},
        {text: 'Title', value: 'title'},
        {text: 'Edition', value: 'edition'},
        {text: 'Birth', value: 'yearOfBirth'},
        {text: 'Death', value: 'yearOfDeath'}
      ],
      pagination: {
        descending: true,
        page: 1,
        rowsPerPage: 250,
        sortBy: 'author'
      },
      pageSizes: [25, 50, 100, 250, 500, 1000]
    }
  },
  computed: {
    queries: function () {
      return this.filter.toLowerCase().split(' ')
    },
    filteredList: function () {
      const vm = this
      return this.corpus && this.corpus.filter(function (item) {
        let itemMatchesFilter = true
        for (let i = 0; i < vm.queries.length; i++) {
          const token = vm.queries[i]
          const inID = item.id.toLowerCase().indexOf(token) !== -1
          const inAuthor = item.author && item.author.toLowerCase().indexOf(token) !== -1
          const inTitle = item.title && item.title.toLowerCase().indexOf(token) !== -1
          const inEdition = item.edition && item.edition.toLowerCase().indexOf(token) !== -1
          const inBirthYear = item.yearOfBirth && ('' + item.yearOfBirth).indexOf(token) !== -1
          const inDeathYear = item.yearOfDeath && ('' + item.yearOfDeath).indexOf(token) !== -1
          const tokenInItem = inID || inAuthor || inTitle || inEdition || inBirthYear || inDeathYear
          itemMatchesFilter = itemMatchesFilter && tokenInItem
        }
        return itemMatchesFilter
      })
    },
    highlightStyle: function () {
      return {
        backgroundColor: '#99C5FF'
      }
    }
  },
  components: {
    TextHighlight
  }
}
</script>
<style scoped>
  .textfieldInput {
    grid-template-columns: 1fr 100px;
    grid-column-gap: 1em;
    grid-template-rows: none
  }
</style>

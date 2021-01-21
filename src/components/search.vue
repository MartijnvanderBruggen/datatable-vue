<template>
 <v-container>
   <v-row class="justify-center">
     <v-col cols="3">
       <v-text-field
              hide-details
              prepend-icon="mdi-magnify"
              single-line
            >
        </v-text-field>
      </v-col>
      <v-col cols="3">
        <v-btn @click="dialog = !dialog" v-model="dialog">Create Article</v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col offset="3" cols="6">
        <v-card color="orange" height="70vh" align-items="center" v-if="dialog">

          <v-img
            height="50%"
              src="https://cdn.vuetifyjs.com/images/cards/cooking.png">
              <v-fab-transition>
                  <v-btn
                    v-show="!hidden"
                    color="pink"
                    fab
                    dark
                    small
                    absolute
                    bottom
                    right
                    class="mb-7"
                  >
                    <v-icon>mdi-plus</v-icon>
                  </v-btn>
                </v-fab-transition>
          </v-img>
          <v-form>
            <v-container>
              <v-text-field v-model="article.title">{{article.title}}</v-text-field>
              <v-textarea v-model="article.content">{{article.content}}</v-textarea>
              <v-card-actions>
                <v-btn @click="create(article)">save</v-btn>
              </v-card-actions>
            </v-container>
          </v-form>

        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios'

export default {
  name:'search',
  data: () => ({
    dialog: false,
    article: {
      title: 'test',
      content: 'test'
    }

  }),
  methods: {
    create: function(item) {
      let url = this.$store.state.url
      axios.post(url, item).then((res) => {
        console.log(item)
      })
    },
    read: () => {

    },
    update: () => {

    },
    delete: () => {

    }
  },

}
</script>

<style lang="css" scoped>
</style>

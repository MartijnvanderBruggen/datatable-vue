<template>
<v-data-table
  :headers="headers"
  :items="data"
  sort-by="quantity"
  class="elevation-1"
>
  <template v-slot:top>
    <v-toolbar
      flat
    >
      <v-toolbar-title>generic datatable</v-toolbar-title>
      <v-divider
        class="mx-4"
        inset
        vertical
      ></v-divider>
      <v-spacer></v-spacer>
      <v-dialog
        v-model="dialog"
        max-width="500px"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            color="primary"
            dark
            class="mb-2"
            v-bind="attrs"
            v-on="on"
          >
            New Item
          </v-btn>
        </template>
        <v-card>
          <v-card-title>
            <span class="headline">{{ formTitle }}</span>
          </v-card-title>

          <v-card-text>
            <v-container>
              <v-row>
                <v-col
                  cols="12"
                  sm="6"
                  md="4"
                >
                  <v-text-field
                    v-model="editedItem.product"
                    label="Product Name"
                    :rules="[rules.product]"
                    counter
                  ></v-text-field>
                </v-col>
                <v-col
                  cols="12"
                  sm="6"
                  md="4"
                >
                  <v-text-field
                    v-model.number="editedItem.quantity"
                    label="Quantity"
                    type="number"
                    :rules="[rules.quantity]"
                  ></v-text-field>
                </v-col>
                <v-col
                  cols="12"
                  sm="6"
                  md="4"
                >
                  <v-text-field
                    v-model="editedItem.price"
                    label="Price"
                    :rules="[rules.price]"

                  ></v-text-field>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="blue darken-1"
              text
              @click="close"
            >
              Cancel
            </v-btn>
            <v-btn
              color="blue darken-1"
              text
              @click="save"
            >
              Save
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-dialog v-model="dialogDelete" max-width="500px">
        <v-card>
          <v-card-title class="headline">Are you sure you want to delete this item?</v-card-title>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
            <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-toolbar>
  </template>

  <template v-slot:item.actions="{ item }">
    <v-icon
      small
      class="mr-2"
      @click="editItem(item)"
    >
      mdi-pencil
    </v-icon>
    <v-icon
      small
      @click="deleteItem(item)"
    >
      mdi-delete
    </v-icon>
  </template>
  <template v-slot:no-data>
    <v-btn
      color="primary"
      @click="initialize"
    >
      Reset
    </v-btn>
  </template>
</v-data-table>
</template>
<script>
import axios from 'axios'

export default {
  name: 'Datatable',
  data: () => ({
      apiurl: '',
      valid: false,
      dialog: false,
      dialogDelete: false,
      headers: [],
      headerObject: {
        text: '',
        align: '',
        sortable: '',
        value: ''
      },
      data: [],
      rules: {
        product: v => v.length > 2 || "minumal 3 chars",
        quantity: v => Number.isInteger(v) || "The value must be an integer number",
        price: value => !!value || "Price field cannot be empty",
      },
      editedIndex: -1,
      test: '',
      editedItem: {
        product: '',
        quantity: 0,
        price: 0
      },
      defaultItem: {
        product: '',
        quantity: 0,
        price: 0
      },
    }),


    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
      },


    },

    watch: {
      dialog (val) {
        val || this.close()
      },
      dialogDelete (val) {
        val || this.closeDelete()
      },
    },

    created () {
      this.initialize()
    },

    methods: {
      initialize () {
        this.apiurl = 'http://192.168.10.10/'
        axios.get(this.apiurl+'api/shoppinglist').then((response) => {
          //set data for datatable
          this.data = JSON.parse(response.data)

          //extract keys from data-item and add them as properties to headerObject
          //so headers are extracted dynamically from the json data, this is for populating table headers
          Object.keys(this.data[0]).forEach((key) =>{
            let temp = Object.create({})
            temp["text"] = key
            temp["value"] = key
            this.headers.push(temp)
          })
          //add actions column to headers
          let actions = Object.create({});
          actions.text ="Actions"
          actions.value="actions"
          actions.sortable = false
          this.headers.push(actions)
        })
      },


      editItem (item) {
        this.editedIndex = this.data.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        this.editedIndex = this.data.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
      },

      deleteItemConfirm () {
        this.data.splice(this.editedIndex, 1)
        this.closeDelete()
      },

      close () {
        this.dialog = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      closeDelete () {
        this.dialogDelete = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.data[this.editedIndex], this.editedItem)
        } else {
          this.data.push(this.editedItem)
        }
        this.close()
      },
    }
  }
</script>

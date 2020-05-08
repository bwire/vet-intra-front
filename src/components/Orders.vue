<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6>
        <v-list
          subheader
          three-line
          flat
          width=150%
        >
        <v-toolbar
          borderless
          flat
          light
          dense
          color="grey lighten-4"
        >
          <v-app-bar-nav-icon></v-app-bar-nav-icon>
          <v-toolbar-title>Мои заявки</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon>
            <v-icon>mdi-magnify</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon>mdi-view-module</v-icon>
          </v-btn>
        </v-toolbar>
          <v-list-item-group
            multiple
          >
            <v-list-item
              v-for="order of orders"
              :key="order.id"
              :disabled="order.done"
            >
              <v-list-item-avatar
                :color="order.avatarColor"
              >
                {{ order.avatarText }}
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>{{ order.name }}</v-list-item-title>
                <v-list-item-subtitle>{{ order.date }}</v-list-item-subtitle>
                <v-list-item-subtitle>{{ order.description }}</v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-action>
                <v-btn
                  class="primary"
                  :to="'/ad/' + order.adid"
                >...</v-btn>
              </v-list-item-action>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      orders: [
        {
          id: '1',
          date: '2020/05/01',
          name: 'Поборцева В. П.',
          avatarColor: 'red',
          avatarText: 'VP',
          phone: '+375 296 650194',
          description: 'Проверить работу системы заявок. Внести предожения по внешнему оформлению',
          done: true,
        },
        {
          id: '2',
          date: '2020/05/02',
          name: 'Гандзюк Е. И.',
          avatarColor: 'purple',
          avatarText: 'BW',
          phone: '+375 291 767669',
          description: 'Настроить страницу Мои Заявки',
          done: false,
        },
        {
          id: '3',
          date: '2020/05/03',
          name: 'Гандзюк Е. И.',
          avatarColor: 'purple',
          avatarText: 'BW',
          phone: '+375 291 767669',
          description: 'Ghbrhenbnm аватарки',
          done: false,
        },
      ],
    };
  },
};
</script>

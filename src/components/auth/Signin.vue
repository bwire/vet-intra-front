<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card class="elevation-12">
          <v-toolbar color="primary" dark flat short>
            <v-toolbar-title>Вход в систему</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form v-model="valid" ref="form" lazy-validation>
              <v-text-field
                placeholder="E-mail"
                name="email"
                prepend-icon="person"
                type="email"
                v-model="email"
                :rules="[rules.required, rules.email]"
              />

              <v-text-field
                id="password"
                placeholder="Пароль"
                name="password"
                prepend-icon="lock"
                type="password"
                :counter="6"
                v-model="password"
                :rules="[rules.required, rules.counter(6)]"
              />
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn color="primary" @click="onSubmit" :disabled="!valid">Вход</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import validators from '../../common/validators';

export default {
  data() {
    return {
      email: '',
      password: '',
      valid: false,
      rules: {
        required: validators.required,
        counter: validators.counter,
        email: validators.email,
      },
    };
  },
  methods: {
    onSubmit() {
      if (this.$refs.form.validate()) {
        const user = {
          email: this.email,
          password: this.password,
        };

        console.log('user', user);
      }
    },
  },
};
</script>

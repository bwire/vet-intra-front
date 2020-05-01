<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card class="elevation-12">
          <v-toolbar color="primary" dark flat short>
            <v-toolbar-title>Регистрация в системе</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form v-model="valid" ref="form" lazy-validation>
              <v-text-field
                placeholder="Имя"
                name="firstName"
                prepend-icon="person"
                type="text"
                v-model="fisrName"
                :rules="[rules.required]"
              />
              <v-text-field
                placeholder="Отчество"
                name="secondName"
                prepend-icon="person"
                type="text"
                v-model="secondName"
                :rules="[rules.required]"
              />
              <v-text-field
                placeholder="Фамилия"
                name="lastName"
                prepend-icon="person"
                type="text"
                v-model="lastName"
                :rules="[rules.required]"
              />
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
              <v-text-field
                id="passwordConfirmed"
                placeholder="Подтверждение пароля"
                name="passwordConfirmed"
                prepend-icon="lock"
                type="password"
                :counter="6"
                v-model="passwordConfirmed"
                :rules="[rules.required, rules.passwordMatch]"
              />
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn color="primary" @click="onSubmit" :disabled="!valid">Регистрация</v-btn>
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
      firstName: '',
      secondName: '',
      email: '',
      password: '',
      passwordConfirmed: '',
      valid: false,
      rules: {
        required: validators.required,
        counter: validators.counter,
        email: validators.email,
        passwordMatch: validators.passwordMatch(this.password),
      },
    };
  },
  methods: {
    onSubmit() {
      if (this.$refs.form.validate()) {
        const user = {
          firstName: this.firstName,
          secondName: this.secondName,
          lastName: this.lastName,
          email: this.email,
          password: this.password,
        };

        console.log('user', user);
      }
    },
  },
};
</script>

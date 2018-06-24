<template>
  <div>

    <div class="loginForm">
      <h1 class="loginHeader">Login</h1>
      <v-form v-model="valid" ref="form" lazy-validation>
        <v-text-field v-model="email" :rules="emailRules" label="Email" required></v-text-field>
        <v-text-field v-model="password" :rules="passwordRules" label="Password" required></v-text-field>
        <v-btn @click="submit" :disabled="!valid">Submit</v-btn>
        <v-btn @click="clear">Clear</v-btn>
        <v-alert :value="logSuc" type="success">
          Login Successful
        </v-alert>
        <v-alert :value="logFail" type="error">
          Login Error {{ msg }}
        </v-alert>
        <v-alert :value="invForm" type="error">
          Invalid Form
        </v-alert>
      </v-form>
    </div>

  </div>

</template>

<style scoped>
  .loginHeader {
    padding: 30px;
    text-align: center;
  }

  .loginForm {
      margin: auto;
      width: 80%;
      padding: 30px;
  }

</style>

<script>
import axios from 'axios';
  export default {
    data: () => ({
      valid: true,
      logSuc: false,
      logFail: false,
      invForm: false,
      msg: '',
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
      ],
      password: '',
      passwordRules: [
        v => !!v || 'Password is required',
      ],
      confirm_password: '',
    }),
    methods: {
      submit () {
        if (this.$refs.form.validate()) {
          return axios ({
            method: 'post',
            data: {
              email: this.email,
              password: this.password
            },
            url: 'http://localhost:8081/users/login',
            headers: {
              'Content-type': 'application/json',
            },
          })
          .then((response) => {
            window.localStorage.setItem('auth', response.data.token);
            this.logSuc = true;
            const self = this;
            setTimeout(function() {
              self.$router.push({ name: 'Home' })
            }, 2000);
            
          })
          .catch((error) => {
            //const msg = error.response.data.message;
            const msg = error;
            this.logFail = true;
          })
        } else {
          this.invForm = true;
        }
      },
      clear() {
        this.$refs.form.reset()
      }
    }
  }

</script>

<template>
  <div>
    <div class="postsPage">
      <h1 class="postsHeader">Register</h1>
      <v-form v-model="valid" ref="form" lazy-validation>
        <v-text-field v-model="name" :rules="nameRules" :counter="20" label="Name" required></v-text-field>
        <v-text-field v-model="email" :rules="emailRules" label="Email" required></v-text-field>
        <v-text-field v-model="password" :rules="passwordRules" label="Password" required></v-text-field>
        <v-text-field name="input-7-1" label="Confirm Password" v-model="confirm_password"></v-text-field>
        <v-btn @click="submit" :disabled="!valid">Submit</v-btn>
        <v-btn @click="clear">Clear</v-btn>
        <v-alert :value="regSuc" type="success">
          Registration Successful
        </v-alert>
        <v-alert :value="regFail" type="error">
          Registration Error
        </v-alert>
        <v-alert :value="invForm" type="error">
          Invalid Form
        </v-alert>
      </v-form>
    </div>

  </div>

</template>

<style scoped>
  .postsHeader {
    padding: 30px;
    text-align: center;
  }

  .postsPage {
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
      postSuc: false,
      postFail: false,
      invForm: false,
      email: '',
      name: '',
      password: ''
    }),
    methods: {
      submit () {
        if (this.$refs.form.validate()) {
          return axios ({
            data: {
              name: this.name,
              email: this.email,
              password: this.password
            },
            method: 'post',
            url: 'http://localhost:8081/users/posts',
            headers: {
              'Content-type': 'application/json',
            },
          })
          .then(() => {
            this.postSuc = true;
            const self = this;
            setTimeout(function() {
              self.$router.push({ name: 'Login' })
            }, 2000);
            
          })
          .catch((error) => {
            this.postFail = true;
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

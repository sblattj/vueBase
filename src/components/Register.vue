<template>
  <div>

    <div class="registerForm">
      <h1 class="registerHeader">Register</h1>
      <b-form>
        <b-form-group id="emailLabel" label="Email address:" label-for="email" description="We'll never share your email with anyone else.">
          <b-form-input id="email" type="email" v-model="register.email" required placeholder="Enter email">
          </b-form-input>
        </b-form-group>
        <b-form-group id="nameLabel" label="Your Name:" label-for="exampleInput2">
          <b-form-input id="name" type="text" v-model="register.name" required placeholder="Enter name">
          </b-form-input>
        </b-form-group>
        <b-form-group id="passwordLabel" label="Password:" label-for="password">
          <b-form-input id="password" type="text" v-model="register.password" required placeholder="Enter password">
          </b-form-input>
        </b-form-group>
        <b-button type="submit" @click="register" variant="primary">Submit</b-button>
        <b-button type="reset" @click="reset" variant="danger">Reset</b-button>
      </b-form>
    </div>

  </div>

</template>

<style scoped>
  .registerHeader {
    padding: 30px;
    text-align: center;
  }

  .registerForm {
      padding: 30px;
  }

</style>

<script>
  export default {
    data() {
      return {
        register: {
          email: '',
          name: '',
          password: ''
        },
        show: true
      }
    },
    methods: {
      register() {
          axios.post('');
      },
      reset() {
        this.form.email = '';
        this.form.name = '';
        this.form.password = '';
      }
    }
  }

</script>

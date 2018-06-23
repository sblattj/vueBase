<template>
  <div>

    <div class="loginForm">
      <h1 class="login">Login</h1>
      <b-form @submit="onSubmit" @reset="onReset" v-if="show">
        <b-form-group id="email" label="Email address:" label-for="email" description="">
          <b-form-input id="email" type="email" v-model="form.email" required placeholder="Enter email">
          </b-form-input>
        </b-form-group>
        <b-form-group id="password" label="Password:" label-for="password">
          <b-form-input id="password" type="text" v-model="form.password" required placeholder="Enter password">
          </b-form-input>
        </b-form-group>
        <b-button type="submit" variant="primary">Submit</b-button>
        <b-button type="reset" variant="danger">Reset</b-button>
      </b-form>
    </div>

  </div>

</template>

<style scoped>
  .login {
    padding: 30px;
    text-align: center;
  }

  .loginForm {
      padding: 30px;
  }

</style>

<script>
  export default {
    data() {
      return {
        form: {
          email: '',
          name: '',
          food: null,
          checked: []
        },
        show: true
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault();
        alert(JSON.stringify(this.form));
      },
      onReset(evt) {
        evt.preventDefault();
        /* Reset our form values */
        this.form.email = '';
        this.form.name = '';
        this.form.password = '';

        /* Trick to reset/clear native browser form validation state */
        this.show = false;
        this.$nextTick(() => {
          this.show = true
        });
        
      }
    }
  }

</script>

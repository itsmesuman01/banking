<template>
<div class="container">
<form @submit.prevent="submitForm" class="border border-1 border-dotted border-warning pt-4 pb-4 m-5">
    <div class="row d-flex flex-column align-items-center mt-5 mb-5">
        <div class="col-md-5">
            <h1 class="text-center text-danger"><b>CREATE ACCOUNT</b></h1>
        </div>
    </div>
    <div class="row d-flex flex-column align-items-center">
        <div class="col-md-4">
            <div class="form-group">
            <label>Name</label>
            <input v-model="name" type="text" class="form-control" maxlength="50" required><br>
            </div>
        </div>
        <div class="col-md-4">
            <div class="form-group">
                <label>Email</label>
                <input v-model="email" type="email" class="form-control" maxlength="50" required><br>
            </div>
        </div>
        <div class="col-md-4">
            <div class="form-group">
                <label>Password</label>
                <input v-model="password" type="password" class="form-control" maxlength="50" required><br>
            </div>
        </div>
        <div class="col-md-4">
            <div class="form-group">
                <label>Confirmation Password</label>
                <input v-model="password_confirmation" type="password" class="form-control" maxlength="50" required><br>
            </div>
        </div>
        <div class="col-md-4 text-center">
            <div class="form-group">
                <input type="submit" class="btn btn-primary" value="Register">&nbsp;
                <RouterLink to="/" class="btn btn-danger">Login</RouterLink>
            </div>
        </div>
    </div>
</form>
</div>
</template>

<script>
import axios from 'axios'
const url = 'http://127.0.0.1:8000/api/'
export default {
  data() {
    return {
      name: '',
      email: '',
      password: '',
      password_confirmation: '',
    }
  },
  methods: {
    submitForm() {
      const formData = {
        'name': this.name,
        'email': this.email,
        'password': this.password,
        'password_confirmation': this.password_confirmation,
      };
      axios.post(url + 'register', formData)
        .then(response => {
          console.log(response);
          const message = response.data.message;
          const id = response.data.id;
          this.$router.push({ path: 'otp', query: { id } });
        })
        .catch(error => {
          console.error(error);
        });
        this.name = ''
        this.email = ''
        this.password = ''
        this.password_confirmation = ''
    }
  }
}
</script>
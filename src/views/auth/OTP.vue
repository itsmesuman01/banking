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
                <label>Please Enter Your <b class="text-success">OTP</b> That Was Sent To Your Gmail</label>
                <input v-model="otp" type="text" class="form-control" maxlength="50" required><br>
                </div>
            </div>
            <div class="col-md-4 text-center">
                <div class="form-group">
                    <input type="submit" class="btn btn-success" value="Verify">&nbsp;
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
          otp: '',
          id: '',
        }
      },
      mounted()
        {
            this.id = this.$route.query.id || '999';
        },
      methods: {
        submitForm() {
          const formData = {
            'id': this.id,
            'otp': this.otp,
          };
          axios.post(url + 'otp', formData)
            .then(response => {
              console.log(response);
              const message = response.data.message;
              alert(message);
              this.$router.push('/');
            })
            .catch(error => {
              console.error(error);
            });
            this.otp = ''
        }
      }
    }
    </script>
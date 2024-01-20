<template>
    <div class="container">
    <form @submit.prevent="submitForm(formcode)" class="border border-1 border-dotted border-warning pt-4 pb-4 m-5">
        <div class="row d-flex flex-column align-items-center mt-5 mb-5">
            <div class="col-md-5">
                <h1 class="text-center text-danger"><b>UPDATE PASSWORD</b></h1>
            </div>
        </div>
        <div v-if="otpSent">
          <div class="row d-flex flex-column align-items-center">
              <div class="col-md-4">
                  <div class="form-group">
                  <label>Please Enter Your Email Id To Receive <b class="text-success">OTP</b></label>
                  <input v-model="email" type="email" class="form-control" maxlength="50" required><br>
                  </div>
              </div>
              <div class="col-md-4 text-center">
                  <div class="form-group">
                      <input type="submit" class="btn btn-success" value="Send">&nbsp;
                  </div>
              </div>
          </div>
        </div>
        <div v-else-if="otpReceive">
          <div class="row d-flex flex-column align-items-center">
              <div class="col-md-4">
                  <div class="form-group">
                  <label>Please Enter Your <b class="text-success">OTP</b></label>
                  <input v-model="otp" type="text" class="form-control" maxlength="50" required><br>
                  </div>
              </div>
              <div class="col-md-4 text-center">
                  <div class="form-group">
                      <input type="submit" class="btn btn-success" value="Verify">&nbsp;
                  </div>
              </div>
          </div>
        </div>
        <div v-else>
          <div class="row d-flex flex-column align-items-center">
              <div class="col-md-4">
                  <div class="form-group">
                  <label>Old Password</label>
                  <input v-model="old_password" type="password" class="form-control" maxlength="50" required><br>
                  </div>
              </div>
              <div class="col-md-4">
                  <div class="form-group">
                  <label>New Password</label>
                  <input v-model="password" type="password" class="form-control" maxlength="50" required><br>
                  </div>
              </div>
              <div class="col-md-4">
                  <div class="form-group">
                  <label>Confirm New Password</label>
                  <input v-model="password_confirmation" type="password" class="form-control" maxlength="50" required><br>
                  </div>
              </div>
              <div class="col-md-4 text-center">
                  <div class="form-group">
                      <input type="submit" class="btn btn-success" value="Update">&nbsp;
                  </div>
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
          email: '',
          id: '',
          formcode: 1,
          otpSent: true,
          otpReceive: false,
          old_password: '',
          password: '',
          password_confirmation: '',
          otp: '',
        }
      },
      methods: {
        submitForm(formcode) {
          if(formcode == 1)
          {
              const formData = {
              'email': this.email,
            };
            axios.post(url + 'updateandforgetpasswordverify', formData)
              .then(response => {
                console.log(response)
                if(response.data.code == 200)
                {
                  const message = response.data.message
                  alert(message)
                  this.id = response.data.id
                  this.formcode = 2;
                  this.otpSent = false
                  this.otpReceive = true
                }
                else
                {
                  const message = response.data.message
                  alert(message)
                }
              })
              .catch(error => {
                console.error(error)
              });
              this.email = ''
          }
          else if(formcode == 2)
          {
            const formData = {
              'id': this.id,
              'otp': this.otp,
            };
            axios.post(url + 'updateandforgetpasswordverifyotp', formData)
              .then(response => {
                console.log(response)
                if(response.data.code == 200)
                {
                  const message = response.data.message
                  alert(message)
                  this.id = response.data.id
                  this.formcode = 3;
                  this.otpReceive = false
                }
                else
                {
                  const message = response.data.message
                  alert(message)
                }
              })
              .catch(error => {
                console.error(error)
              });
              this.otp = ''
          }
          else
          {
            const formData = {
              'id' : this.id,
              'old_password': this.old_password,
              'password': this.password,
              'password_confirmation': this.password_confirmation,
            };
            axios.post(url + 'updatepassword', formData)
              .then(response => {
                console.log(response)
                if(response.data.code == 200)
                {
                  const message = response.data.message
                  alert(message)
                  this.$router.push('/');
                }
                else
                {
                  const message = response.data.message
                  alert(message)
                }
              })
              .catch(error => {
                console.error(error)
              });
              this.old_password = ''
              this.password = ''
              this.password_confirmation = ''
          }
        }
      }
    }
    </script>
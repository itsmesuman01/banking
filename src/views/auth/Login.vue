<template>
    <div class="container">
    <form @submit.prevent="submitForm" class="border border-1 border-dotted border-warning pt-4 pb-4 m-5">
        <div class="row d-flex flex-column align-items-center mt-5 mb-5">
            <div class="col-md-5">
                <h1 class="text-center text-danger"><b>LOGIN</b></h1>
            </div>
        </div>
        <div class="row d-flex flex-column align-items-center">
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
            <div class="col-md-4 text-center">
                <div class="form-group">
                    <input type="submit" class="btn btn-primary" value="Login">&nbsp;
                    <RouterLink to="/register" class="btn btn-danger">Register</RouterLink>&nbsp;
                    <RouterLink to="/updatepassword" class="btn btn-warning">Update</RouterLink>&nbsp;
                    <RouterLink to="/forgetpassword" class="btn btn-info">Forget</RouterLink>
                </div>
            </div>
        </div>
    </form>
    </div>
</template>
<script>
    import axios from 'axios'
    const url = 'http://127.0.0.1:8000/api/'
    export default{
        data()
        {
            return{
                email: '',
                password: '',
            }
        },
        methods:{
            submitForm()
            {
                const formData = {
                    'email': this.email,
                    'password': this.password
                }
                axios.post(url + 'login', formData).then(response =>{
                    if(response.data.code == 200)
                    {
                        const message = response.data.message;
                        const access_token = response.data.access_token;
                        this.$router.push('/dashboard')
                    }
                    else
                    {
                        const message = response.data.message;
                        alert(message)
                    }
                }).catch(error =>
                {
                    console.log(error)
                })
                this.email = ''
                this.password = ''
            }
        }
    }
</script>
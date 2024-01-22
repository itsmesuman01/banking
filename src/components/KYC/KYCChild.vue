<template>
    <div class="mainbar">
        <table class="table table-responsive table-border">
            <thead>
                <tr>
                    <th>Full Name</th>
                    <th>Citizenship No</th>
                    <th>Email</th>
                    <th>Primary Contact</th>
                    <th>Secondary Contact</th>
                    <th>Job</th>
                    <th>Yearly Income</th>
                    <th>Yearly Family Income</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(kycdata, index) in this.kycdata" :key="index">
                    <td>{{ kycdata.first_name }}</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </tbody>
        </table>
    </div>
    </template>
    <script>
    import axios from 'axios'
    const url = 'http://127.0.0.1/api/auth/kyc/'
    export default{
        data(){
            return{
                kycdata: '',
                message: '',
            }
        },
        mounted()
        {
            axios.get(url + 'index').then(response =>{
                console.log(response)
                if(response.get.code == 200)
                {
                    this.kycdata = response.get.kycdata;
                    this.message = response.get.message;
                    alert(this.message)
                }
                this.message = response.get.message;
                alert(this.message)
            }).catch(error =>
            {
                console.log(error)
            });
        }
    }
    </script>
    
    <style scoped>
    .mainbar{
        height:100%;
        width:100%;
        background-color: white;
        color:black;
    }
    </style>
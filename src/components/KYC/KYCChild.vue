<template>
    <div class="mainbar p-5">
        <RouterLink class="btn btn-danger mb-2" to="kycstore">CREATE</RouterLink>
        <table class="table table-responsive table-custom-border table-hover">
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
                <tr v-for="(kycdata, index) in kycdata" :key="index">
                    <td>{{ kycdata.first_name }}</td>
                    <td>{{ kycdata.citizen_no }}</td>
                    <td>{{ kycdata.email }}</td>
                    <td>{{ kycdata.permanent_contact_no }}</td>
                    <td>{{ kycdata.temporary_contact_no }}</td>
                    <td>{{ kycdata.job }}</td>
                    <td>{{ kycdata.annual_income }}</td>
                    <td>{{ kycdata.annual_family_income }}</td>
                </tr>
            </tbody>
        </table>
    </div>
    </template>
    <script>
    import axios from 'axios'
    const url = 'http://127.0.0.1:8000/api/auth/kyc/'
    export default{
        data(){
            return{
                kycdata: '',
                message: '',
            }
        },
        mounted()
        {
            const accessToken = localStorage.getItem('access_token');
            axios.get(url + 'index', {
                headers: {
                    'Authorization': 'Bearer ' + accessToken,
                    },
            }).then(response =>{
                console.log(response)
                if(response.data.code == 200)
                {
                    this.kycdata = response.data.data;
                    this.message = response.data.message;
                }
                this.message = response.data.message;
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
    .table-custom-border {
        border: 2px solid #ddd;
        border-collapse: collapse;
        width: 100%;
    }
    .table-custom-border th,
    .table-custom-border td {
        border: 1px solid black;
        padding: 15px;
        text-align: left;
    }
    .table-custom-border th {
        background-color: black;
        color: white;
        border: 2px solid #ddd;
    }
    </style>
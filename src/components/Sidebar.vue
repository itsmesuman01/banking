<template>
    <div class="sidebar d-flex flex-column">
        <h2 class="pb-4 text-warning">Sidebar</h2>
        <RouterLink class="sidebar-link" to="/dashboard">Home</RouterLink>
        <RouterLink class="sidebar-link" to="kyc">KYC</RouterLink>
        <RouterLink class="sidebar-link" to="opening">Opening</RouterLink>
        <RouterLink class="sidebar-link" to="chequeissue">Cheque Issues</RouterLink>
        <RouterLink class="sidebar-link" to="deposit">Deposit</RouterLink>
        <RouterLink class="sidebar-link" to="withdraw">Withdrawn</RouterLink>
        <a @click="logout" class="sidebar-link-logout">LOGOUT</a>
    </div>
</template>
<script>
import axios from 'axios'
const url = 'http://127.0.0.1:8000/api/auth/main/'
export default{
    methods:{
        logout(){
            const accessToken = localStorage.getItem('access_token')
            axios.get(url + 'logout', {
                headers: {
                'Authorization': 'Bearer ' + accessToken,
                },
            }).then(response => {
                console.log(response)
                const message = response.data.message;
                alert(message)
                this.$router.push('/')
            }).catch(error => {
                console.log(error)
            })
        }
    }
}
</script>
    
    <style scoped>
    .sidebar{
        height:100%;
        width: 100%;
        background-color: #333;
        color:white;
        padding: 20px;
    }
    .sidebar-link {
        text-decoration: none;
        color: red;
        font-size: 15px;
        font-family: "Arial", sans-serif;
        font-weight: bold;
        transition: color 0.3s ease;
    }

    .sidebar-link:hover {
        color: white;
    }

    .sidebar-link:not(:last-child) {
        border-bottom: 1px solid #555;
        padding-bottom: 25px;
        margin-bottom: 25px;
    }
    .sidebar-link-logout{
        color: white;
        text-decoration: none;
        font-size: 20px;
        font-weight: bold;
        color: white;
        text-align: center;
    }
    </style>
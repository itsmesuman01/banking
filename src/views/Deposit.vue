<template>
    <div class="container-fluid">
        <div class="topbar">
            <Topbar></Topbar>
        </div>
        <div class="section">
            <div class="sidebar">
                <Sidebar></Sidebar>
            </div>
            <div class="mainbar">
                <Deposit></Deposit>
            </div>
        </div>
        <div class="footer">
            <Footer></Footer>
        </div>
    </div>
</template>
<script>
import Topbar from '@/components/Topbar.vue'
import Sidebar from '@/components/Sidebar.vue'
import Footer from '@/components/Footer.vue'
import Deposit from '@/components/DepositChild.vue'

export default{
    components:{
        Topbar,
        Footer,
        Sidebar,
        Deposit
    }
}
</script>
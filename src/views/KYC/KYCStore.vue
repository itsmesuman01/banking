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
                <KYCStore></KYCStore>
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
import KYCStore from '@/components/KYC/KYCStoreChild.vue'

export default{
    components:{
        Topbar,
        Footer,
        Sidebar,
        KYCStore
    }
}
</script>
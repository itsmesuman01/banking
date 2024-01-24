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
                <Opening></Opening>
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
import Opening from '@/components/opening/OpeningChild.vue'

export default{
    components:{
        Topbar,
        Footer,
        Sidebar,
        Opening
    }
}
</script>
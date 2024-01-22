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
                <Withdraw></Withdraw>
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
import Withdraw from '@/components/WithdrawChild.vue'

export default{
    components:{
        Topbar,
        Footer,
        Sidebar,
        Withdraw
    }
}
</script>
<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.container-fluid{
    height:100vh;
    width:100%;
}
.topbar{
    width: 100%;
    height:10%;
    overflow: hidden;
}
.section {
  display: flex;
  width: 100%;
}

.section .sidebar,
.section .mainbar {
  height: 85vh;
}

.section .sidebar {
  width: 280px;
}

.section .mainbar {
  flex: 1;
}
.footer
{
    width: 100%;
    height:5vh;
}
</style>
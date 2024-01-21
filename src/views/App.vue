<template>
    <div class="container-fluid">
        <div class="topbar">

        </div>
        <div class="section">
            <div class="sidebar">

            </div>
            <div class="mainbar">

            </div>
        </div>
        <div class="footer">

        </div>
    </div>
</template>
<script>
</script>
<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.container-fluid{
    height:100vh;
    background-color: black;
}
.topbar{
    width: 1537px;
    height:10vh;
    background-color: red;
}
.section {
  display: flex;
  width: 1537px;
  background-color: blue;
}

.section .sidebar,
.section .mainbar {
  height: 85vh;
}

.section .sidebar {
  width: 280px;
  background-color: pink;
}

.section .mainbar {
  flex: 1;
  background-color: yellow;
}
.footer
{
    width: 1537px;
    height:5vh;
    background-color: orange;
}
</style>
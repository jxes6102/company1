<template>
  <div 
    class="relative w-full h-[100vh] min-h-[100vh] overflow-y-auto overflow-x-hidden bg-slate-900" 
    @scroll="handleScroll"
  >
    <headerView :heightStatus="scrollStutus"></headerView>
    <router-view/>
    <footerView></footerView>
  </div>
</template>
<script setup>
  import headerView from './components/headerView.vue';
  import footerView from './components/footerView.vue';
  import { ref,onMounted } from 'vue';

  const scrollStutus = ref(true)
  const handleScroll = (el) => {
    if(el.target.scrollTop === 0){
      scrollStutus.value = true
    }else{
      scrollStutus.value = false
    }
  }

  onMounted(() => {

  })

</script>
<style lang="scss">
#app {
  position: relative;
  height: 100%;
  width: 100%;
  overflow: auto;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
/*
nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
*/
/* 網頁捲軸【寬度】 */
::-webkit-scrollbar {
  width: 10px;
}

/* 網頁捲軸【背景】顏色 */
::-webkit-scrollbar-track {
  background: #448fc8;
}

/* 網頁捲軸【把手】顏色 */
::-webkit-scrollbar-thumb {
  background: #e1e5e8;
  border-radius: 5px;
}

/* 網頁捲軸【滑過時】把手的顏色 */
::-webkit-scrollbar-thumb:hover {
  background: #fff;
}
</style>

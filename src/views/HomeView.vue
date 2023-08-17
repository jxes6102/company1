<template>
  <div class="relative h-[auto] min-h-[100vh]">
    <!-- <div 
      class="absolute h-auto w-auto opacity-[0.9]"
      :class="menuStatus ? 'top-[-55vh]' : 'top-[-15vh]'"
    >
      <img class="w-[100vw] h-[100vh] md:h-[100vw]" src="@/assets/img/bg-1.jpg" alt="">
    </div> -->
    <div class="relative text-black">home</div>
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="I Don't Wanna Do This Anymore"/> -->
  </div>
</template>

<script setup>
/*eslint-disable*/
// import HelloWorld from '@/components/HelloWorld.vue'
import { useStore } from "vuex";
import { ref,computed,onMounted,watch } from 'vue';
const store = useStore()
const menuStatus = computed(() => {
    return store.state.menuStatus
})
</script>

<style lang="scss" scoped>
</style>

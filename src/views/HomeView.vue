<template>
  <div class="relative h-[auto] min-h-[100vh]">
    <!-- <div 
      class="absolute h-auto w-auto opacity-[0.9]"
      :class="menuStatus ? 'top-[-55vh]' : 'top-[-15vh]'"
    >
      <img class="w-[100vw] h-[100vh] md:h-[100vw]" src="@/assets/img/bg-1.jpg" alt="">
    </div> -->
    <div class="relative text-black">
      <swiper
        :slides-per-view="1"
        :space-between="0"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
      >
        <!-- <swiper-slide>
          <div class="w-[100vw] h-[100vh] bg-[url('/src/assets/img/test1.png')] bg-cover bg-center bg-no-repeat">Slide 1</div>
        </swiper-slide>
        <swiper-slide>
          <div class="w-[100vw] h-[100vh] bg-[url('/src/assets/img/test2.png')] bg-cover bg-center bg-no-repeat">Slide 2</div>
        </swiper-slide>
        <swiper-slide>
          <div class="w-[100vw] h-[100vh] bg-[url('/src/assets/img/test1.png')] bg-cover bg-center bg-no-repeat">Slide 3</div>
        </swiper-slide>
        <swiper-slide>
          <div class="w-[100vw] h-[100vh] bg-[url('/src/assets/img/test2.png')] bg-cover bg-center bg-no-repeat">Slide 3</div>
        </swiper-slide> -->
        <swiper-slide v-for="(item, index) in swiperData" :key="index">
          <div 
            class="w-[100vw] h-[100vh] bg-cover bg-center bg-no-repeat mine-flex-center"
            :style="{ 'background-image': 'url(' + item.url + ')' }"
          >
            <div class="text-3xl">{{ '這是標題:' + (index+1)}}</div>
          </div>
        </swiper-slide>
      </Swiper>
    </div>
    <div class="w-[100vw] h-[23vw] bg-[url('/src/assets/img/bg-4.jpg')] bg-cover bg-center bg-no-repeat"></div>
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="I Don't Wanna Do This Anymore"/> -->
  </div>
</template>

<script setup>
/*eslint-disable*/
// import HelloWorld from '@/components/HelloWorld.vue'
import { useStore } from "vuex";
import { ref,computed,onMounted,watch } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
const store = useStore()
const menuStatus = computed(() => {
    return store.state.menuStatus
})
const swiperData = ref([
  {url:require('../assets/img/test1.png')},
  {url:require('../assets/img/test2.png')},
  {url:require('../assets/img/test1.png')},
  {url:require('../assets/img/test2.png')}
])

const onSwiper = (swiper) => {
  console.log(swiper);
};

const onSlideChange = () => {
  console.log('slide change');
};
</script>

<style lang="scss" scoped>
</style>

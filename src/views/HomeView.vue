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
        <swiper-slide v-for="(item, index) in swiperData" :key="index">
          <div 
            class="w-[100vw] h-[100vh] bg-cover bg-center bg-no-repeat mine-flex-center"
            :style="{ 'background-image': 'url(' + item.url + ')' }"
          >
            <div class="text-3xl bg-[red]">{{ '這是標題:' + (index+1)}}</div>
          </div>
        </swiper-slide>
      </Swiper>
    </div>
    <div class="w-[100vw] h-[23vw] bg-[url('/src/assets/img/bg-4.jpg')] bg-cover bg-center bg-no-repeat"></div>
    <div class="w-[100vw] h-auto py-[30px] bg-[#272d33] flex justify-around items-center flex-wrap">
      <div class="w-[80%] md:w-[auto] text-white text-xl md:text-2xl font-bold">讓XXXX循環不息，把美好XX留給下一代～</div>
      <div class="w-[80%] md:w-[auto]"><button class=" bg-[#009B4C] px-[20px] py-[12px] text-white text-xl font-bold rounded-md">聯絡我們</button></div>
    </div>
    <div class="w-[100vw] h-auto bg-[url('/src/assets/img/bg-2.jpg')] bg-cover bg-center bg-no-repeat flex justify-around items-center flex-wrap">
      <div class="w-[100%] h-auto py-[30px] text-[red] text-xl md:text-4xl font-bold">最新消息</div>
      <div class="w-[80%] h-[auto] flex justify-evenly items-center flex-wrap gap-x-4 gap-y-10">
        <div 
          class="w-[90vw] h-[40vh] md:w-[25vw] md:h-[20vw] flex justify-center items-center flex-wrap"
          v-for="(item, index) in informationData" :key="index"
        >
          <div class="w-[100%] h-[80%] bg-cover bg-center bg-no-repeat" :style="{ 'background-image': 'url(' + item.url + ')' }"></div>
          <div class="w-[100%] h-[20%] flex justify-evenly items-center flex-wrap">
            <div class="w-[100%] h-auto text-xl md:text-2xl text-[red] font-semibold">{{item.title}}</div>
            <div class="w-[100%] h-auto text-lg md:text-xl text-[red]">{{item.time}}</div>
          </div>
        </div>
      </div>
      <div class="w-[100%] h-auto py-[30px]"><button class=" bg-[#009B4C] px-[20px] py-[12px] text-white text-xl font-bold rounded-md">瀏覽全部</button></div>
    </div>
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
  {url:require('../assets/img/dog-1.png')},
  {url:require('../assets/img/dog-2.png')},
  {url:require('../assets/img/dog-3.png')},
  {url:require('../assets/img/dog-4.png')}
])

const informationData = ref([
  {
    url:require('../assets/img/dog-5.png'),
    title:'這是標題5',
    time:'2023-04-29 10:02:20'
  },
  {
    url:require('../assets/img/dog-6.png'),
    title:'這是標題6',
    time:'2023-04-29 10:02:20'
  },
  {
    url:require('../assets/img/dog-7.png'),
    title:'這是標題7',
    time:'2023-04-29 10:02:20'
  },
  {
    url:require('../assets/img/dog-8.png'),
    title:'這是標題8',
    time:'2023-04-29 10:02:20'
  },
  {
    url:require('../assets/img/dog-9.png'),
    title:'這是標題9',
    time:'2023-04-29 10:02:20'
  },
])

const onSwiper = (swiper) => {
  // console.log(swiper);
};

const onSlideChange = () => {
  console.log('slide change');
};
</script>

<style lang="scss" scoped>
</style>

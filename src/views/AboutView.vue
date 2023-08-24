<template>
  <div class="relative h-[auto] min-h-[100vh]">
    <bannerCompont></bannerCompont>
    <div class="shadow-style-1 w-[100%] h-auto min-h-[50vh] py-4 bg-[url('/src/assets/img/green-10.jpg')] bg-cover bg-center bg-no-repeat flex justify-center items-center flex-wrap gap-y-4">
      <div class="w-[100%] md:w-[50%] h-[auto] flex justify-center items-center flex-wrap gap-y-10">
        <div class="w-[80%] h-[auto] flex justify-center items-center flex-wrap gap-y-4">
          <div class="w-[100%] h-auto text-left text-2xl font-bold">公司簡介:</div>
          <div class="w-[100%] h-auto text-lg">公司簡介公司簡介公司簡介公司簡介公司簡介公司簡介公司簡介公司簡介公司簡介公司簡介公司簡介公司簡介公司簡介公司簡介公司簡介公司簡介公司簡介公司簡介公司簡介公司簡介公司簡介公司簡介公司簡介公司簡介</div>
        </div>
        <div class="w-[80%] h-[auto] flex justify-center items-center flex-wrap gap-y-4">
          <div class="w-[100%] h-auto text-left text-2xl font-bold">公司理念:</div>
          <div class="w-[100%] h-auto text-lg">公司理念公司理念公司理念公司理念公司理念公司理念公司理念公司理念公司理念公司理念公司理念公司理念公司理念公司理念公司理念公司理念公司理念公司理念公司理念公司理念公司理念公司理念公司理念公司理念</div>
        </div>
      </div>
      <div class="relative w-[100%] md:w-[50%] h-[100%] flex justify-center items-center flex-wrap">
        <div class="relative w-[80%] md:w-[60%] h-[auto]">
          <swiper
            :slides-per-view="1"
            :space-between="0"
            @swiper="onSwiper"
            @slideChange="onSlideChange"
          >
            <swiper-slide v-for="(item, index) in swiperData" :key="index">
              <div 
                class="rounded-md w-[100%] h-[70vw] md:h-[30vw] bg-cover bg-center bg-no-repeat mine-flex-center"
                :style="{ 'background-image': 'url(' + item.url + ')' }"
              >
                <div class="text-3xl bg-[red]">{{ '這是標題:' + (index+1)}}</div>
              </div>
            </swiper-slide>
          </Swiper>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
/*eslint-disable*/
import bannerCompont from '@/components/bannerCompont.vue'
import {ref} from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
const swiperData = ref([
  {url:require('../assets/img/dog-1.png')},
  {url:require('../assets/img/dog-2.png')},
  {url:require('../assets/img/dog-3.png')},
  {url:require('../assets/img/dog-4.png')}
])

const onSwiper = (swiper) => {
  // console.log(swiper);
};

const onSlideChange = () => {
  console.log('slide change');
};
</script>

<template>
  <div class="relative h-[auto] min-h-[100vh]">
    <div class="shadow-style-1 relative text-black w-[100vw] h-auto py-4 bg-[url('/src/assets/img/green-7.jpg')] bg-cover bg-center bg-no-repeat mine-flex-center">
      <swiper
        class="relative text-black w-[80%] h-[48vw] md:w-[60%] md:h-[36vw] rounded-md mine-flex-center"
        :slides-per-view="1"
        :space-between="0"
        :navigation="{
          nextEl: '.next-button',
          prevEl: '.previous-button',
        }"
        :loop='true'
        @swiper="onSwiper"
        @slideChange="onSlideChange"
      >
        <div @click="next" class="next-button absolute w-[30px] h-[30px] md:w-[60px] md:h-[60px] top-1/2 -translate-y-1/2 right-[3%] z-[30] cursor-pointer">
          <el-icon :color="'#a7f2a7'" :size="isMobile ? '30' : '60'"><ArrowRightBold /></el-icon>
        </div>
        <div @click="previous" class="previous-button absolute w-[30px] h-[30px] md:w-[60px] md:h-[60px] top-1/2 -translate-y-1/2 left-[3%] z-[30] cursor-pointer">
          <el-icon :color="'#a7f2a7'" :size="isMobile ? '30' : '60'"><ArrowLeftBold /></el-icon>
        </div>
        <swiper-slide v-for="(item, index) in swiperData" :key="index">
          <div
            class="w-[100%] h-[100%] bg-cover bg-center bg-no-repeat mine-flex-center"
            :style="{ 'background-image': 'url(' + item.url + ')' }"
          >
            <!-- <div class="text-3xl bg-[red]">{{ '這是標題:' + (index+1)}}</div> -->
          </div>
        </swiper-slide>
      </Swiper>
    </div>
    <div class="shadow-style-2 w-[100vw] h-auto py-[20px] bg-[url('/src/assets/img/green-9.jpg')] bg-cover bg-center bg-no-repeat flex justify-around items-center flex-wrap">
      <div class="w-auto h-auto max-w-[90%] flex justify-around items-center flex-wrap gap-x-2">
        <div class="w-[auto] text-black text-xl md:text-2xl font-bold">回收補助難事交給菁鉐。永續保衛家園交給您們!</div>
        <div class="w-[auto]"><button @click="toContact" class=" bg-[#009B4C] px-[20px] py-[12px] text-white text-xl font-bold rounded-md">聯絡我們</button></div>
      </div>
    </div>
    <div class="shadow-style-1 relative w-[100vw] h-auto py-4 flex justify-center items-center flex-wrap bg-[url('/src/assets/img/green-5.jpg')] bg-cover bg-center bg-no-repeat gap-y-10">
      <div class="w-[100%] h-auto mine-title-style">最新消息</div>
      <div class="w-[100%] h-[auto] max-w-[1140px] flex justify-center items-center flex-wrap gap-[1vw]">
        <div
          class="w-auto h-auto flex justify-center items-center flex-col"
          v-for="(item, index) in informationData" :key="index"
        >
          <div @click="toInformationDetail(item)" class="w-[80vw] h-[48vw] md:w-[25vw] md:h-[15vw] max-w-[350px] max-h-[210px] rounded-md bg-cover bg-center bg-no-repeat" :style="{ 'background-image': 'url(' + item.url + ')' }"></div>
          <div @click="toInformationDetail(item)" class="w-[100%] h-auto flex justify-evenly items-center flex-col">
            <div class="w-auto h-auto text-xl md:text-2xl text-[black] font-semibold">{{item.title}}</div>
            <div class="w-auto h-auto text-lg md:text-xl text-[black]">{{item.time}}</div>
          </div>
        </div>
      </div>
      <div class="w-[100%] h-auto py-[20px]">
        <button @click="toInformation" class=" bg-[#009B4C] px-[20px] py-[12px] text-white text-xl font-bold rounded-md">瀏覽全部</button>
      </div>
    </div>
    <div class="shadow-style-1 relative w-[100vw] h-[auto] py-10 flex justify-center items-center flex-wrap bg-[url('/src/assets/img/green-6.jpg')] bg-cover bg-center bg-no-repeat gap-y-4">
      <div class="w-[100%] h-auto mine-title-style">合作廠商</div>
      <div class="w-[90%] h-[auto] flex justify-evenly items-center flex-wrap gap-x-4 gap-y-10 p-5 rounded-xl">
        <div 
          class="transition-all hover:scale-110 w-[25%] h-auto flex justify-center items-center flex-wrap"
          v-for="(item, index) in institutionData" :key="index"
        >
          <!-- <div class="w-[15vw] h-[15vw] md:w-[10vw] md:h-[10vw] bg-cover bg-center bg-no-repeat" :style="{ 'background-image': 'url(' + item.url + ')' }"></div> -->
          <img class="w-[100%] h-[100%] max-w-[300px] max-h-[200px]" :src="item.url" alt="">
        </div>
      </div>
      <div class="w-[100%] h-auto py-[20px]">
        <button class=" bg-[#009B4C] px-[20px] py-[12px] text-white text-xl font-bold rounded-md">瀏覽更多</button>
      </div>
    </div>
    <!-- <HelloWorld msg="I Don't Wanna Do This Anymore"/> -->
  </div>
</template>

<script setup>
/*eslint-disable*/
// import HelloWorld from '@/components/HelloWorld.vue'
import { useStore } from "vuex";
import { ref,computed,inject } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
// import { Navigation } from "swiper";
import { useRouter } from "vue-router";
import 'swiper/css';
import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';
const router = useRouter()
const store = useStore()
const isMobile = computed(() => {
    return store.state.isMobile
})
const menuStatus = computed(() => {
    return store.state.menuStatus
})
const swiperData = ref([
  {url:require('../assets/img/green-1.png')},
  {url:require('../assets/img/green-2.png')},
  {url:require('../assets/img/green-3.png')},
])

const informationData = inject('informationData')

const institutionData = ref([
  {
    url:require('../assets/img/factory-1.png'),
    title:'這是標題1',
  },
  {
    url:require('../assets/img/factory-2.png'),
    title:'這是標題2',
  },
  {
    url:require('../assets/img/factory-3.png'),
    title:'這是標題3',
  },
  {
    url:require('../assets/img/factory-4.png'),
    title:'這是標題4',
  },
  {
    url:require('../assets/img/factory-5.png'),
    title:'這是標題5',
  },
  {
    url:require('../assets/img/factory-6.png'),
    title:'這是標題6',
  },
])

// let img = new Image()
// img.src = require('../assets/img/factory-1.png')
// img.onload = function () {
//     console.log(`the image dimensions are ${img.width}x${img.height}`)
// };
// onMounted(() => {
// })

let swiperItem = null
const onSwiper = (element) => {
  // console.log('element',element)
  swiperItem = element;
};

const onSlideChange = () => {
  // console.log('slide change');
};

const next = () => {
  // console.log('next')
  swiperItem.slideNext()
}

const previous = () => {
  // console.log('previous')
  swiperItem.slidePrev()
}

const toInformation = () => {
  router.push({ path: 'information' })
}

const toInformationDetail = (item) => {
  store.commit('setInformationChild',item)
  toInformation()
}

const toContact = () => {
  router.push({ path: 'contact' })
}

</script>

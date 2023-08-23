<template>
  <div class="relative h-[auto] min-h-[100vh]">
    <div class="relative text-black">
      <swiper
        :slides-per-view="1"
        :space-between="0"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
      >
        <swiper-slide v-for="(item, index) in swiperData" :key="index">
          <div 
            class="w-[100vw] h-[60vw] bg-cover bg-center bg-no-repeat mine-flex-center"
            :style="{ 'background-image': 'url(' + item.url + ')' }"
          >
            <div class="text-3xl bg-[red]">{{ '這是標題:' + (index+1)}}</div>
          </div>
        </swiper-slide>
      </Swiper>
    </div>
    <div class="shadow-style-1 relative w-[100vw] h-auto py-4 flex justify-center items-center flex-wrap bg-[url('/src/assets/img/green-5.jpg')] bg-cover bg-center bg-no-repeat">
      <div class="w-[100%] h-auto text-2xl md:text-5xl py-2 font-bold text-[#21321a]">最新消息</div>
      <div class="w-[80%] h-[auto] flex justify-evenly items-center flex-wrap gap-4">
        <div
          class="w-auto h-auto flex justify-center items-center flex-col"
          v-for="(item, index) in informationData" :key="index"
        >
          <div class="w-[60vw] h-[50vw] md:w-[25vw] md:h-[20vw] rounded-md bg-cover bg-center bg-no-repeat" :style="{ 'background-image': 'url(' + item.url + ')' }"></div>
          <div class="w-[auto] h-auto flex justify-evenly items-center flex-wrap">
            <div class="w-[100%] h-auto text-xl md:text-2xl text-[red] font-semibold">{{item.title}}</div>
            <div class="w-[100%] h-auto text-lg md:text-xl text-[red]">{{item.time}}</div>
          </div>
        </div>
      </div>
      <div class="w-[100%] h-auto py-[20px]">
        <button @click="toInformation" class=" bg-[#009B4C] px-[20px] py-[12px] text-white text-xl font-bold rounded-md">瀏覽全部</button>
      </div>
    </div>
    <div class="shadow-style-2 w-[100vw] h-auto py-[20px] bg-[url('/src/assets/img/green-9.jpg')] bg-cover bg-center bg-no-repeat flex justify-around items-center flex-wrap">
      <div class="w-[80%] md:w-[auto] text-black text-xl md:text-2xl font-bold">讓XXXX循環不息，把美好XX留給下一代～</div>
      <div class="w-[80%] md:w-[auto]"><button class=" bg-[#009B4C] px-[20px] py-[12px] text-white text-xl font-bold rounded-md">聯絡我們</button></div>
    </div>
    <div class="shadow-style-1 relative w-[100vw] h-[auto] py-4 flex justify-center items-center flex-wrap bg-[url('/src/assets/img/green-6.jpg')] bg-cover bg-center bg-no-repeat">
      <div class="w-[100%] h-auto text-2xl md:text-5xl py-4 font-bold text-[#21321a]">合作廠商</div>
      <div class="w-[80%] h-[auto] flex justify-evenly items-center flex-wrap gap-x-4 gap-y-10">
        <div 
          class="transition-all hover:scale-110 w-auto h-auto flex justify-center items-center flex-wrap"
          v-for="(item, index) in institutionData" :key="index"
        >
          <div class="w-[50vw] h-[50vw] md:w-[15vw] md:h-[15vw] bg-cover bg-center bg-no-repeat" :style="{ 'background-image': 'url(' + item.url + ')' }"></div>
          <div class="w-[100%] h-auto flex justify-evenly items-center flex-wrap">
            <div class="w-[100%] h-auto text-xl md:text-2xl text-[red] font-semibold">{{item.title}}</div>
          </div>
        </div>
      </div>
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
import { useRouter } from "vue-router";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
const router = useRouter()
const store = useStore()
const menuStatus = computed(() => {
    return store.state.menuStatus
})
const swiperData = ref([
  {url:require('../assets/img/green-1.png')},
  {url:require('../assets/img/green-2.png')},
  {url:require('../assets/img/green-3.png')}
])

const informationData = ref([
  {
    url:require('../assets/img/dog-1.png'),
    title:'這是標題1',
    time:'2023-04-29 10:02:20'
  },
  {
    url:require('../assets/img/dog-2.png'),
    title:'這是標題2',
    time:'2023-04-29 10:02:20'
  },
  {
    url:require('../assets/img/dog-3.png'),
    title:'這是標題3',
    time:'2023-04-29 10:02:20'
  },
  {
    url:require('../assets/img/dog-4.png'),
    title:'這是標題4',
    time:'2023-04-29 10:02:20'
  },
  {
    url:require('../assets/img/dog-5.png'),
    title:'這是標題5',
    time:'2023-04-29 10:02:20'
  },
])

const institutionData = ref([
  {
    url:require('../assets/img/institution-1.png'),
    title:'這是標題1',
  },
  {
    url:require('../assets/img/institution-2.png'),
    title:'這是標題2',
  },
  {
    url:require('../assets/img/institution-3.png'),
    title:'這是標題3',
  },
  {
    url:require('../assets/img/institution-4.png'),
    title:'這是標題4',
  },
  {
    url:require('../assets/img/institution-5.png'),
    title:'這是標題5',
  },
  {
    url:require('../assets/img/institution-6.png'),
    title:'這是標題6',
  },
])

const onSwiper = (swiper) => {
  // console.log(swiper);
};

const onSlideChange = () => {
  console.log('slide change');
};

const toInformation = () => {
  router.push({ path: 'information' })
}

</script>

<style lang="scss" scoped>
.shadow-style-1{
  box-shadow:0 0 80px 40px rgba(255, 255, 255, 0.9) inset;
}

.shadow-style-2{
  box-shadow:0 0 20px 10px rgba(255, 255, 255, 0.9) inset;
}
</style>

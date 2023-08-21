<template>
    <div class="relative h-[auto] min-h-[100vh]">
        <bannerCompont></bannerCompont>
        <div class="w-[100vw] h-auto py-[40px] bg-[url('/src/assets/img/bg-2.jpg')] bg-cover bg-center bg-no-repeat flex justify-around items-center flex-wrap">
            <div class="w-[80%] h-auto py-[20px] text-[red] text-xl md:text-4xl font-bold flex justify-start items-center flex-wrap">最新消息列表</div>
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
        </div>
    </div>
</template>

<script setup>
/*eslint-disable*/
import bannerCompont from '@/components/bannerCompont.vue'
import {ref} from 'vue'

console.log('最新消息列表')
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
</script>
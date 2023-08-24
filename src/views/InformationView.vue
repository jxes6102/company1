<template>
    <div class="relative h-[auto] min-h-[100vh]">
        <bannerCompont></bannerCompont>
        <div class="shadow-style-1 w-[100vw] h-auto py-[40px] bg-[url('/src/assets/img/green-11.jpg')] bg-cover bg-center bg-no-repeat flex justify-around items-center flex-wrap">
            <div v-if="!openStatus" class="w-[80%] h-auto py-[20px] text-[black] text-xl md:text-4xl font-bold flex justify-start items-center flex-wrap">最新消息列表</div>
            <div v-if="!openStatus" class="w-[80%] h-[auto] flex justify-evenly items-center flex-wrap gap-x-4 gap-y-10">
                <div 
                    class="w-[90vw] h-[40vh] md:w-[25vw] md:h-[20vw] flex justify-center items-center flex-wrap"
                    v-for="(item, index) in informationData" :key="index"
                >
                    <div class="w-[100%] h-[80%] bg-cover bg-center bg-no-repeat" @click="open(item)" :style="{ 'background-image': 'url(' + item.url + ')' }"></div>
                    <div class="w-[100%] h-[20%] flex justify-evenly items-center flex-wrap">
                        <div class="w-[100%] h-auto text-xl md:text-2xl text-[black] font-semibold" @click="open(item)">{{item.title}}</div>
                        <div class="w-[100%] h-auto text-lg md:text-xl text-[black]">{{item.time}}</div>
                    </div>
                </div>
            </div>
            <div v-if="openStatus" class="w-[80%] h-[auto] flex justify-center items-center flex-wrap gap-y-10">
              <div class="w-[100%] h-auto text-3xl text-black text-left">{{openData.title}}</div>
              <div class="w-[100%] h-auto text-black text-left">{{openData.time}}</div>
              <div class="w-[80%] h-[50vw] md:w-[50%] md:h-[20vw] bg-cover bg-center bg-no-repeat" :style="{ 'background-image': 'url(' + openData.url + ')' }"></div>
              <div class="w-[100%] h-auto text-black text-left">{{openData.imgText}}</div>
              <div class="w-[100%] h-auto text-black text-left">{{openData.content1}}</div>
              <div class="w-[100%] h-auto text-black text-left">{{openData.content2}}</div>
              <div class="w-[100%] h-auto py-[30px]">
                <button @click="back" class="bg-[#009B4C] px-[20px] py-[12px] text-white text-xl font-bold rounded-md" >返回列表</button>
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
    time:'2023-04-29 10:02:20',
    imgText:'狗狗不但順利從桌上拿下手電筒，還馬上按下電源測試。圖/翻攝自微博',
    content1:'不少人認為狗狗是一種非常聰明且易於訓練的動物，有些品種的狗狗智商甚至和3、4歲的兒童不相上下。有飼主就在微博上分享自家黃金獵犬不但能和她遠端通話，甚至還會在夜晚拿著手電筒去接她回家。',
    content2:'從攝影機紀錄可以看到，飼主從遠端呼喚著愛犬的名字「冬瓜」，只見冬瓜爬起來尋找主人的身影，接著很快就明白主人正在透過手機跟牠講話。原來是主人手機快沒電，叫狗狗拿桌上的手電筒到村口去接她。只見冬瓜不但馬上就從正確位置拿到手電筒，還成功把電源打開，興高采烈地準備去迎接主人。'
  },
  {
    url:require('../assets/img/dog-6.png'),
    title:'這是標題6',
    time:'2023-04-29 10:02:20',
    imgText:'狗狗不但順利從桌上拿下手電筒，還馬上按下電源測試。圖/翻攝自微博',
    content1:'不少人認為狗狗是一種非常聰明且易於訓練的動物，有些品種的狗狗智商甚至和3、4歲的兒童不相上下。有飼主就在微博上分享自家黃金獵犬不但能和她遠端通話，甚至還會在夜晚拿著手電筒去接她回家。',
    content2:'從攝影機紀錄可以看到，飼主從遠端呼喚著愛犬的名字「冬瓜」，只見冬瓜爬起來尋找主人的身影，接著很快就明白主人正在透過手機跟牠講話。原來是主人手機快沒電，叫狗狗拿桌上的手電筒到村口去接她。只見冬瓜不但馬上就從正確位置拿到手電筒，還成功把電源打開，興高采烈地準備去迎接主人。'
  },
  {
    url:require('../assets/img/dog-7.png'),
    title:'這是標題7',
    time:'2023-04-29 10:02:20',
    imgText:'狗狗不但順利從桌上拿下手電筒，還馬上按下電源測試。圖/翻攝自微博',
    content1:'不少人認為狗狗是一種非常聰明且易於訓練的動物，有些品種的狗狗智商甚至和3、4歲的兒童不相上下。有飼主就在微博上分享自家黃金獵犬不但能和她遠端通話，甚至還會在夜晚拿著手電筒去接她回家。',
    content2:'從攝影機紀錄可以看到，飼主從遠端呼喚著愛犬的名字「冬瓜」，只見冬瓜爬起來尋找主人的身影，接著很快就明白主人正在透過手機跟牠講話。原來是主人手機快沒電，叫狗狗拿桌上的手電筒到村口去接她。只見冬瓜不但馬上就從正確位置拿到手電筒，還成功把電源打開，興高采烈地準備去迎接主人。'
  },
  {
    url:require('../assets/img/dog-8.png'),
    title:'這是標題8',
    time:'2023-04-29 10:02:20',
    imgText:'狗狗不但順利從桌上拿下手電筒，還馬上按下電源測試。圖/翻攝自微博',
    content1:'不少人認為狗狗是一種非常聰明且易於訓練的動物，有些品種的狗狗智商甚至和3、4歲的兒童不相上下。有飼主就在微博上分享自家黃金獵犬不但能和她遠端通話，甚至還會在夜晚拿著手電筒去接她回家。',
    content2:'從攝影機紀錄可以看到，飼主從遠端呼喚著愛犬的名字「冬瓜」，只見冬瓜爬起來尋找主人的身影，接著很快就明白主人正在透過手機跟牠講話。原來是主人手機快沒電，叫狗狗拿桌上的手電筒到村口去接她。只見冬瓜不但馬上就從正確位置拿到手電筒，還成功把電源打開，興高采烈地準備去迎接主人。'
  },
  {
    url:require('../assets/img/dog-9.png'),
    title:'這是標題9',
    time:'2023-04-29 10:02:20',
    imgText:'狗狗不但順利從桌上拿下手電筒，還馬上按下電源測試。圖/翻攝自微博',
    content1:'不少人認為狗狗是一種非常聰明且易於訓練的動物，有些品種的狗狗智商甚至和3、4歲的兒童不相上下。有飼主就在微博上分享自家黃金獵犬不但能和她遠端通話，甚至還會在夜晚拿著手電筒去接她回家。',
    content2:'從攝影機紀錄可以看到，飼主從遠端呼喚著愛犬的名字「冬瓜」，只見冬瓜爬起來尋找主人的身影，接著很快就明白主人正在透過手機跟牠講話。原來是主人手機快沒電，叫狗狗拿桌上的手電筒到村口去接她。只見冬瓜不但馬上就從正確位置拿到手電筒，還成功把電源打開，興高采烈地準備去迎接主人。'
  },
])

const openData = ref(null)
const openStatus = ref(false)
const open = (item) => {
  openStatus.value = true
  openData.value = item
  // console.log(item)

}

const back = () => {
  openStatus.value = false
  openData.value = null
}


</script>
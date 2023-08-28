<template>
    <div class="relative h-[auto] min-h-[100vh]">
        <bannerCompont></bannerCompont>
        <div class="shadow-style-1 w-[100vw] h-auto py-[40px] bg-[url('/src/assets/img/green-11.jpg')] bg-cover bg-center bg-no-repeat flex justify-around items-center flex-wrap gap-y-10">
            <div v-if="!openStatus" class="w-[100%] h-auto text-2xl md:text-5xl py-2 font-bold text-[#21321a]">最新消息列表</div>
            <div v-if="!openStatus" class="w-[100%] h-[auto] max-w-[1140px] flex justify-center items-center flex-wrap gap-10">
              <div
                class="w-auto h-auto flex justify-center items-center flex-col"
                v-for="(item, index) in informationData" :key="index"
              >
                <div @click="open(item)" class="w-[60vw] h-[50vw] md:w-[25vw] md:h-[15vw] max-w-[350px] max-h-[210px] rounded-md bg-cover bg-center bg-no-repeat" :style="{ 'background-image': 'url(' + item.url + ')' }"></div>
                <div @click="open(item)" class="w-[auto] h-auto flex justify-evenly items-center flex-wrap">
                  <div class="w-[100%] h-auto text-xl md:text-2xl text-[black] font-semibold">{{item.title}}</div>
                  <div class="w-[100%] h-auto text-lg md:text-xl text-[black]">{{item.time}}</div>
                </div>
              </div>
            </div>
            <div v-tothistop  v-if="openStatus" class="w-[80%] h-[auto] flex justify-center items-center flex-wrap gap-y-10">
              <div class="w-[100%] h-auto flex justify-center items-center flex-wrap">
                <div class="w-[100%] h-auto text-3xl text-black text-left">{{openData.title}}</div>
                <div class="w-[100%] h-auto text-black text-left">{{openData.time}}</div>
              </div>
              <div class="w-[100%] h-auto flex justify-center items-center flex-wrap">
                <div class="w-[80%] h-[50vw] md:w-[50%] md:h-[20vw] bg-cover bg-center bg-no-repeat" :style="{ 'background-image': 'url(' + openData.url + ')' }"></div>
                <div class="w-[80%] md:w-[100%] h-auto text-black text-left flex justify-center items-center">{{openData.imgText}}</div>
              </div>
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
import {ref,computed,inject,onBeforeUnmount} from 'vue'
import { useStore } from "vuex"

const store = useStore()
const informationChild = computed(() => {
    return store.state.informationChild
})

const informationData = inject('informationData')

const openData = ref(null)
const openStatus = ref(false)
const open = (item) => {
  openStatus.value = true
  openData.value = item
}

const back = () => {
  openStatus.value = false
  openData.value = null
  store.commit('setInformationChild',{})
}

const init = () => {
  if(Object.values(informationChild.value).length){
    open(informationChild.value)
  }
}
init()

onBeforeUnmount(() => {
  store.commit('setInformationChild',{})
})


</script>
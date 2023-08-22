<template>
    <div class="relative">
        <div class="w-[100vw] h-[40vh] flex justify-center items-center flex-wrap bg-orange-700">
            <div class="w-full h-auto">
                <div class="text-7xl p-1 font-bold">{{title}}</div>
                <div class="text-xl p-1">首頁/{{title}}</div>
            </div>
        </div>
    </div>
</template>
<script setup>
/*eslint-disable*/
import { computed } from 'vue'
import { useRouter } from "vue-router";
const router = useRouter()
// console.log('router',router.currentRoute.value.name)

const title = computed(() => {
    const list = [
        {name:'information',text:'最新消息'},
        {name:'service',text:'服務介紹'},
        {name:'contact',text:'聯絡我們'},
        {name:'about',text:'關於OO'},
        {name:'recruitment',text:"徵才資訊"}
    ]
    let target = list.find((item)=>item.name === router.currentRoute.value.name).text
    return target
})


</script>

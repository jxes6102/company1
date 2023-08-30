<template>
    <div class="relative">
        <div class="shadow-style-1 w-[100vw] h-[40vh] flex justify-center items-center flex-wrap bg-[url('/src/assets/img/green-8.jpg')] bg-cover bg-center bg-no-repeat">
            <div class="w-full h-auto">
                <div class="text-7xl p-1 font-bold">{{title}}</div>
                <div class="text-xl p-1">首頁/{{title}}</div>
            </div>
        </div>
    </div>
</template>
<script setup>
/*eslint-disable*/
import { computed,inject } from 'vue'
import { useRouter } from "vue-router";
const router = useRouter()
// console.log('router',router.currentRoute.value.name)
const list = inject('linkData')
const title = computed(() => {
    let target = list.value.find((item)=>item.url === router.currentRoute.value.name).text
    return target
})


</script>

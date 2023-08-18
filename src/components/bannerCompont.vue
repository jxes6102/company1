<template>
    <div class="relative">
        <div class="w-[100vw] h-[40vh] flex justify-center items-center flex-wrap bg-orange-700">
            <div class="w-full h-auto">
                <div class="text-7xl p-1 font-bold">最新消息</div>
                <div class="text-xl p-1">首頁/最新消息</div>
            </div>
        </div>
    </div>
</template>
<script setup>
/*eslint-disable*/
import { useRouter } from "vue-router";
const router = useRouter()
console.log('router',router.currentRoute.value.name)
// 關於OO最新消息服務介紹聯絡我們

</script>

<template>
    <div class="relative w-[100vw] h-[90vh] md:h-[50vh] flex justify-center items-center flex-wrap">
        <div class="relative w-[100%] h-[80%] flex justify-center items-center flex-wrap bg-[url('/src/assets/img/green-4.jpg')] bg-cover bg-center bg-no-repeat">
            <div class="w-[100%] md:w-[30%] h-[50%] md:h-[70%] flex justify-center items-center flex-wrap">
                <div class="w-[90%] text-2xl text-black text-left">聯絡資訊</div>
                <!-- <div class="w-[90%] h-[20%] bg-[red] flex justify-center items-center text-white">這是圖片</div> -->
                <div class="w-[90%] text-base text-black text-left">電話：06-68916XX</div>
                <div class="w-[90%] text-base text-black text-left">e-Mail：service@XXX-XXXX.com.tw</div>
                <div class="w-[90%] text-base text-black text-left">地址：高雄市苓雅區四維四路167號3樓</div>
            </div>
            <div class="w-[100%] md:w-[60%] h-[30%] md:h-[70%] flex justify-center md:items-center flex-wrap">
                <div class="w-[90%] h-auto text-2xl text-black text-left">地圖位置</div>
                <div id="map" class="w-[90%] h-[70%] md:h-[80%] flex justify-center items-center text-white">這是地圖</div>
            </div>
        </div>
        <div class="relative w-[100%] h-[20%] py-2 md:py-0 bg-[#e9fddd] flex justify-start md:justify-center items-center flex-col">
            <div class="w-[100%] text-black text-sm md:text-base">Copyright © 菁鉐股份有限公司</div>
            <div class="w-[100%] text-black text-sm md:text-base">Powered by 好時資訊股份有限公司</div>
        </div>
    </div>
</template>
<script setup>
/*eslint-disable*/
import {ref,onMounted} from 'vue'
let map
const initMap = () => {
    // 透過 Map 物件建構子建立新地圖 map 物件實例，並將地圖呈現在 id 為 map 的元素中
    map = new google.maps.Map(document.getElementById("map"), {
        // 設定地圖的中心點經緯度位置
        center: { lat: 22.6140167, lng: 120.2925468 },
        // 設定地圖縮放比例 0-20
        zoom: 15,
        // 限制使用者能縮放地圖的最大比例
        maxZoom: 20,
        // 限制使用者能縮放地圖的最小比例
        minZoom: 3,
        // 設定是否呈現右下角街景小人
        streetViewControl: false,
        // 設定是否讓使用者可以切換地圖樣式：一般、衛星圖等
        mapTypeControl: false,
        // 托放設定
        draggable:true
    });
}
// 建立地標
const setMarker = () => {
    // 建立一個新地標
    const marker = new google.maps.Marker({
        // 設定地標的座標
        position: { lat: 22.6140167, lng: 120.2925468 },
        // 設定地標要放在哪一個地圖
        map: map
    });
}
onMounted(() => {
    initMap()
    setMarker()
})

</script>

<style lang="scss" scoped>
</style>
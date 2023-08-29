<template>
    <div class="relative h-[auto] min-h-[100vh]">
        <bannerCompont></bannerCompont>
        <div class="shadow-style-1 w-[100vw] h-auto min-h-[50vh] py-4 bg-[url('/src/assets/img/green-14.jpg')] bg-cover bg-center bg-no-repeat flex justify-center items-center flex-wrap">
            <div class="w-[100%] h-auto flex justify-center items-center flex-wrap">
                <div class="w-[80%] h-auto">
                    <div class="text-3xl font-bold">應徵流程</div>
                    <div class="text-base">在菁鉐！我們提供的不只是一個工作機會，更是提供讓您有展現能力、實現夢想的舞台。不管您是懷抱夢想要實現的應屆畢業生或是想展現能力的專業人士，菁鉐都誠摯歡迎您的加入！現在立刻「前往104」查詢職務並投遞您的履歷，人資會審視職缺並主動與您連繫安排面試。</div>
                </div>
                <div class="w-[80%] h-auto flex justify-center items-center flex-wrap">
                    <div 
                        class="w-auto h-auto flex justify-center items-center flex-col"
                        v-for="(item, index) in jobData" :key="index"
                    >
                        <div class="w-[50vw] h-[50vw] md:w-[8vw] md:h-[8vw] bg-cover bg-center bg-no-repeat" :style="{ 'background-image': 'url(' + item.url + ')' }"></div>
                        <div class="w-[100%] h-auto flex justify-evenly items-center flex-wrap">
                            <div class="w-[100%] h-auto text-xl md:text-xl text-[black] font-semibold">{{item.title}}</div>
                            <div class="w-[100%] h-auto text-xl md:text-xl text-[black] font-semibold">{{item.content}}</div>
                        </div>
                    </div>
                </div>
                
                
            </div>
            <!-- <div class="w-[100%] h-auto">
                <div>如何前往</div>
                
            </div> -->
        </div>
    </div>
</template>

<script setup>
/*eslint-disable*/
import bannerCompont from '@/components/bannerCompont.vue'
import {ref} from 'vue'
const jobData = ref([
    {
      url:require('../assets/img/fillout.png'),
      title:'1資料填寫',
      content:'填寫履歷/投遞職缺',
    },
    {
      url:require('../assets/img/interview.png'),
      title:'2面試流程',
      content:'履歷審核/面談安排',
    },
    {
      url:require('../assets/img/recruitment.png'),
      title:'3錄取作業',
      content:'內部審核/錄取通知',
    },
    {
      url:require('../assets/img/participation.png'),
      title:'4加入菁鉐',
      content:'安排報到作業',
    },
])


</script>
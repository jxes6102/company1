<template>
    <div class="relative h-[auto] min-h-[100vh]">
        <bannerCompont></bannerCompont>
        <div class="shadow-style-1 w-[100vw] h-auto min-h-[50vh] py-8 bg-[url('/src/assets/img/green-14.jpg')] bg-cover bg-center bg-no-repeat flex justify-center items-center flex-wrap gap-y-2">
            <div class="w-[100%] h-auto flex justify-center items-center flex-wrap gap-y-10">
                <div class="w-[80%] h-auto flex justify-center items-center flex-wrap gap-y-2">
                    <div class="w-[100%] h-auto text-3xl font-bold">應徵流程</div>
                    <div class="w-[100%] h-auto text-base">在菁鉐！我們提供的不只是一個工作機會，更是提供讓您有展現能力、實現夢想的舞台。不管您是懷抱夢想要實現的應屆畢業生或是想展現能力的專業人士，菁鉐都誠摯歡迎您的加入！現在立刻「前往104」查詢職務並投遞您的履歷，人資會審視職缺並主動與您連繫安排面試。</div>
                </div>
                <div class="w-[80%] h-auto flex justify-center items-center flex-wrap gap-y-8">
                    <div 
                        class="w-[100%] md:w-[25%] h-auto flex justify-center items-center flex-col"
                        v-for="(item, index) in jobData" :key="index"
                    >
                        <div class="w-auto h-auto p-4 border-2 border-[#7ED321] rounded-md">
                            <div class="w-[50vw] h-[50vw] md:w-[10vw] md:h-[10vw] bg-cover bg-center bg-no-repeat" :style="{ 'background-image': 'url(' + item.url + ')' }"></div>
                            <div class="w-[auto] h-auto text-xl md:text-xl text-[black] font-semibold">{{item.title}}</div>
                        </div>
                        <div class="w-[auto] h-auto text-xl text-[#319c2e] font-semibold">{{item.content}}</div>
                    </div>
                </div>
                <div class="w-[100%] h-auto mine-flex-center">
                    <button 
                        @click="toJob" 
                        class="bg-[#009B4C] px-[30px] py-[15px] text-white text-xl font-bold rounded-md mine-flex-center" >
                        <el-icon size="25"><Promotion /></el-icon>
                        前往104
                    </button>
                </div>
                <div class="w-[90%] md:w-[80%] h-auto flex justify-center items-center flex-wrap">
                    <img class="w-[20vw] h-[20vw] md:w-[10vw] md:h-[10vw]" src="../assets/img/tips.png" alt="">
                    <div class="w-[60vw] md:w-auto h-auto flex justify-center items-start flex-col">
                        <div class="text-xl md:text-3xl font-bold">小提醒</div>
                        <div class="text-base text-left">參加面試而未錄取者，將會以E-MAIL或電話通知</div>
                        <div class="text-base text-left">未有合適職缺者，履歷將轉入菁鉐人才庫</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="shadow-style-1 w-[100vw] h-auto min-h-[50vh] py-8 bg-[url('/src/assets/img/green-15.jpg')] bg-cover bg-center bg-no-repeat flex justify-center items-center flex-wrap gap-y-10">
            <div class="w-[90%] h-auto text-3xl font-bold flex justify-center items-center flex-wrap">如何前往</div>
            <div class="w-[100%] h-auto flex justify-center items-center flex-wrap gap-4">
                <div 
                    class="w-[100%] md:w-[30%] h-[auto] flex justify-center items-center flex-wrap gap-y-2" 
                    v-for="(item, index) in trafficData" 
                    :key="index"
                >
                    <div class="rounded-md w-[40vw] h-[40vw] md:w-[15vw] md:h-[15vw] bg-cover bg-center bg-no-repeat mine-flex-center" :style="{ 'background-image': 'url(' + item.url + ')' }"></div>
                    <div class="w-[100%] text-2xl">{{ item.title }}</div>
                    <div class="w-[80%] text-xl">{{ item.content }}</div>
                </div>
            </div>
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

const trafficData = ref([
    {
      url:require('../assets/img/car.png'),
      title:'自行開車',
      content:'中山高大雅交流道下(往台中方向) --> 左轉進入環中路 --> 行至崇德路二段左轉 --> 行至崇德七路右轉到底，公司即在左側。',
    },
    {
      url:require('../assets/img/train.png'),
      title:'搭乘台鐵',
      content:'搭乘台鐵至台中太原火車站，到站後建議轉搭計程車至公司(約10分)。',
    },
    {
      url:require('../assets/img/heighttrain.png'),
      title:'搭乘高鐵',
      content:'搭乘台灣高鐵至台中烏日站，到站後建議轉搭計程車至公司(約20分)。',
    },
])

const toJob = () => {
    // console.log('toJob')
    window.open('https://www.104.com.tw/jobs/main/', '_blank');
}


</script>
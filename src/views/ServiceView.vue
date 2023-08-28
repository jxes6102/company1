<template>
    <div class="relative h-[auto] min-h-[100vh]">
        <bannerCompont></bannerCompont>
        <div class="shadow-style-1 w-[100%] h-auto min-h-[50vh] py-4 bg-[url('/src/assets/img/green-13.jpg')] bg-cover bg-center bg-no-repeat flex justify-center items-center flex-wrap gap-y-10">
            <div v-if="!openStatus" class="w-[90%] md:w-[80%] h-[auto] flex justify-center items-center flex-wrap">
                <div class="w-[100%] h-auto text-2xl md:text-4xl py-2 font-bold text-[#21321a] text-left">服務介紹列表</div>
                <div
                    class="w-[100%] h-auto flex justify-start items-center flex-wrap gap-x-4"
                    v-for="(item, index) in serviceData" :key="index"
                    @click="open(item)"
                >
                    <el-divider />
                    <div class="w-[40vw] h-[30vw] md:w-[25vw] md:h-[15vw] max-w-[150px] max-h-[85px] rounded bg-cover bg-center bg-no-repeat" :style="{ 'background-image': 'url(' + item.url + ')' }"></div>
                    <div class="w-[auto] h-auto text-base md:text-2xl text-[black] font-semibold">{{item.title}}</div>
                </div>
            </div>
            <div v-tothistop v-if="openStatus" class="w-[80%] h-[auto] flex justify-center items-center flex-wrap gap-y-10">
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
import {ref} from 'vue'
const serviceData = ref([
    {
        url:require('../assets/img/web-1.jpg'),
        title:'軟體開發流程',
        time:'2023-04-29 10:02:20',
        imgText:'狗狗不但順利從桌上拿下手電筒，還馬上按下電源測試。圖/翻攝自微博',
        content1:'這步驟是專案的起點，當客戶(Customers)或者利害關係人提出專案時，SDLC的第一個步驟是計畫，萬事起頭難。第二步需要去了解專案在技術上的需求，而無論是軟體、app或網頁的設計、新功能等，都是需要去解決用戶的某個需求或者痛點。當需求被設定完畢，該是需要開始進行設計產品以及各個功能的時候了。在這個步驟我們先不討論美學，而是討論「功能性」以及「流程」。',
        content2:'第四個步驟，要正式進入開發軟體的流程了！在前置準備大功告成以後，開發流程可以說是充滿著風險，幾乎是整個SDLC中風險最高的一個階段。在開發的過程當中，團隊同時會進行測試、追蹤以及修BUGS的過程。然而，在產品準備就緒、上市以前，需要透過更深入的測試，去知道使用者的反應、喜好、軟體運作的情況，進而有機會做進一步的修改。到了這個階段，經歷過去的開發流程，到了需要將產品推向市場，發布產品給所有使用者的時候了！既然稱作「生命週期」(Life Cycle)，即可知這整個流程其實是周而復始的。使用者的需求時時改變，市場日新月異，後續的軟體維護、日常營運，以及持續更新才是讓產品生生不息的原因。'
    },
    {
        url:require('../assets/img/web-2.jpg'),
        title:'開發團隊角色',
        time:'2023-04-29 10:02:20',
        imgText:'狗狗不但順利從桌上拿下手電筒，還馬上按下電源測試。圖/翻攝自微博',
        content1:'RD當中又根據各自工作內容的不同，分為系統分析師(System Analyst)、系統設計師(System Designer)、程式設計師(Programmer)。QA在軟體上市前後，對軟體進行測試，確保軟體運行無礙。(Product Manager)依據公司目標，規劃並制定產品Roadmap，以及資源投入與產品發布之優先順序確認客戶/用戶需求，產出產品所需的需求描述、流程圖、原型等文件和各職能溝通協調，引領開發團隊發展產品，並為產品成敗負責',
        content2:'專案經理(Project Manager)專案管理及專案進度管控與開發團隊溝通和合作撰寫軟體專案文件。使用者介面/使用者經驗設計師(UI/UX Designer)執行 APP/Web UI視覺設計與UI Flow製作定義UI Pattern一致性的規範及延續性的設計熟悉 Sketch, XD, Ai, Ps 等設計相關軟體'
    },
])

const openData = ref(null)
const openStatus = ref(false)
const open = (item) => {
    openStatus.value = true
    openData.value = item
}

const back = () => {
  openStatus.value = false
  openData.value = null
}

</script>
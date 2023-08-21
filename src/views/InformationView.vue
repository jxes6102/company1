<template>
    <div class="relative h-[auto] min-h-[100vh]">
        <bannerCompont></bannerCompont>
        <div class="w-[100vw] h-auto py-[40px] bg-[url('/src/assets/img/bg-2.jpg')] bg-cover bg-center bg-no-repeat flex justify-around items-center flex-wrap">
            <div v-if="!openStatus" class="w-[80%] h-auto py-[20px] text-[red] text-xl md:text-4xl font-bold flex justify-start items-center flex-wrap">最新消息列表</div>
            <div v-if="!openStatus" class="w-[80%] h-[auto] flex justify-evenly items-center flex-wrap gap-x-4 gap-y-10">
                <div 
                    class="w-[90vw] h-[40vh] md:w-[25vw] md:h-[20vw] flex justify-center items-center flex-wrap"
                    v-for="(item, index) in informationData" :key="index"
                >
                    <div class="w-[100%] h-[80%] bg-cover bg-center bg-no-repeat" @click="open(item)" :style="{ 'background-image': 'url(' + item.url + ')' }"></div>
                    <div class="w-[100%] h-[20%] flex justify-evenly items-center flex-wrap">
                        <div class="w-[100%] h-auto text-xl md:text-2xl text-[red] font-semibold" @click="open(item)">{{item.title}}</div>
                        <div class="w-[100%] h-auto text-lg md:text-xl text-[red]">{{item.time}}</div>
                    </div>
                </div>
            </div>
            <div v-if="openStatus" class="w-[80%] h-[auto] flex justify-center items-center flex-wrap gap-y-10">
              <div class="w-[100%] h-auto text-white text-left">{{openData.title}}</div>
              <div class="w-[100%] h-auto text-white text-left">{{openData.time}}</div>
              <div class="w-[80%] h-[50vw] md:w-[50%] md:h-[20vw] bg-cover bg-center bg-no-repeat" :style="{ 'background-image': 'url(' + openData.url + ')' }"></div>
              <div class="w-[100%] h-auto text-white text-left">{{openData.imgText}}</div>
              <div class="w-[100%] h-auto text-white text-left">{{openData.content1}}</div>
              <div class="w-[100%] h-auto text-white text-left">{{openData.content2}}</div>
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
    imgText:'台糖公司土地長期被蔡姓男子等人濫倒廢棄物，台南地檢署查出台糖公司陳姓巡查股長涉嫌包庇。（圖／台南地檢署提供）',
    content1:'【周刊王CTWANT |記者甯其遠】台糖土地遭偷倒廢棄物，後續清理費用恐需超過新台幣10億元，將造成台糖鉅額損失，監察院今（3）日表示，此案已由監察委員王麗珍、張菊芳申請自動調查，深入瞭解台糖內部是否有掩護不法業者的行為。',
    content2:'台南地檢署偵辦蔡姓男子在台糖公司土地非法掩埋廢棄物案，發現台糖公司台南區處善化資產課陳姓巡查股長涉有掩護蔡嫌偷倒廢棄物行為，指揮警調辦，聲押陳嫌獲准，並在四月底以竊佔、背信及違反《廢清法》等罪嫌起訴。監察院指出，台糖位於台南市新市區的7筆土地，遭非法傾倒廢棄物，遭不法掩埋廢棄物之總面積達2萬6997平方公尺，清理費用初步估算約新台幣10億2701萬餘元，台南地檢察署檢察官偵辦發現，台糖巡查股長涉有掩護業者偷倒廢棄物之行為。監察委員王麗珍、張菊芳認為，事涉台糖恐蒙受鉅額清除費的損失，有進一步瞭解之必要，已申請自動調查。監察委員指出，本案如此大面積的土地遭不法掩埋廢棄物，顯非單次不法行為所致，究案發經過與查處情形為何？台糖有無放任廢棄物傾倒面積擴大之情事？通報土地遭棄置或掩埋廢棄物之作業流程，是否有瑕疵或未落實？內控機制及監督管理是否失靈？相關人員處理本案有無涉及怠惰違失情事？實有究明之必要，將深入調查。'
  },
  {
    url:require('../assets/img/dog-6.png'),
    title:'這是標題6',
    time:'2023-04-29 10:02:20',
    imgText:'台糖公司土地長期被蔡姓男子等人濫倒廢棄物，台南地檢署查出台糖公司陳姓巡查股長涉嫌包庇。（圖／台南地檢署提供）',
    content1:'【周刊王CTWANT |記者甯其遠】台糖土地遭偷倒廢棄物，後續清理費用恐需超過新台幣10億元，將造成台糖鉅額損失，監察院今（3）日表示，此案已由監察委員王麗珍、張菊芳申請自動調查，深入瞭解台糖內部是否有掩護不法業者的行為。',
    content2:'台南地檢署偵辦蔡姓男子在台糖公司土地非法掩埋廢棄物案，發現台糖公司台南區處善化資產課陳姓巡查股長涉有掩護蔡嫌偷倒廢棄物行為，指揮警調辦，聲押陳嫌獲准，並在四月底以竊佔、背信及違反《廢清法》等罪嫌起訴。監察院指出，台糖位於台南市新市區的7筆土地，遭非法傾倒廢棄物，遭不法掩埋廢棄物之總面積達2萬6997平方公尺，清理費用初步估算約新台幣10億2701萬餘元，台南地檢察署檢察官偵辦發現，台糖巡查股長涉有掩護業者偷倒廢棄物之行為。監察委員王麗珍、張菊芳認為，事涉台糖恐蒙受鉅額清除費的損失，有進一步瞭解之必要，已申請自動調查。監察委員指出，本案如此大面積的土地遭不法掩埋廢棄物，顯非單次不法行為所致，究案發經過與查處情形為何？台糖有無放任廢棄物傾倒面積擴大之情事？通報土地遭棄置或掩埋廢棄物之作業流程，是否有瑕疵或未落實？內控機制及監督管理是否失靈？相關人員處理本案有無涉及怠惰違失情事？實有究明之必要，將深入調查。'
  },
  {
    url:require('../assets/img/dog-7.png'),
    title:'這是標題7',
    time:'2023-04-29 10:02:20',
    imgText:'台糖公司土地長期被蔡姓男子等人濫倒廢棄物，台南地檢署查出台糖公司陳姓巡查股長涉嫌包庇。（圖／台南地檢署提供）',
    content1:'【周刊王CTWANT |記者甯其遠】台糖土地遭偷倒廢棄物，後續清理費用恐需超過新台幣10億元，將造成台糖鉅額損失，監察院今（3）日表示，此案已由監察委員王麗珍、張菊芳申請自動調查，深入瞭解台糖內部是否有掩護不法業者的行為。',
    content2:'台南地檢署偵辦蔡姓男子在台糖公司土地非法掩埋廢棄物案，發現台糖公司台南區處善化資產課陳姓巡查股長涉有掩護蔡嫌偷倒廢棄物行為，指揮警調辦，聲押陳嫌獲准，並在四月底以竊佔、背信及違反《廢清法》等罪嫌起訴。監察院指出，台糖位於台南市新市區的7筆土地，遭非法傾倒廢棄物，遭不法掩埋廢棄物之總面積達2萬6997平方公尺，清理費用初步估算約新台幣10億2701萬餘元，台南地檢察署檢察官偵辦發現，台糖巡查股長涉有掩護業者偷倒廢棄物之行為。監察委員王麗珍、張菊芳認為，事涉台糖恐蒙受鉅額清除費的損失，有進一步瞭解之必要，已申請自動調查。監察委員指出，本案如此大面積的土地遭不法掩埋廢棄物，顯非單次不法行為所致，究案發經過與查處情形為何？台糖有無放任廢棄物傾倒面積擴大之情事？通報土地遭棄置或掩埋廢棄物之作業流程，是否有瑕疵或未落實？內控機制及監督管理是否失靈？相關人員處理本案有無涉及怠惰違失情事？實有究明之必要，將深入調查。'
  },
  {
    url:require('../assets/img/dog-8.png'),
    title:'這是標題8',
    time:'2023-04-29 10:02:20',
    imgText:'台糖公司土地長期被蔡姓男子等人濫倒廢棄物，台南地檢署查出台糖公司陳姓巡查股長涉嫌包庇。（圖／台南地檢署提供）',
    content1:'【周刊王CTWANT |記者甯其遠】台糖土地遭偷倒廢棄物，後續清理費用恐需超過新台幣10億元，將造成台糖鉅額損失，監察院今（3）日表示，此案已由監察委員王麗珍、張菊芳申請自動調查，深入瞭解台糖內部是否有掩護不法業者的行為。',
    content2:'台南地檢署偵辦蔡姓男子在台糖公司土地非法掩埋廢棄物案，發現台糖公司台南區處善化資產課陳姓巡查股長涉有掩護蔡嫌偷倒廢棄物行為，指揮警調辦，聲押陳嫌獲准，並在四月底以竊佔、背信及違反《廢清法》等罪嫌起訴。監察院指出，台糖位於台南市新市區的7筆土地，遭非法傾倒廢棄物，遭不法掩埋廢棄物之總面積達2萬6997平方公尺，清理費用初步估算約新台幣10億2701萬餘元，台南地檢察署檢察官偵辦發現，台糖巡查股長涉有掩護業者偷倒廢棄物之行為。監察委員王麗珍、張菊芳認為，事涉台糖恐蒙受鉅額清除費的損失，有進一步瞭解之必要，已申請自動調查。監察委員指出，本案如此大面積的土地遭不法掩埋廢棄物，顯非單次不法行為所致，究案發經過與查處情形為何？台糖有無放任廢棄物傾倒面積擴大之情事？通報土地遭棄置或掩埋廢棄物之作業流程，是否有瑕疵或未落實？內控機制及監督管理是否失靈？相關人員處理本案有無涉及怠惰違失情事？實有究明之必要，將深入調查。'
  },
  {
    url:require('../assets/img/dog-9.png'),
    title:'這是標題9',
    time:'2023-04-29 10:02:20',
    imgText:'台糖公司土地長期被蔡姓男子等人濫倒廢棄物，台南地檢署查出台糖公司陳姓巡查股長涉嫌包庇。（圖／台南地檢署提供）',
    content1:'【周刊王CTWANT |記者甯其遠】台糖土地遭偷倒廢棄物，後續清理費用恐需超過新台幣10億元，將造成台糖鉅額損失，監察院今（3）日表示，此案已由監察委員王麗珍、張菊芳申請自動調查，深入瞭解台糖內部是否有掩護不法業者的行為。',
    content2:'台南地檢署偵辦蔡姓男子在台糖公司土地非法掩埋廢棄物案，發現台糖公司台南區處善化資產課陳姓巡查股長涉有掩護蔡嫌偷倒廢棄物行為，指揮警調辦，聲押陳嫌獲准，並在四月底以竊佔、背信及違反《廢清法》等罪嫌起訴。監察院指出，台糖位於台南市新市區的7筆土地，遭非法傾倒廢棄物，遭不法掩埋廢棄物之總面積達2萬6997平方公尺，清理費用初步估算約新台幣10億2701萬餘元，台南地檢察署檢察官偵辦發現，台糖巡查股長涉有掩護業者偷倒廢棄物之行為。監察委員王麗珍、張菊芳認為，事涉台糖恐蒙受鉅額清除費的損失，有進一步瞭解之必要，已申請自動調查。監察委員指出，本案如此大面積的土地遭不法掩埋廢棄物，顯非單次不法行為所致，究案發經過與查處情形為何？台糖有無放任廢棄物傾倒面積擴大之情事？通報土地遭棄置或掩埋廢棄物之作業流程，是否有瑕疵或未落實？內控機制及監督管理是否失靈？相關人員處理本案有無涉及怠惰違失情事？實有究明之必要，將深入調查。'
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
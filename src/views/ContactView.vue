<template>
    <div class="relative h-[auto] min-h-[100vh]">
        <bannerCompont></bannerCompont>
        <div class="shadow-style-1 w-[100vw] h-auto py-10 flex justify-center items-center flex-wrap gap-y-4 bg-[url('/src/assets/img/green-12.jpg')] bg-cover bg-center bg-no-repeat">
            <div class="w-[85%] md:w-[60%] h-auto text-3xl text-black text-left">填寫聯絡表單</div>
            <div class="w-[85%] md:w-[60%] h-[50px] flex justify-center items-center flex-wrap">
                <div class="w-[70px] h-[100%] rounded-l-md text-xl text-white font-bold bg-[#214f1e] mine-flex-center">主旨</div>
                <div class="w-[calc(100%_-_70px)] h-[100%] bg-red-600">
                    <input class="w-[100%] h-[100%] text-xl px-2" placeholder="請輸入主旨" type="text">
                </div>
            </div>
            <div class="w-[85%] md:w-[60%] h-[50px] flex justify-center items-center flex-wrap">
                <div class="w-[70px] h-[100%] rounded-l-md text-xl text-white font-bold bg-[#214f1e] mine-flex-center">姓名</div>
                <div class="w-[calc(100%_-_70px)] h-[100%] bg-red-600">
                    <input class="w-[100%] h-[100%] text-xl px-2" placeholder="請輸入姓名" type="text">
                </div>
            </div>
            <div class="w-[85%] md:w-[60%] h-[50px] flex justify-center items-center flex-wrap">
                <div class="w-[70px] h-[100%] rounded-l-md text-xl text-white font-bold bg-[#214f1e] mine-flex-center">電話</div>
                <div class="w-[calc(100%_-_70px)] h-[100%] bg-red-600">
                    <input class="w-[100%] h-[100%] text-xl px-2" placeholder="請輸入電話" type="text">
                </div>
            </div>
            <div class="w-[85%] md:w-[60%] h-[50px] flex justify-center items-center flex-wrap">
                <div class="w-[70px] h-[100%] rounded-l-md text-xl text-white font-bold bg-[#214f1e] mine-flex-center">信箱</div>
                <div class="w-[calc(100%_-_70px)] h-[100%] bg-red-600">
                    <input class="w-[100%] h-[100%] text-xl px-2" placeholder="請輸入信箱" type="text">
                </div>
            </div>
            <div class="w-[85%] md:w-[60%] h-auto text-2xl text-black text-left">詢問內容</div>
            <div class="w-[85%] md:w-[60%] h-[auto] flex justify-center items-center flex-wrap">
                <textarea class="w-[100%] h-[300px] text-xl py-2 px-4" placeholder="請輸入詢問內容"></textarea>
            </div>
            <div class="w-[85%] md:w-[60%] h-auto flex justify-center items-center flex-wrap">
                <!-- <el-icon><Position /></el-icon> -->
                <button @click="testmail" class="w-[100%] h-auto py-[10px] px-[20px] text-2xl text-[white] rounded-md bg-[#214f1e]"><el-icon size="20"><Position /></el-icon>送出</button>
            </div>
        </div>
        <!-- <div class="w-[100vw] h-auto bg-red-200">
            <button @click="testmail" class="p-[10px] bg-green-700">test send</button>
        </div> -->
    </div>
</template>

<script setup>
/*eslint-disable*/
import bannerCompont from '@/components/bannerCompont.vue'
import emailjs from 'emailjs-com'
import { computed } from "vue"

const isMobile = computed(() => {
    if(!store.state.isMobile) store.commit('setMenu',false)
    return store.state.isMobile
})

const testmail = () => {
    console.log('testmail')
    const templateParams = {
        to_name: '接收人2',
        from_name: '發送人2',
        message:'測試2'
    };

    // emailjs.send('service_rdl2pta','template_bpvt6uo', templateParams, 'cpJ_T33j_i0Dbi71_')
    // .then((response) => {
    //     console.log('SUCCESS!', response.status, response.text);
    // }, (err) => {
    //     console.log('FAILED...', err);
    // });
}

</script>
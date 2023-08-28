<template>
    <div class="relative h-[auto] min-h-[100vh]">
        <bannerCompont></bannerCompont>
        <div class="shadow-style-1 w-[100vw] h-auto py-10 flex justify-center items-center flex-wrap gap-y-2 bg-[url('/src/assets/img/green-12.jpg')] bg-cover bg-center bg-no-repeat">
            <div class="w-[85%] md:w-[60%] h-auto text-3xl text-black text-left">填寫聯絡表單</div>
            <div class="w-[85%] md:w-[60%] h-[80px] flex justify-center items-start flex-wrap">
                <div class="w-[70px] h-[50px] rounded-l-md text-xl text-white font-bold bg-[#214f1e] mine-flex-center">主旨</div>
                <div class="w-[calc(100%_-_70px)] h-[50px] bg-red-600">
                    <input 
                        v-tofocus 
                        class="w-[100%] h-[100%] text-xl px-2"
                        :class="mailRule.title.verify ? '' : 'border-2 border-[red] focus:outline-[red]'" 
                        placeholder="請輸入主旨" 
                        type="text" 
                        v-model="mailTitle"
                    >
                </div>
                <div v-if="!mailRule.title.verify" class="w-[100%] h-auto text-base text-[red]">{{mailRule.title.message}}</div>
            </div>
            <div class="w-[85%] md:w-[60%] h-[80px] flex justify-center items-start flex-wrap">
                <div class="w-[70px] h-[50px] rounded-l-md text-xl text-white font-bold bg-[#214f1e] mine-flex-center">姓名</div>
                <div class="w-[calc(100%_-_70px)] h-[50px] bg-red-600">
                    <input 
                        class="w-[100%] h-[100%] text-xl px-2"
                        :class="mailRule.name.verify ? '' : 'border-2 border-[red] focus:outline-[red]'" 
                        placeholder="請輸入姓名" 
                        type="text" 
                        v-model="mailName"
                    >
                </div>
                <div v-if="!mailRule.name.verify" class="w-[100%] h-auto text-base text-[red]">{{mailRule.name.message}}</div>
            </div>
            <div class="w-[85%] md:w-[60%] h-[80px] flex justify-center items-start flex-wrap">
                <div class="w-[70px] h-[50px] rounded-l-md text-xl text-white font-bold bg-[#214f1e] mine-flex-center">電話</div>
                <div class="w-[calc(100%_-_70px)] h-[50px] bg-red-600">
                    <input 
                        class="w-[100%] h-[100%] text-xl px-2"
                        :class="mailRule.phone.verify ? '' : 'border-2 border-[red] focus:outline-[red]'" 
                        placeholder="請輸入電話" 
                        type="text" 
                        v-model="mailPhone"
                    >
                </div>
                <div v-if="!mailRule.phone.verify" class="w-[100%] h-auto text-base text-[red]">{{mailRule.phone.message}}</div>
            </div>
            <div class="w-[85%] md:w-[60%] h-[80px] flex justify-center items-start flex-wrap">
                <div class="w-[70px] h-[50px] rounded-l-md text-xl text-white font-bold bg-[#214f1e] mine-flex-center">信箱</div>
                <div class="w-[calc(100%_-_70px)] h-[50px] bg-red-600">
                    <input 
                        class="w-[100%] h-[100%] text-xl px-2"
                        :class="mailRule.content.verify ? '' : 'border-2 border-[red] focus:outline-[red]'" 
                        placeholder="請輸入信箱" 
                        type="text" 
                        v-model="mailContent"
                    >
                </div>
                <div v-if="!mailRule.content.verify" class="w-[100%] h-auto text-base text-[red]">{{mailRule.content.message}}</div>
            </div>
            <div class="w-[85%] md:w-[60%] h-auto text-2xl text-black text-left">詢問內容</div>
            <div class="w-[85%] md:w-[60%] h-[350px] flex justify-center items-start flex-wrap">
                <textarea
                    :class="mailRule.question.verify ? '' : 'border-2 border-[red] focus:outline-[red]'" 
                    class="w-[100%] h-[300px] text-xl py-2 px-4" 
                    placeholder="請輸入詢問內容" 
                    v-model="mailQuestion"
                ></textarea>
                <div v-if="!mailRule.question.verify" class="w-[100%] h-auto text-base text-[red]">{{mailRule.question.message}}</div>
            </div>
            <div class="w-[85%] md:w-[60%] h-auto flex justify-center items-center flex-wrap">
                <button @click="testmail" class="w-[100%] h-auto py-[10px] px-[20px] text-2xl text-[white] rounded-md bg-[#214f1e]"><el-icon size="20"><Position /></el-icon>送出</button>
            </div>
        </div>
    </div>
</template>

<script setup>
/*eslint-disable*/
import bannerCompont from '@/components/bannerCompont.vue'
import emailjs from 'emailjs-com'
import { ref,computed,watch } from "vue"
import { ElMessage } from 'element-plus'


const mailTitle = ref('')
const mailName = ref('')
const mailPhone = ref('')
const mailContent = ref('')
const mailQuestion = ref('')
const mailRule = ref({
    title:{special:false,max:30,min:2,verify:false,message:''},
    name:{special:false,max:30,min:3,verify:false,message:''},
    phone:{special:true,max:20,min:5,verify:false,message:'',reg:/^[0-9]*$/},
    content:{special:true,max:30,min:5,verify:false,message:'',reg:/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/},
    question:{special:false,max:100,min:1,verify:false,message:''},
})

const isMobile = computed(() => {
    if(!store.state.isMobile) store.commit('setMenu',false)
    return store.state.isMobile
})

watch(mailTitle, (newData, oldData) => {
    if((newData.length < mailRule.value.title.min) || (newData.length > mailRule.value.title.max)){
        mailRule.value.title.verify = false
        mailRule.value.title.message = '請輸入大於'+ mailRule.value.title.min + '且小於' + mailRule.value.title.max + '個字元'
    }else if (mailRule.value.title.special){
        if(mailRule.value.title.reg.test(newData)){
            mailRule.value.title.verify = true
            mailRule.value.title.message = ''
        }else{
            mailRule.value.title.verify = false
            mailRule.value.title.message = '請輸入數字'
        }
    }else{
        mailRule.value.title.verify = true
        mailRule.value.title.message = ''
    }
})

watch(mailName, (newData, oldData) => {
    if((newData.length < mailRule.value.name.min) || (newData.length > mailRule.value.name.max)){
        mailRule.value.name.verify = false
        mailRule.value.name.message = '請輸入大於'+ mailRule.value.name.min + '且小於' + mailRule.value.name.max + '個字元'
    }else if (mailRule.value.name.special){
        if(mailRule.value.name.reg.test(newData)){
            mailRule.value.name.verify = true
            mailRule.value.name.message = ''
        }else{
            mailRule.value.name.verify = false
            mailRule.value.name.message = '請輸入數字'
        }
    }else{
        mailRule.value.name.verify = true
        mailRule.value.name.message = ''
    }
})

watch(mailPhone, (newData, oldData) => {
    if((newData.length < mailRule.value.phone.min) || (newData.length > mailRule.value.phone.max)){
        mailRule.value.phone.verify = false
        mailRule.value.phone.message = '請輸入大於'+ mailRule.value.phone.min + '且小於' + mailRule.value.phone.max + '個字元'
    }else if (mailRule.value.phone.special){
        if(mailRule.value.phone.reg.test(newData)){
            mailRule.value.phone.verify = true
            mailRule.value.phone.message = ''
        }else{
            mailRule.value.phone.verify = false
            mailRule.value.phone.message = '請輸入數字'
        }
    }else{
        mailRule.value.phone.verify = true
        mailRule.value.phone.message = ''
    }
})

watch(mailContent, (newData, oldData) => {
    if((newData.length < mailRule.value.content.min) || (newData.length > mailRule.value.content.max)){
        mailRule.value.content.verify = false
        mailRule.value.content.message = '請輸入大於'+ mailRule.value.content.min + '且小於' + mailRule.value.content.max + '個字元'
    }else if (mailRule.value.content.special){
        if(mailRule.value.content.reg.test(newData)){
            mailRule.value.content.verify = true
            mailRule.value.content.message = ''
        }else{
            mailRule.value.content.verify = false
            mailRule.value.content.message = '請輸入正確電子信箱格式'
        }
    }else{
        mailRule.value.content.verify = true
        mailRule.value.content.message = ''
    }
})

watch(mailQuestion, (newData, oldData) => {
    if((newData.length < mailRule.value.question.min) || (newData.length > mailRule.value.question.max)){
        mailRule.value.question.verify = false
        mailRule.value.question.message = '請輸入大於'+ mailRule.value.question.min + '且小於' + mailRule.value.question.max + '個字元'
    }else if (mailRule.value.question.special){
        if(mailRule.value.question.reg.test(newData)){
            mailRule.value.question.verify = true
            mailRule.value.question.message = ''
        }else{
            mailRule.value.question.verify = false
            mailRule.value.question.message = '請輸入正確電子信箱格式'
        }
    }else{
        mailRule.value.question.verify = true
        mailRule.value.question.message = ''
    }
})

let mailLoading = false
const testmail = () => {
    
    if(mailLoading) return false
    mailLoading = true

    let verifyStatus = Object.values(mailRule.value).every(item => item.verify)
    if(!verifyStatus) {
        ElMessage({
            message: '請檢查表單格式',
            type: 'error',
        })
        mailLoading = false
        return false
    }
    console.log('testmail')

    const templateParams = {
        title:mailTitle.value,
        name:mailName.value,
        phone:mailPhone.value,
        content:mailContent.value,
        question:mailQuestion.value
    };

    // emailjs.send('service_rdl2pta','template_bpvt6uo', templateParams, 'cpJ_T33j_i0Dbi71_')
    // .then((response) => {
    //     // mailTitle.value = ''
    //     // mailName.value = ''
    //     // mailPhone.value = ''
    //     // mailContent.value = ''
    //     // mailQuestion.value = ''
    //     console.log('SUCCESS!', response.status, response.text)
    //     ElMessage({
    //         message: '成功送出',
    //         type: 'success',
    //     })
    //     mailLoading = false
    // }, (err) => {
    //     ElMessage({
    //         message: '送出失敗',
    //         type: 'error',
    //     })
    //     mailLoading = false
    //     console.log('FAILED...', err);
    // });
}

</script>
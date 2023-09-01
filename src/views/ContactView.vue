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
                        :class="!mailRule.title.verify && (mailRule.title.frequency !== 0) ? 'border-2 border-[red] focus:outline-[red]' : ''" 
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
                        :class="!mailRule.name.verify && (mailRule.name.frequency !== 0) ? 'border-2 border-[red] focus:outline-[red]' : ''" 
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
                        :class="!mailRule.phone.verify && (mailRule.phone.frequency !== 0) ? 'border-2 border-[red] focus:outline-[red]' : ''" 
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
                        :class="!mailRule.content.verify && (mailRule.content.frequency !== 0) ? 'border-2 border-[red] focus:outline-[red]' : ''" 
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
                    :class="!mailRule.question.verify && (mailRule.question.frequency !== 0) ? 'border-2 border-[red] focus:outline-[red]' : ''" 
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
// import { Email } from '@/mail/smtp.js'

// const mailTest = () => {
//   console.log('do mailTest')
//   Email.send({
//     //   SecureToken:'90d74c9b-48e7-456b-99d0-f492b41479c4',
//       Host : "smtp.elasticemail.com",
//     //   Port : 2525,
//       Username : "jxes6102@gmail.com",
//       Password : "E3FCB3C1451A66AF8C920FF5C61C718BC6B6",
//       To : 'jxes6102@gmail.com',
//       From : "jxes6102@gmail.com",
//       Subject : "This is the subject test gg 12",
//       Body : "And this is the body test gg 12"
//   }).then((message) => {
//       console.log('message',message)
//     }
//   );
// }

// mailTest()


const mailTitle = ref('')
const mailName = ref('')
const mailPhone = ref('')
const mailContent = ref('')
const mailQuestion = ref('')
const mailRule = ref({
    title:{frequency:0,special:false,max:30,min:2,verify:false,message:'',formatWarn:''},
    name:{frequency:0,special:false,max:30,min:3,verify:false,message:'',formatWarn:'',},
    phone:{frequency:0,special:true,max:20,min:5,verify:false,message:'',formatWarn:'請輸入數字',reg:/^[0-9]*$/},
    content:{frequency:0,special:true,max:30,min:5,verify:false,message:'',formatWarn:'請輸入正確電子信箱格式',reg:/^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/},
    question:{frequency:0,special:false,max:100,min:1,verify:false,message:'',formatWarn:'',},
})

const isMobile = computed(() => {
    if(!store.state.isMobile) store.commit('setMenu',false)
    return store.state.isMobile
})

const checkData = (newData,key) => {
    if((newData.length < mailRule.value[key].min) || (newData.length > mailRule.value[key].max)){
        mailRule.value[key].verify = false
        mailRule.value[key].message = '請輸入大於'+ mailRule.value[key].min + '且小於' + mailRule.value[key].max + '個字元'
    }else if (mailRule.value[key].special){
        if(mailRule.value[key].reg.test(newData)){
            mailRule.value[key].verify = true
            mailRule.value[key].message = ''
        }else{
            mailRule.value[key].verify = false
            mailRule.value[key].message = mailRule.value[key].formatWarn
        }
    }else{
        mailRule.value[key].verify = true
        mailRule.value[key].message = ''
    }
    mailRule.value[key].frequency++
}

watch(mailTitle, (newData, oldData) => {
    checkData(newData,'title')
})

watch(mailName, (newData, oldData) => {
    checkData(newData,'name')
})

watch(mailPhone, (newData, oldData) => {
    checkData(newData,'phone')
})

watch(mailContent, (newData, oldData) => {
    checkData(newData,'content')
})

watch(mailQuestion, (newData, oldData) => {
    checkData(newData,'question')
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
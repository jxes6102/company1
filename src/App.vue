<template>
  <div
    id="main"
    class="relative w-full h-[100vh] min-h-[100vh] overflow-y-auto overflow-x-hidden" 
    @scroll="handleScroll"
  >
    <headerView ref="headerItem" :heightStatus="scrollStutus"></headerView>
    <!-- <Transition
      appear
      mode="out-in"
      enter-active-class="animate__animated animate__fadeIn"
      leave-active-class="animate__animated animate__fadeOut"
    >
      <router-view class="relative" :class="menuStatus ? 'pt-[50vh]' : 'pt-[10vh]'"/>
    </Transition> -->
    <router-view v-slot="{ Component, route }" class="relative" :class="menuStatus ? 'pt-[50vh]' : 'pt-[10vh]'">
      <Transition enter-active-class="animate__animated animate__fadeIn">
        <component :is="Component" :key="route.path" />
      </Transition>
    </router-view>
    <footerView></footerView>
  </div>
</template>
<script setup>
/*eslint-disable*/
  import headerView from './components/headerView.vue';
  import footerView from './components/footerView.vue';
  import { ref,computed,onMounted,provide } from 'vue';
  import { useStore } from "vuex";
  import 'animate.css';
  console.log('test 2')
  const store = useStore()
  const scrollStutus = ref(true)
  const informationData = ref([
    {
      url:require('./assets/img/dog-1.png'),
      title:'這是標題1',
      time:'2023-04-29 10:02:20',
      imgText:'狗狗不但順利從桌上拿下手電筒，還馬上按下電源測試。圖/翻攝自微博',
      content1:'不少人認為狗狗是一種非常聰明且易於訓練的動物，有些品種的狗狗智商甚至和3、4歲的兒童不相上下。有飼主就在微博上分享自家黃金獵犬不但能和她遠端通話，甚至還會在夜晚拿著手電筒去接她回家。',
      content2:'從攝影機紀錄可以看到，飼主從遠端呼喚著愛犬的名字「冬瓜」，只見冬瓜爬起來尋找主人的身影，接著很快就明白主人正在透過手機跟牠講話。原來是主人手機快沒電，叫狗狗拿桌上的手電筒到村口去接她。只見冬瓜不但馬上就從正確位置拿到手電筒，還成功把電源打開，興高采烈地準備去迎接主人。'
    },
    {
      url:require('./assets/img/dog-2.png'),
      title:'這是標題2',
      time:'2023-04-29 10:02:20',
      imgText:'狗狗不但順利從桌上拿下手電筒，還馬上按下電源測試。圖/翻攝自微博',
      content1:'不少人認為狗狗是一種非常聰明且易於訓練的動物，有些品種的狗狗智商甚至和3、4歲的兒童不相上下。有飼主就在微博上分享自家黃金獵犬不但能和她遠端通話，甚至還會在夜晚拿著手電筒去接她回家。',
      content2:'從攝影機紀錄可以看到，飼主從遠端呼喚著愛犬的名字「冬瓜」，只見冬瓜爬起來尋找主人的身影，接著很快就明白主人正在透過手機跟牠講話。原來是主人手機快沒電，叫狗狗拿桌上的手電筒到村口去接她。只見冬瓜不但馬上就從正確位置拿到手電筒，還成功把電源打開，興高采烈地準備去迎接主人。'
    },
    {
      url:require('./assets/img/dog-3.png'),
      title:'這是標題3',
      time:'2023-04-29 10:02:20',
      imgText:'狗狗不但順利從桌上拿下手電筒，還馬上按下電源測試。圖/翻攝自微博',
      content1:'不少人認為狗狗是一種非常聰明且易於訓練的動物，有些品種的狗狗智商甚至和3、4歲的兒童不相上下。有飼主就在微博上分享自家黃金獵犬不但能和她遠端通話，甚至還會在夜晚拿著手電筒去接她回家。',
      content2:'從攝影機紀錄可以看到，飼主從遠端呼喚著愛犬的名字「冬瓜」，只見冬瓜爬起來尋找主人的身影，接著很快就明白主人正在透過手機跟牠講話。原來是主人手機快沒電，叫狗狗拿桌上的手電筒到村口去接她。只見冬瓜不但馬上就從正確位置拿到手電筒，還成功把電源打開，興高采烈地準備去迎接主人。'
    },
    {
      url:require('./assets/img/dog-4.png'),
      title:'這是標題4',
      time:'2023-04-29 10:02:20',
      imgText:'狗狗不但順利從桌上拿下手電筒，還馬上按下電源測試。圖/翻攝自微博',
      content1:'不少人認為狗狗是一種非常聰明且易於訓練的動物，有些品種的狗狗智商甚至和3、4歲的兒童不相上下。有飼主就在微博上分享自家黃金獵犬不但能和她遠端通話，甚至還會在夜晚拿著手電筒去接她回家。',
      content2:'從攝影機紀錄可以看到，飼主從遠端呼喚著愛犬的名字「冬瓜」，只見冬瓜爬起來尋找主人的身影，接著很快就明白主人正在透過手機跟牠講話。原來是主人手機快沒電，叫狗狗拿桌上的手電筒到村口去接她。只見冬瓜不但馬上就從正確位置拿到手電筒，還成功把電源打開，興高采烈地準備去迎接主人。'
    },
    {
      url:require('./assets/img/dog-5.png'),
      title:'這是標題5',
      time:'2023-04-29 10:02:20',
      imgText:'狗狗不但順利從桌上拿下手電筒，還馬上按下電源測試。圖/翻攝自微博',
      content1:'不少人認為狗狗是一種非常聰明且易於訓練的動物，有些品種的狗狗智商甚至和3、4歲的兒童不相上下。有飼主就在微博上分享自家黃金獵犬不但能和她遠端通話，甚至還會在夜晚拿著手電筒去接她回家。',
      content2:'從攝影機紀錄可以看到，飼主從遠端呼喚著愛犬的名字「冬瓜」，只見冬瓜爬起來尋找主人的身影，接著很快就明白主人正在透過手機跟牠講話。原來是主人手機快沒電，叫狗狗拿桌上的手電筒到村口去接她。只見冬瓜不但馬上就從正確位置拿到手電筒，還成功把電源打開，興高采烈地準備去迎接主人。'
    },
  ])
  provide('informationData', informationData)

  const menuStatus = computed(() => {
      return store.state.menuStatus
  })

  const handleScroll = (el) => {
    if(el.target.scrollTop === 0){
      scrollStutus.value = true
    }else{
      scrollStutus.value = false
    }
  }

  const setWidth = () => {
    store.commit('setMobile',window.innerWidth)
  }
  
  const headerItem = ref(null)

  // watch(num, (nV, oV) => {
  //   console.log(nV, oV)
  // }, {
  //   immediate: true
  // })

  onMounted(() => {
    // console.log('headerItem.value',headerItem.value.$el.clientHeight)
    setWidth()
    window.addEventListener('resize', () => {
      setWidth()
    }, false);
    
  })

</script>
<style lang="scss">
#app {
  position: relative;
  height: 100%;
  width: 100%;
  overflow: auto;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
/*
nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
*/

@media (min-width: 767px)  {
/* 網頁捲軸【寬度】 */
::-webkit-scrollbar {
  width: 10px;
}

/* 網頁捲軸【背景】顏色 */
::-webkit-scrollbar-track {
  background: #cbfbac;
}

/* 網頁捲軸【把手】顏色 */
::-webkit-scrollbar-thumb {
  background: #87f87a;
  border-radius: 5px;
}

/* 網頁捲軸【滑過時】把手的顏色 */
::-webkit-scrollbar-thumb:hover {
  background: #9ff99a;
}
}

</style>

<template>
    <div 
        class="transition-all fixed w-full md:w-[calc(100%_-_10px)] top-0 left-0 z-10 flex flex-wrap justify-around items-center bg-[rgb(255,255,255,0.9)]"
        :class="menuHeight"
    >
        <div 
          class="relative w-[50%] h-[8vh] md:w-[25%] md:h-[8vh] text-xl md:text-3xl flex flex-wrap justify-center items-center font-extrabold"
          @click="tohome()"
          >菁鉐股份有限公司
        </div>
        <div 
            v-if="!isMobile" 
            class="relative w-[50%] md:w-[60%] h-[8vh]"
        >
            <nav id="primary_nav_wrap" class="relative w-full">
                <ul class="relative w-full">
                  <li 
                    v-for="(item, index) in menuList" :key="index"
                    class="w-[20%] h-[8vh] mine-flex-center text-[#6a6a6a] text-2xl font-bold hover:text-[#2fbc36]"
                    @click="toLink(index)"
                  >{{item.text}}</li>
                  <!-- <li class="w-[25%] h-[8vh] mine-flex-center text-[red] text-2xl font-extrabold hover:text-3xl ">關於OO</li>
                  <li class="w-[25%] h-[8vh] mine-flex-center text-[red] text-2xl font-extrabold hover:text-3xl ">最新消息</li>
                  <li class="w-[25%] h-[8vh] mine-flex-center text-[red] text-2xl font-extrabold hover:text-3xl ">服務介紹</li>
                  <li class="w-[25%] h-[8vh] mine-flex-center text-[red] text-2xl font-extrabold hover:text-3xl ">聯絡我們</li> -->
                  <!-- <li><a href="#">Menu 2</a>
                    <ul>
                      <li><a href="#">Sub Menu 1</a></li>
                      <li><a href="#">Sub Menu 2</a></li>
                      <li><a href="#">Sub Menu 3</a></li>
                    </ul>
                  </li> -->
                  <!-- <li><a href="#">Menu 1</a>
                    <ul>
                      <li><a href="#">Sub Menu 1</a></li>
                      <li><a href="#">Sub Menu 2</a></li>
                      <li><a href="#">Sub Menu 3</a></li>
                      <li><a href="#">Sub Menu 4</a>
                        <ul>
                          <li><a href="#">Deep Menu 1</a>
                            <ul>
                              <li><a href="#">Sub Deep 1</a></li>
                              <li><a href="#">Sub Deep 2</a></li>
                              <li><a href="#">Sub Deep 3</a></li>
                                <li><a href="#">Sub Deep 4</a></li>
                            </ul>
                          </li>
                          <li><a href="#">Deep Menu 2</a></li>
                        </ul>
                      </li>
                      <li><a href="#">Sub Menu 5</a></li>
                    </ul>
                  </li>
                  <li><a href="#">Menu 2</a>
                    <ul>
                      <li><a href="#">Sub Menu 1</a></li>
                      <li><a href="#">Sub Menu 2</a></li>
                      <li><a href="#">Sub Menu 3</a></li>
                    </ul>
                  </li>
                  <li><a href="#">Menu 3</a>
                    <ul>
                      <li class="dir"><a href="#">Sub Menu 1</a></li>
                      <li class="dir"><a href="#">Sub Menu 2 THIS IS SO LONG IT MIGHT CAUSE AN ISSEUE BUT MAYBE NOT?</a>
                        <ul>
                          <li><a href="#">Category 1</a></li>
                          <li><a href="#">Category 2</a></li>
                          <li><a href="#">Category 3</a></li>
                          <li><a href="#">Category 4</a></li>
                          <li><a href="#">Category 5</a></li>
                        </ul>
                      </li>
                      <li><a href="#">Sub Menu 3</a></li>
                      <li><a href="#">Sub Menu 4</a></li>
                      <li><a href="#">Sub Menu 5</a></li>
                    </ul>
                  </li> -->
                </ul>
            </nav>
        </div>
        <div v-else @click="show"><el-icon size="40" color="green"><Menu /></el-icon></div>
        <div v-if="menuStatus" class="w-full relative">
          <nav id="primary_nav_wrap" class="relative w-full">
              <ul class="relative w-full">
                <li 
                  v-for="(item, index) in menuList" :key="index"
                  class="w-[100%] h-[8vh] mine-flex-center text-[#6a6a6a] text-2xl font-bold hover:text-[#2fbc36]"
                  @click="toLink(index)"
                >{{item.text}}</li>
                <!-- <li class="w-[100%] h-[8vh] mine-flex-center text-[red] text-2xl font-extrabold hover:text-3xl">關於OO</li>
                <li class="w-[100%] h-[8vh] mine-flex-center text-[red] text-2xl font-extrabold hover:text-3xl">最新消息</li>
                <li class="w-[100%] h-[8vh] mine-flex-center text-[red] text-2xl font-extrabold hover:text-3xl">服務介紹</li>
                <li class="w-[100%] h-[8vh] mine-flex-center text-[red] text-2xl font-extrabold hover:text-3xl">聯絡我們</li> -->
              </ul>
          </nav>
        </div>
    </div>
</template>

<script setup>
/*eslint-disable*/
import { ref,computed,defineProps } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
const store = useStore()
const router = useRouter()

const props = defineProps({
    heightStatus: {
        type: Boolean,
        default: true
    }
})

const menuList = ref([
  {text:"關於菁鉐",url:'about'},
  {text:"最新消息",url:'information'},
  {text:"服務介紹",url:'service'},
  {text:"聯絡我們",url:'contact'},
  {text:"徵才資訊",url:'recruitment'}
])

const isMobile = computed(() => {
    if(!store.state.isMobile) store.commit('setMenu',false)
    return store.state.isMobile
})

const menuStatus = computed(() => {
    return store.state.menuStatus
})

const menuHeight = computed(() => {
    // if(props.heightStatus && menuStatus.value){
    //   return "h-[55vh]"
    // }else if(!props.heightStatus && menuStatus.value){
    //   return "h-[50vh]"
    // }else if(props.heightStatus && !menuStatus.value){
    //   return "h-[15vh]"
    // }else{
    //   return "h-[10vh]"
    // }
    if(menuStatus.value){
      return "h-[50vh]"
    }else{
      return "h-[10vh]"
    }
})

const show = () => {
  store.commit('setMenu',!menuStatus.value)
}

const toLink = (val) => {
  router.push({ path: menuList.value[val].url })
}

const tohome = () => {
  router.push({ path: '/' })
}

</script>

<style lang="scss" scoped>
    .flex-grow {
        flex-grow: 1;
    }
    #primary_nav_wrap
    {
      width: 100%;
      height: auto;
    }

    #primary_nav_wrap ul
    {
        list-style:none;
        position:relative;
        float:left;
        margin:0;
        padding:0
    }

    //#primary_nav_wrap ul a
    //{
    //    display:block;
    //    color:#333;
    //    text-decoration:none;
    //    font-weight:700;
    //    font-size:12px;
    //    line-height:32px;
    //    padding:0 15px;
    //    font-family:"HelveticaNeue","Helvetica Neue",Helvetica,Arial,sans-serif
    //}

    #primary_nav_wrap ul li
    {
        position:relative;
        float:left;
        margin:0;
        padding:0
    }

    #primary_nav_wrap ul li.current-menu-item
    {
        background:#ddd
    }

    //#primary_nav_wrap ul li:hover
    //{
    //    background:#b0afaf
    //}

    #primary_nav_wrap ul ul
    {
        display:none;
        position:absolute;
        top:100%;
        left:0;
        background:#fff;
        padding:0
    }

    #primary_nav_wrap ul ul li
    {
        float:none;
        width:200px
    }

    //#primary_nav_wrap ul ul a
    //{
    //    line-height:120%;
    //    padding:10px 15px
    //}

    #primary_nav_wrap ul ul ul
    {
        top:0;
        left:100%
    }

    #primary_nav_wrap ul li:hover > ul
    {
        display:block
    }
</style>
<template>
    <div 
        class="transition-all fixed w-[calc(100%_-_10px)] top-0 left-0 bg-[#ffffff] z-10 flex flex-wrap justify-around items-center"
        :class="heightStatus ? 'h-[15vh]' : 'h-[10vh]'"
    >
        <div class="relative w-[15%] h-[8vh] bg-[#6150cc] flex flex-wrap justify-center items-center">這是圖片</div>
        
        <div class="w-[auto] h-[8vh]">
            <nav id="primary_nav_wrap">
                <ul>
                  <li class="current-menu-item"><a href="#">Home</a></li>
                  <li><a href="#">Menu 1</a>
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
                  </li>
                  <li><a href="#">Menu 4</a></li>
                  <li><a href="#">Menu 5</a></li>
                  <li><a href="#">Menu 6</a></li>
                  <li><a href="#">Contact Us</a></li>
                </ul>
            </nav>
        </div>
        <!-- <el-menu
            :default-active="activeIndex"
            class="el-menu-demo w-[auto] h-[8vh]"
            mode="horizontal"
            @select="handleSelect"
        >
            <el-menu-item index="1">關於頂碩</el-menu-item>
            <el-sub-menu index="2">
                <template #title>最新消息</template>
                    <el-menu-item index="2-1">item one</el-menu-item>
                    <el-menu-item index="2-2">item two</el-menu-item>
                    <el-menu-item index="2-3">item three</el-menu-item>
                    <el-sub-menu index="2-4">
                        <template #title>item four</template>
                            <el-menu-item index="2-4-1">item one</el-menu-item>
                            <el-menu-item index="2-4-2">item two</el-menu-item>
                            <el-menu-item index="2-4-3">item three</el-menu-item>
                    </el-sub-menu>
            </el-sub-menu>
            <el-menu-item index="3">服務介紹</el-menu-item>
            <el-menu-item index="4">聯絡我們</el-menu-item>
        </el-menu> -->
    </div>
</template>

<script setup>
/*eslint-disable*/
import { ref,defineProps } from "vue"; 
const props = defineProps({
    heightStatus: {
        type: Boolean,
        default: true
    }
})

// const activeIndex = ref('1')
// const handleSelect = (key, keyPath) => {
//   console.log(key, keyPath)
// }
</script>

<style lang="scss" scoped>
    .flex-grow {
        flex-grow: 1;
    }
    #primary_nav_wrap
    {
        margin-top:0px
    }

    #primary_nav_wrap ul
    {
        list-style:none;
        position:relative;
        float:left;
        margin:0;
        padding:0
    }

    #primary_nav_wrap ul a
    {
        display:block;
        color:#333;
        text-decoration:none;
        font-weight:700;
        font-size:12px;
        line-height:32px;
        padding:0 15px;
        font-family:"HelveticaNeue","Helvetica Neue",Helvetica,Arial,sans-serif
    }

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

    #primary_nav_wrap ul li:hover
    {
        background:#f6f6f6
    }

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

    #primary_nav_wrap ul ul a
    {
        line-height:120%;
        padding:10px 15px
    }

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
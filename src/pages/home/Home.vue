<!--
 * @Author: your name
 * @Date: 2021-11-09 08:20:04
 * @LastEditTime: 2021-11-09 10:48:50
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \vue小项目\question\src\pages\home\Home.vue
-->
<template>
  <div class="home_container">
    <itemcontainer :fatherComponents="name"></itemcontainer>
  </div>
</template>

<script>
  import itemcontainer from '../../components/itemcontainer'
export default {
  data() {
    return {
      name:'home'
    }
  },
  components:{
    itemcontainer
  }
}
</script>

<style>

</style>
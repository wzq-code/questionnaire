<!--
 * @Author: your name
 * @Date: 2021-11-09 08:21:07
 * @LastEditTime: 2021-11-10 11:29:54
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \vue小项目\question\src\pages\item\Item.vue
-->
<template>
  <div>
    <itemcontainer :fatherComponents="name"></itemcontainer>
    
  </div>
</template>

<script>
  import itemcontainer from '../../components/itemcontainer.vue'
export default {
  data() {
    return {
      name:'item'
    }
  },
  components:{
    itemcontainer
  }
}
</script>

<style>

</style>
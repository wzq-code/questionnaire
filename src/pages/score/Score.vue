<!--
 * @Author: your name
 * @Date: 2021-11-11 09:26:08
 * @LastEditTime: 2021-11-11 16:33:50
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \vue小项目\question\src\pages\score\score.vue
-->
<template>
  <div class="score">
    <div class="scoreBg">
      <p class="scoreNum">{{allScore}} 分</p>
      <div class="shared btn"></div>
    </div>
    <p class="detailInfo">如果你有任何问题请联系</p>
    <div class="contact"></div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
export default {
  data() {
    return {
      allScore:0,
      rightAnswer: [2, 7, 12, 13, 18]
    }
  },
  mounted(){
    // document.body.style.backgroundImage = 'url(../img/4-1.jpg)';
    this.computedScore()
  },
  computed:mapState(['answerid']),
  methods:{
    computedScore(){
      this.answerid.forEach((item , index) => {
        if(item ==this.rightAnswer[index]){
          this.allScore +=20;
        }
      });
    }
  }
}
</script>

<style scoped>
.scoreBg{
  width: 200px;
  height: 191px;
  position: absolute;
  top: 50px;
  left: calc(50% - 100px);
  background-image: url('../../images/4-2.png');
  background-size: 100%;
  z-index: 20;
  color: rgb(161,124,80);
}
.scoreNum{
  position: absolute;
  top: 100px;
  left: calc(50% - 45px);
  font-size: 35px;
  font-weight: bold;
}
.btn{
	width: 120px;
	height: 51px;
	display: block;
	position: absolute;
	top: 220px;
	left: calc(50% - 60px );
}
.shared{
  background-image: url('../../images/4-3.png');
  background-size: 100%;
}
.detailInfo{
  color: #bfa;
  position: absolute;
  bottom: 300px;
  left: calc(50% - 90px);
  font-weight: bold;
}
.contact{
  width: 200px;
  height: 229px;
  background-image: url('../../images/qqchar2.jpg');
  background-size: 100%;
  position: absolute;
  left: calc(50% - 100px);
  bottom: 50px;
}
</style>
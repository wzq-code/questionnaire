<!--
 * @Author: your name
 * @Date: 2021-11-09 08:21:26
 * @LastEditTime: 2021-11-11 16:23:06
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \vue小项目\question\src\components\itemcontainer.vue
-->
<template>
	<div class="item">
		<header class="top_tips">
			<div class="home_tips" v-if="fatherComponents === 'home'">{{level}}</div>
			<div class="item_tips" v-if="fatherComponents === 'item'">题目{{itemNum}}</div>
		</header>
		<div class="home" v-if="fatherComponents === 'home'">
			<div class="home_logo logo"></div>
			<router-link to="item" class="start btn"></router-link>
		</div>
		<div class="item" v-if="fatherComponents === 'item'">
			<div class="item_logo logo"></div>
			<div class="itemdetail_wrapper">
					<div class="itemdetail" >
					<h2>{{itemDetail[itemNum-1].topic_name}}</h2>
						<ul class="itemlist">
							<li v-for="(item,index) in itemDetail[itemNum-1].topic_answer" :key="index" @click="selectAnswer(index,item.topic_answer_id)">
								<span :class="{active:index === checkNum}">{{checkType(index+1)}}</span>
								<span>{{item.answer_name}}</span>
							</li>
						</ul>
					</div>
			</div>
			<div class="next btn" @click="nextItem" v-if="itemNum < itemDetail.length"></div>
			<div class="submit btn" v-else @click="submitAnswer"></div>
			<!-- <div class="submit btn"></div> -->
		</div>
	</div>
</template>

<script>
	import { mapState , mapActions} from 'vuex'
export default {
	data() {
		return {
			checkNum:null,
			checkId:null
		}
	},
	methods:{
		checkType(type){
			switch(type){
				case 1:
				return 'A';
				case 2:
					return 'B';
				case 3:
					return 'C';
				case 4:
					return 'D';
			}
		},
		selectAnswer(index,type){
			this.checkNum = index
			this.checkId = type
		},
		nextItem(){
			if(this.checkNum !== null){
				this.$store.dispatch('addNum',this.checkId)
				this.checkNum = null
			}
			else{
				alert('你还没有选择答案')
			}
		},
		submitAnswer(){
			this.$store.dispatch('addNum',this.checkId)
			this.$router.push('score')
		}
	},
	props:{
		fatherComponents:{
			type:String,
			default(){
				return '';
			}
		},

	},
	computed:mapState([
		'level',
		'itemNum',
		'timer',
		'itemDetail'
	]),
	
	created(){
		console.log(12312312);
		document.body.style.backgroundImage = "url('images/1-1.jpg')";
	}
}
</script>

<style>
*{
	margin: 0;
	padding: 0;
}
html{
	background-color: #bfa;
	background-image: url('../images/1-1.jpg');
	background-size: 100%;
}
body{
	/* background-color: black; */
	background-image: url('../images/1-1.jpg');
	background-size: 100%;
}

.top_tips{
	width: 100px;
	height: 145px;
	position: absolute;
	right: 30px;
	top: 20px;
	background-image: url('../images/WechatIMG2.png');
	background-size: 100%;
	background-position-y: -65px;
}
.home_tips{
	width: 100%;
	position: absolute;
	top: 85px;
	color: rgb(161,124,80);
	font-weight: bold;
	z-index: 10;
}
.item_tips{
	width: 100%;
	position: absolute;
	top: 85px;
	color: rgb(161,124,80);
	font-weight: bold;
	z-index: 10;
}
.logo{
	position: absolute;
	left: 32px;
	top: 90px;
	width: 300px;
	height: 300px;
	background-size: 100%;
}
.home_logo {
	background-image: url('../images/1-2.png');
}
.item_logo{
	background-image: url('../images/2-1.png');
}

.btn{
	width: 120px;
	height: 58px;
	display: block;
	position: absolute;
	top: 336px;
	left: 118px;
}
.start{
	background-image: url('../images/1-4.png');
	background-size: 100%;
}
.next{
	background-image: url('../images/2-2.png');
	background-size: 100%;
}
.submit{
	background-image: url('../images/3-1.png');
	background-size: 100%;
}
.itemdetail_wrapper{
	position: absolute;
	top: 125px;
	left: 53px;
	width: 250px;
}
.itemdetail{
	color: rgb(161,124,80);
	display: flex;
	flex-direction: column;
}
.itemdetail h2{
	text-align: left;
	margin: 10px 0;
}
.itemlist{
	list-style: none;
	width: 150px;
	margin: 0 auto;
	
}
.itemlist li{
	margin: 3px 0;
	display: flex;
	text-align: left;
}
.itemlist li>span:nth-child(1){
	margin-right: 13px;
	display: inline-block;
	border:1px solid black;
	border-radius: 50%;
	width: 17px;
	height: 17px;
	text-align: center;
	padding: 1px;
}
.active{
	margin-right: 13px;
	display: inline-block;
	border:1px solid black;
	border-radius: 50%;
	width: 17px;
	height: 17px;
	text-align: center;
	padding: 1px;
	background-color: orange;
	color: #bfa;
}
</style>
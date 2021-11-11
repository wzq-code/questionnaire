/*
 * @Author: your name
 * @Date: 2021-11-10 21:25:44
 * @LastEditTime: 2021-11-11 08:15:49
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \vue小项目\question\src\store\mutation.js
 */
const ADD_ITEMNUM = 'ADD_ITEMNUM';
const REMBER_ANSWER = 'REMBER_ANSWER'
const REMBER_ALLTIME = 'REMBER_ALLTIME'
export default {
  [ADD_ITEMNUM](state,num){
    state.itemNum +=num;
  },
  [REMBER_ANSWER](state,id){
    state.answerid.push(id)
  },
  [REMBER_ALLTIME](state){
    state.timer = setInterval(() => {
      state.allTime +=1;
    }, 1000);
  }
}
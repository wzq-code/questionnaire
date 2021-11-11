/*
 * @Author: your name
 * @Date: 2021-11-10 20:15:55
 * @LastEditTime: 2021-11-11 08:25:49
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \vue小项目\question\src\store\action.js
 */
export default {
  addNum({commit , state} , id){
    commit('REMBER_ANSWER' , id)
    if(state.itemNum<state.itemDetail.length)
    commit('ADD_ITEMNUM',1)
  },

}
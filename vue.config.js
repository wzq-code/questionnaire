/*
 * @Author: your name
 * @Date: 2021-11-09 23:37:16
 * @LastEditTime: 2021-11-09 23:37:16
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \vue小项目\question\vue.config.js
 */
const path = require('path');        //引入path模块
function resolve(dir){
    return path.join(__dirname,dir)  //path.join(__dirname)设置绝对路径
}
module.exports={
    chainWebpack:(config)=>{
        config.resolve.alias
            //set第一个参数：设置的别名，第二个参数：设置的路径
            .set('@',resolve('./src'))
            .set('assets',resolve('@/assets'))
            .set('components',resolve('./src/components'))
            .set('pages',resolve('src/pages'))
            .set('common',resolve('src/common'))
            .set('images',resolve('src/images'))
    },
    publicPath:"./",
    css:{
      loaderOptions:{
        less:{
          javascriptEnabled:true,
        }
      }
    }
}
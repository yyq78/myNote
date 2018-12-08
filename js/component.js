// var vm=new Vue(
//     {
//         el:"#postSource",
//         data: {
//             title:'',
//             content:''
//         }
//     }
// );
// var vm2=new Vue({
//     el:"#app1",
//     data(){
//          return {
//              message:'发光飞碟'
//          }
//     }
// })
Vue.component('component-a',{
    data () {
        return {
            message: 'dfdf'
        }
    },
    template: `<div class="seachbar-layout">
                <el-input id="app1" placeholder="搜索..." prefix-icon="el-icon-search" class="searchbar-input" v-model="message" @input="changeTxt"></el-input>
            <!--</el-header>-->
               </div>`
    ,
    methods: {
        changeTxt(){
            console.log(this.message)
        }
    }
})
Vue.component('component-b',{
    data(){
        return {
            title:'标题',
            content:'文章'
        }
    },
    template:`            <div id="postSource">
                 <form>
                      <!--<el-header class="topic">-->
                      <div class="topic">
                          <input type="text" id="topic" class="topic-item1" placeholder=" 无标题笔记" v-model="title" @input="changeTitle"/>
                          <el-button type="primary" plain class="topic-item2">保存</el-button>
                      <!--</el-header>-->
                      </div>
                        <!--<el-button type="primary" plain class="topic-item2">保存</el-button>
                          <el-button type="primary" plain class="topic-item3">取消</el-button>
                          <el-button type="primary" plain class="topic-item2">保存</el-button>-->
                        <textarea name="editor1" id="editor1" rows="10" cols="80" v-model="content">
                          Start your writing...
                        </textarea>
                   </form>
                 </div>`
    ,
    methods:{
        changeTitle(){
            console.log(this.title);
        }
    }
})
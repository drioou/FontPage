/**
 * Created by duanyong on 2017/4/7.
 */
var app = new Vue({
    el: '#app',
    data: {
        message: 'hell world'
    }
});
var app2 = new Vue({
    el: "#app-2",
    data: {
        message: '页面加载于' + new Date
    }
});
//        var app2 = new Vue({
//            el: '#app-2',
//            data: {
//                message: '页面加载于 ' + new Date()
//            }
//        })
var app3 = new Vue({
    el:'#app-3',
    data:{
        seen:false
    }
})
var app4 = new Vue({
    el:'#app-4',
    data:{
        todos:[
            {text:'学习Javascript'},
            {text:'学习Vue'},
            {text:'学习牛项目'}
        ]
    }
})
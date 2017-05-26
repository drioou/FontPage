var app = new Vue({
  el: '#app',
  data: {
    message: 'hello'
  }
});
var app2 = new Vue({
  el: '#app-2',
  data: {
    message: 'you loaded this page on ' + new Date()
  }
});
var app3 = new Vue({
  el: '#app-3',
  data: {
    seen: false
  }
});
var app4 = new Vue({
  el: '#app-4',
  data: {
    todos: [
      {text: 'learn javascript'},
      {text: 'learn vue'},
      {text: 'build something awesome'}
    ]
  }
});
var app5 = new Vue({
  // el: '#app-5',
  // data: {
  //   message: 'hello vue.js'
  // },
  // methods: {
  //   reverseMessage: function () {
  //     this.message = this.message.split('').reverse().join('')
  //     console.log(this.message.split(''));
  //   }
  // },
  data:{
    a:1
  },
  created:function(){
    console.log("a is:" +this.a)
  }
});

Vue.component('todo', {
  template: '<li>this is a todo</li>'
})



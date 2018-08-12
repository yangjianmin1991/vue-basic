new Vue({
    el: '#vue-app',
    data: {
        name: 'Shaun',
        //测试属性绑定:v-bind:
        website:"https://www.baidu.com/",
        //测试:v-html
        websiteTag:"<a href='https://www.baidu.com/'>websiteTag</a>"
    
    },
    methods:{
     greet: function(time){
      
        return "Good"+time+","+this.name;

     }

    }
});

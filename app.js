/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-05-26 09:02:24
 * @version $Id$
 */
Vue.config.devtools = true
Vue.http.options.emulateJSON = true;

Vue.filter('reverse',function(value){
    return value.split('').reverse().join('');
});

vm = new Vue({
    el: '#app',
    data: {
        books:'',
        sortparam:''
    },
    ready:function(){
        // this.$http.get('book.json').then(function(response){
        //     this.$set('books',response.data);
        // })
        
        //post请求需要emulateJSON=true,可以设置全局的;post第二个参数是传递的数据，json格式
        // this.$http.post('post.php',{'book':'all'}).then(function(res){
        //     this.$set('books',res.data);
        // })

        this.$http.post('post.php',{'book':'all'}).then((res) => {
            this.$set('books',res.data);
        })
    },
    methods:{
        addBook:function(){
            //计算书的id
            this.book.id = this.books.length + 1;
            this.books.push(this.book);
            //将input中的数据重置
            this.book = '';
        },
        delBook:function(book){
            this.books.$remove(book);
        },
        sortBy:function(sortparam){
            this.sortparam = sortparam
        }
    },
    computed:{
        sum:function(){
            var result = 0;
            for(var i=0; i<this.books.length; i++){
                result = Number(this.books[i].price) + result;

            };
            return result;
        }

        // sum:{
        //     get:function(){
        //         var result=0;
        //         for(var i=0; i<this.books.length; i++){
        //             result += Number(this.books[i].price);
        //         }
        //         return result;
        //     }
        // }
    }
});


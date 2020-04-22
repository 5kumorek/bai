Vue.component('counter', {
    template: '<div><button @click="count++">Add</button><span> {{count}} </span><button @click="count--">Sub</button></div>',
    data(){
        return{
            count: 0
        }
    }
})

new Vue({
    el: '#app'
})
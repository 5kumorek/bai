Vue.component('binary', {
    template: '<div><p>{{toBinary}}</p></div>',
    props: ['number'],
    computed: 
    { 
        toBinary() {
            return this.number +"(10) = " + parseInt(this.number).toString(2) +"(2)"
        } 
    } 
})

new Vue({
    el: '#app'
})
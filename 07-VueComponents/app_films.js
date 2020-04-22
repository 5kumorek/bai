Vue.component('film', {
    template: '<div><h1>{{name}}</h1><p>{{year}}</p><p>{{director}}</p></div>',
    props: ['name', 'year', 'director']
})

new Vue({
    el: '#app'
})
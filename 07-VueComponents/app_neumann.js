Vue.component('arch', {
    template: '<div><p>{{id}}: {{title}}</h1></p></div>',
    props: ['id', 'title']
})

new Vue({
    el: '#app',
    data:{ elements: [
        { id: 1, title: 'Processing unit' },
        { id: 2, title: 'Control unit' },
        { id: 3, title: 'Memory' },
        { id: 4, title: 'External mass storage' },
        { id: 5, title: 'Input and output mechanisms' }
    ]}
})
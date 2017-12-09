var Child = {
    template: '<div>A custom component!</div>'
}

new Vue({
    el: '#app',
    template: '<my-component></my-component>',
    components: {
        'my-component': Child
    }
})

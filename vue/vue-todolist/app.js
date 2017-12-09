
var sonEmit = {
    template: `<p><span>sonEmit: </span><input v-model='messageSon' v-on:input='emitMessage()'></p>`,
    data: function(){
            return {
                messageSon: 'default'
            }
    },
    methods: {
        emitMessage: function(){
            this.$emit('change',this.messageSon)
        }
    }
}

var sonProp = {
    props: ['messageSon'],
    template: `<p><span>sonProp: </span><span>{{messageSon}}</span></p>`
}

var Child = {
    template: `<div>A custom component!
                    <p><span>Father: </span>{{message}}</p>
                    <sonemit-component v-on:change = "changeMessage($event)"></sonemit-component>
                    <sonprop-component :messageSon = "message"></sonprop-component>

               </div>`,
    data: function(){
            return {
                    message: 'Default'
                   }
               },
               methods:{
                    changeMessage: function($event){
                        this.message = $event;
                    }
               },
    components: {
        'sonemit-component': sonEmit,
        'sonprop-component': sonProp
    }
}

new Vue({
    el: '#app',
    template: '<my-component></my-component>',
    components: {
        'my-component': Child
    }
})

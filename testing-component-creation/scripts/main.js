let data = {
    name: 'Mycroft',
    surname: 'Holmes'
}

// Component: (String: comp_name, Object: comp_params)
Vue.component('greeting', {
    template: '<p>Hey {{ name }} {{ surname }}, I am a reusable component.<button v-on:click="changeName">Change Name</button></p>',
    data() {
        return data;
    },
    methods: {
        changeName() {
            this.name = 'Yoshiko';
        }
    }
});

new Vue({
    el: '#vue-app-one'
});

new Vue({
    el: '#vue-app-two'
});

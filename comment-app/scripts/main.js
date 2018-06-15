// Importing components
import { my-component } as ComponentFromFile from "../components/my-component.vue";


// Global component
const MyComponent = {
    template: `<div>Local registration with a const</div>`
};

// Basic creation
new Vue({
    el: "#app",
    data() {
        return {
            message: "Hello World"
        };
    },
    // Local components
    components: {
        // 'my-component': {
        //     template: `<h2>I'm another component</h2>`
        // }
        'my-component': MyComponent,
        'component-from-file': ComponentFromFile
    }
});

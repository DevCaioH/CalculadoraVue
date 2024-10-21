

// el: '#app',
// render: h => h(App) 
// render(createElement){
//     return createElement(App)
// } Faz a mesma coisa que a função de cima

// Padrão utilizado pelo vue para fazer a criação

import Vue from 'vue'
import App from './App'
new Vue({
    render: h => h(App)
}).$mount("#app")
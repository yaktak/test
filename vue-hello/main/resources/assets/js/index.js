console.log("Hello, World!")

import Vue from 'vue'

import App from './components/App'

// コンポーネントのグローバル登録
//Vue.component('example-component', ExampleComponent)

// コンポーネントのローカル登録
const app = new Vue({

  // Vueインスタンスを関連付けるDOM
  el: '#app',

  // ここに列挙したコンポーネントはこのコンポーネントのスコープ内でのみ利用可能
  components: {
    App,
  },

  // 上記のコンポーネントを指定
  template: '<app/>',
})

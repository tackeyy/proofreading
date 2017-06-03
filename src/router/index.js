import Vue from 'vue'
import Router from 'vue-router'
import VueProofReadingTextArea from '../components/ProofReadingTextArea'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Top',
      component: VueProofReadingTextArea
    }
  ]
})

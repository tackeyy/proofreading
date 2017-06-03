<template>
  <div id="app" class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
    <vue-header></vue-header>
    <main class="mdl-layout__content">
        <router-view></router-view>
    </main>
    <vue-footer></vue-footer>
  </div>
</template>

<script>
import VueHeader from './components/Header'
import VueProofReadingTextArea from './components/ProofReadingTextArea'
import VueFooter from './components/Footer'

export default {
  name: 'app',
  components: {
    VueHeader,
    VueProofReadingTextArea,
    VueFooter
  }
}
</script>

<style>
html {
  height: 100%;
}

body {
  height: 100%;
  margin: 0;
}

main {
  height: 98%;
}
</style>

<template>
  <div class="mdl-grid fixed-height">
    <div id="editor" class="mdl-cell mdl-cell--6-col">
      <textarea v-model="input"></textarea>
    </div>
    <div id="result" class="mdl-cell mdl-cell--6-col">
      <div v-html="proofedText"></div>
    </div>
  </div>
</template>

<script>

const URL = 'https://api.a3rt.recruit-tech.co.jp/proofreading/v1/typo'
export default {
  name: 'Sample',

  data () {
    return {
      input: ''
    }
  },
  computed: {
    proofedText () {
      return this.hoge()
    }
  },
  methods: {
    hoge () {
      this.$http.get(URL).then(response => {
        return '成功'
      }, response => {
        console.info(response.status)
        return response.status
      })
    }
  }
}
</script>

<style scoped>
#editor {
  font-family: 'Helvetica Neue', Arial, sans-serif;
}

textarea {
  font-size: 1em;
  height: 97%;
  width: 100%;
}

#result {
  background-color: yellow;
}

.fixed-height {
  height: 97%;
}
</style>

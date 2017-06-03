<template>
  <div class="mdl-grid fixed-height">
    <div id="editor" class="mdl-cell mdl-cell--6-col">
      <textarea v-model="input"></textarea>
    </div>
    <div id="result" class="mdl-cell mdl-cell--6-col">
      <div v-html="compiledMarkdown"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sample',

  data () {
    return {
      input: '# hello'
    }
  },
  computed: {
    compiledMarkdown () {
      return '<h1>' + this.input + '</h1>'
    }
  },
  methods: {

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

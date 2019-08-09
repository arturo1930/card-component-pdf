<template>
  <div id="app">
    <main-remote-component></main-remote-component>
  </div>
</template>

<script lang="ts">
import Vue, { VueConstructor } from "vue";
import MainComponent from "../src/MainComponent.vue";

export default Vue.extend({
  components: { "main-remote-component": MainComponent }
});
</script>

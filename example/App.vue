<template>
  <div id="app">
    <main-remote-component></main-remote-component>
    <table-demo></table-demo>
    <pdf-jspdf></pdf-jspdf>
  </div>
</template>

<script lang="ts">
import Vue, { VueConstructor } from "vue";
import MainComponent from "../src/MainComponent.vue";
import TableDemo from "../src/components/table/Table.vue";
import JSPDF from "../src/components/jspdf/Pdf.vue";

export default Vue.extend({
  components: {
    "main-remote-component": MainComponent,
    "table-demo": TableDemo,
    "pdf-jspdf": JSPDF
  }
});
</script>

import MainComponent from "./MainComponent.vue";
import TableDemo from "./components/table/Table.vue";

export default {
  install(Vue: any, options: any) {
    Vue.component('main-remote-component', MainComponent);
    Vue.component('main-remote-table', TableDemo);
  }
}

module.exports = {MainComponent, TableDemo};
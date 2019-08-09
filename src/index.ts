import MainComponent from "./MainComponent.vue";
import TableComponent from "./components/table/Table.vue";

export default {
  install(Vue: any, options: any) {
    Vue.component('main-remote-component', MainComponent);
    Vue.component('main-remote-table', TableComponent);
  }
}

export { MainComponent, TableComponent};
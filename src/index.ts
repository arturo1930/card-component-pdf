import MainComponent from "./MainComponent.vue";

export default {
  install(Vue: any, options: any) {
    Vue.component('main-remote-component', MainComponent);
  }
}

export { MainComponent };
# VueJS Component Archetype
The VueJs component archetype with Typescript support

## Getting started
Check this [link](https://conacyt-arquitectura.github.io/npm/configuracion-cliente-npm) for configuring your npm client for private repository.

To install with npm use `npm i @conacyt/card-component-pdf`  
To install with yarn use `yarn add @conacyt/card-component-pdf`
##Config new component
Edit
```
package-json  -> "name": "@conacyt/card-component-pdf",
package-json  -> "name": "@conacyt/card-component-pdf",
```
index.ts
```
import MainComponent from "./MainComponent.vue";
// Add components to export
export default {
  install(Vue: any, options: any) {
    Vue.component('main-remote-component', MainComponent);
  }
}

//export components
export { MainComponent };
```
## Usage
```
import {MainComponent} from "@conacyt/card-component-pdf";

components: { "main-remote-component": MainComponent },

<div id="app">
    <main-remote-component></main-remote-component>
</div>
```

## Development
For development with Hot Replace Module use `npm run serve` for serving the `example` folder.

### Building
Use `npm run build` to produce the distribution files in `dist` folder.
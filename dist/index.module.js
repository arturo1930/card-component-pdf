import { __extends, __decorate } from 'tslib';
import Component from 'vue-class-component';
import { Vue } from 'vue-property-decorator';

var MainComponent =
/** @class */
function (_super) {
  __extends(MainComponent, _super);

  function MainComponent() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  MainComponent = __decorate([Component], MainComponent);
  return MainComponent;
}(Vue);

/* script */
var __vue_script__ = MainComponent;
/* template */

var __vue_render__ = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('h1', [_vm._v("Main Component")]);
};

var __vue_staticRenderFns__ = [];
/* style */

var __vue_inject_styles__ = undefined;
/* scoped */

var __vue_scope_id__ = undefined;
/* functional template */

var __vue_is_functional_template__ = false;
/* component normalizer */

function __vue_normalize__(template, style, script, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
  var component = (typeof script === 'function' ? script.options : script) || {}; // For security concerns, we use only base name in production mode.

  component.__file = "MainComponent.vue";

  if (!component.render) {
    component.render = template.render;
    component.staticRenderFns = template.staticRenderFns;
    component._compiled = true;
    if (functional) component.functional = true;
  }

  component._scopeId = scope;

  return component;
}
/* style inject */

/* style inject SSR */


var MainComponent$1 = __vue_normalize__({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__);

var Table =
/** @class */
function (_super) {
  __extends(Table, _super);

  function Table() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  Table = __decorate([Component], Table);
  return Table;
}(Vue);

/* script */
var __vue_script__$1 = Table;
/* template */

var __vue_render__$1 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _vm._m(0);
};

var __vue_staticRenderFns__$1 = [function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('table', [_c('tr', [_c('td', [_vm._v("Name")]), _vm._v(" "), _c('td', [_vm._v("App")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("Luis")]), _vm._v(" "), _c('td', [_vm._v("Munguia")])])]);
}];
/* style */

var __vue_inject_styles__$1 = undefined;
/* scoped */

var __vue_scope_id__$1 = undefined;
/* functional template */

var __vue_is_functional_template__$1 = false;
/* component normalizer */

function __vue_normalize__$1(template, style, script, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
  var component = (typeof script === 'function' ? script.options : script) || {}; // For security concerns, we use only base name in production mode.

  component.__file = "Table.vue";

  if (!component.render) {
    component.render = template.render;
    component.staticRenderFns = template.staticRenderFns;
    component._compiled = true;
    if (functional) component.functional = true;
  }

  component._scopeId = scope;

  return component;
}
/* style inject */

/* style inject SSR */


var TableDemo = __vue_normalize__$1({
  render: __vue_render__$1,
  staticRenderFns: __vue_staticRenderFns__$1
}, __vue_inject_styles__$1, __vue_script__$1, __vue_scope_id__$1, __vue_is_functional_template__$1);

var index = {
  install: function install(Vue, options) {
    Vue.component('main-remote-component', MainComponent$1);
    Vue.component('main-remote-table', TableDemo);
  }
};

export default index;
export { MainComponent$1 as MainComponent, TableDemo };
//# sourceMappingURL=index.module.js.map

import InputComponent from './components/InputComponent.js';
import DivComponent from './components/DivComponent.js';
import { qs } from './util.js';

customElements.define('input-component', InputComponent);
customElements.define('div-component', DivComponent);

export default class App {
  $target;

  constructor(target) {
    this.$target = target;

    this.render();
  }

  render() {
    this.$target.innerHTML = `
    <input-component></input-component>
    <div-component></div-component>
    `;
  }
}

new App(qs('#app'));

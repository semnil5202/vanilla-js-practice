import InputComponent from './components/InputComponent.js';
import DivComponent from './components/DivComponent.js';
import { qs } from './util.js';

export default class App {
  $target;

  constructor(target) {
    this.$target = target;

    this.render();

    new InputComponent(qs('section'));
    new DivComponent(qs('.abc'));
  }

  render() {
    this.$target.innerHTML = `
    <section></section>
    <div class="abc"></div>
    `;
  }
}

new App(qs('#app'));

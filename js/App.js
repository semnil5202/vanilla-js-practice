import { qs } from './util.js';
import SectionComponent from './components/SectionComponent.js';
import DivComponentA from './components/DivComponentA.js';
import DivComponentB from './components/DivComponentB.js';
import DivComponentC from './components/DivComponentC.js';

export default class App {
  $target;

  constructor(target) {
    this.$target = target;

    this.render();

    new SectionComponent(qs('section'));
    new DivComponentA(qs('.a'));
    new DivComponentB(qs('.b'));
    new DivComponentC(qs('.c'));
  }

  render() {
    this.$target.innerHTML = `
    <section></section>
    <div class="a"></div>
    <div class="b"></div>
    <div class="c"></div>
    `;
  }
}

new App(qs('#app'));

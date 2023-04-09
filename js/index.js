import Container from './components/Container.js';
import Item from './components/Item.js';

customElements.define('container-component', Container);
customElements.define('item-component', Item);

class App {
  $target;

  constructor($target) {
    this.$target = $target;

    this.render();
  }

  render() {
    this.$target.innerHTML = `
    <container-component class="container-num-1">
      <h1>number 1 container</h1>
      <h2>this color is aliceblue</h2>
    </container-component>

    <container-component class="container-num-2">
      <h3>number 2 container</h3>
    </container-component>

    <container-component class="container-num-3">
      <h1>I am number 3 container</h1>
    </container-component>
    `;
  }
}

new App(document.querySelector('#app'));

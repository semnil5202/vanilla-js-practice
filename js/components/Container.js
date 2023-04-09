export default class Container extends HTMLElement {
  constructor() {
    super();

    this.render();
  }

  render() {
    this.insertAdjacentHTML('beforeend', this.template());
  }

  template() {
    return `
    <item-component class="item-1">
      <div>number 1 item</div>
    </item-component>
    <item-component class="item-2">
      <div>number 2 item</div> 
    </item-component>
    <item-component class="item-3">
      <div>number 3 item</div>
    </item-component>
    `;
  }
}

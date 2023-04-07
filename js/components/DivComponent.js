export default class DivComponent extends HTMLElement {
  constructor() {
    super();

    this.render();
    this.addEvent();
  }

  render(content = '') {
    this.innerHTML = `
    <div class="abc">
      <span>${content}</span>
    </div>`;
  }

  addEvent() {
    this.addEventListener('inputed', (e) => {
      this.render(e.detail.content);
    });
  }
}

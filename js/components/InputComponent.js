import { qs } from '../util.js';

export default class InputComponent extends HTMLElement {
  constructor() {
    super();

    this.render();
    this.addEvent();
  }

  render() {
    this.innerHTML = `
    <section>
      <form action="submit">
      <input type="text" />
      <button>submit</button>
      </form>
    </section>`;
  }

  addEvent() {
    this.addEventListener('submit', (e) => {
      e.preventDefault();

      qs('div-component').dispatchEvent(
        new CustomEvent('inputed', {
          detail: {
            content: [...e.target][0].value,
          },
        }),
      );
    });
  }
}

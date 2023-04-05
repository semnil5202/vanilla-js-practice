import inputModel from '../model/InputModel.js';

export default class SectionComponent {
  $target;

  constructor(target) {
    this.$target = target;

    this.render();
    this.addEvent();
  }

  render() {
    this.$target.innerHTML = `
    <form id="all" action="submit">
      <label>Rendering All</label>
      <input type="text" />
      <button>submit</button>
    </form>
    <form id="two" action="submit">
      <label>Rendering Two</label>
      <input type="text" />
      <button>submit</button>
    </form>
    <form id="one" action="submit">
      <label>Rendering One</label>
      <input type="text" />
      <button>submit</button>
    </form>`;
  }

  addEvent() {
    this.$target.addEventListener('submit', (e) => {
      e.preventDefault();

      if (e.target.id === 'all') this.notifyAll(e);
      if (e.target.id === 'two') this.notifyTwo(e);
      if (e.target.id === 'one') this.notifyOne(e);
    });
  }

  notifyAll(e) {
    inputModel.setState('ALL', [...e.target][0].value);
  }
  notifyTwo(e) {
    inputModel.setState('TWO', [...e.target][0].value);
  }
  notifyOne(e) {
    inputModel.setState('ONE', [...e.target][0].value);
  }
}

import Component from './Component.js';

export default class SectionComponent extends Component {
  constructor(qs) {
    super(qs);

    this.addEvent('submit', (e) => {
      this.eventCallback(e);
    });
  }

  template() {
    return `
    <form action="submit">
      <input type="text" />
      <input type="text" />
      <input type="text" />
      <button>submit</button>
    </form>`;
  }

  eventCallback(e) {
    e.preventDefault();

    const inputs = [...e.target]
      .filter((element) => element.nodeName === 'INPUT')
      .map((input) => input.value);

    this.inputModel.setState(inputs);
  }
}

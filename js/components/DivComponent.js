import Component from './Component.js';

export default class DivComponent extends Component {
  constructor(qs) {
    super(qs);
    this.inputModel.subscribe(this.render.bind(this));
  }

  template() {
    return `
    <span>${this.inputModel.getState()}</span>
    `;
  }
}

import inputModel from '../model/InputModel.js';

export default class DivComponentB {
  $target;

  constructor(target) {
    this.$target = target;

    inputModel.subscribe('ALL', this.render.bind(this));
    inputModel.subscribe('TWO', this.render.bind(this));

    this.render();
  }

  render() {
    this.$target.innerHTML = `
    <span>${inputModel.getState()}</span>
    `;
  }
}

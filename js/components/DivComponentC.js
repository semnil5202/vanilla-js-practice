import inputModel from '../model/InputModel.js';

export default class DivComponentC {
  $target;

  constructor(target) {
    this.$target = target;

    inputModel.subscribe('ALL', this.render.bind(this));

    this.render();
  }

  render() {
    this.$target.innerHTML = `
    <span>${inputModel.getState()}</span>
    `;
  }
}

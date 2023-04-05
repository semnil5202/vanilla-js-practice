import inputModel from '../domain/InputModel.js';

export default class DivComponent {
  $target;

  constructor(target) {
    this.$target = target;

    this.render();
    inputModel.registerRenderMethod(this.render.bind(this));
  }

  render() {
    this.$target.innerHTML = `
    <span>${inputModel.getNameState()}</span>
    `;
  }
}

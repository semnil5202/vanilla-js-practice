import inputModel from '../model/InputModel.js';

export default class Component {
  $target;
  inputModel;

  constructor($target) {
    this.$target = $target;
    this.inputModel = inputModel;

    this.render();
  }

  addEvent(eventType, callback) {
    this.$target.addEventListener(eventType, callback);

    return this;
  }

  template() {
    return '';
  }

  render() {
    this.template() && (this.$target.innerHTML = this.template());
  }
}

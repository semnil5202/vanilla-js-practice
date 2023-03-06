import Observer from '../Observer.js';

class InputModel extends Observer {
  static #instance;
  state;

  constructor() {
    super();

    if (InputModel.#instance) return InputModel.#instance;
    InputModel.#instance = this;

    this.state = '';
  }

  getState() {
    return this.state;
  }

  setState(inputs) {
    this.state = inputs.join('');
    this.notify();
  }
}

export default new InputModel();
